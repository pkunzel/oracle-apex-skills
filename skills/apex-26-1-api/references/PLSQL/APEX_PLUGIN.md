# APEX_PLUGIN

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html)

Status: curated first-pass reference.

## Purpose

`APEX_PLUGIN` defines the PL/SQL contract between Oracle APEX and custom plug-ins. It contains the record types passed into plug-in callbacks, result record types returned from callbacks, constants for validation and escaping behavior, and utility functions that connect rendered HTML to APEX session state and Ajax callbacks.

Use this package when implementing item type, region type, dynamic action, process, authentication, authorization, REST source, or other APEX plug-ins.

## When To Use

Use `APEX_PLUGIN` when code runs as a plug-in callback selected in Shared Components. Normal page processes, computations, validations, and application code usually use other APEX packages instead.

Common tasks:

- Render HTML for a custom item or region.
- Return metadata for an item plug-in.
- Validate a custom item value.
- Expose an Ajax identifier that client code calls with `apex.server.plugin`.
- Read plug-in attributes through the 26.1 `attributes` object.
- Return result records such as `t_item_render_result`, `t_region_render_result`, or `t_process_exec_result`.

## Mental Model

APEX calls your PL/SQL function and passes metadata records such as `p_plugin`, `p_item`, `p_region`, `p_process`, or `p_dynamic_action`. Your code writes HTML or JSON to the HTTP buffer when appropriate, then returns the documented result record.

In APEX 26.1, many legacy `attribute_01`, `attribute_02`, and similar fields are marked deprecated in the documented types. Prefer `p_plugin.attributes.get_varchar2`, `get_number`, and `get_boolean` with custom attribute static IDs.

## API Surface

| Need | Members |
| --- | --- |
| Plug-in metadata | `t_plugin`, `t_plugin_attributes` |
| Item plug-ins | `t_item`, `t_item_render_param`, `t_item_render_result`, `t_item_ajax_result`, `t_item_validation_result`, `t_item_meta_data_result` |
| Region plug-ins | `t_region`, `t_region_column`, `t_region_columns`, `t_region_render_param`, `t_region_render_result`, `t_region_ajax_result` |
| Dynamic action plug-ins | `t_dynamic_action`, `t_dynamic_action_render_param`, `t_dynamic_action_render_result`, `t_dynamic_action_ajax_param`, `t_dynamic_action_ajax_result` |
| Process plug-ins | `t_process`, `t_process_exec_result` |
| Authentication and authorization plug-ins | `t_authentication*`, `t_authorization`, `t_authorization_exec_result` |
| Validation display constants | `c_inline_in_notification`, `c_inline_with_field`, `c_inline_with_field_and_notif`, `c_on_error_page` |
| Escape mode constants | `t_escape_mode`, `c_escape_mode_raw`, `c_escape_mode_html`, `c_escape_mode_html_attribute`, `c_escape_mode_javascript`, `c_escape_mode_striphtml`, `c_escape_mode_json` |
| Ajax and item name helpers | `GET_AJAX_IDENTIFIER`, `GET_INPUT_NAME_FOR_ITEM`, `GET_KEEP_BACKGROUND_EXECS` |
| Deprecated helper | `GET_INPUT_NAME_FOR_PAGE_ITEM` |

## Attribute Access

Prefer static IDs for plug-in attributes and retrieve them from the `attributes` object.

```sql
declare
    l_css_class varchar2(4000);
    l_required  boolean;
    l_rows      number;
begin
    l_css_class := p_plugin.attributes.get_varchar2(
        p_static_id     => 'CSS_CLASS',
        p_default_value => 'my-plugin');

    l_required := p_item.attributes.get_boolean(
        p_static_id     => 'REQUIRED',
        p_default_value => false);

    l_rows := p_region.attributes.get_number(
        p_static_id     => 'MAX_ROWS',
        p_default_value => 50);
end;
/
```

Do not pass both `p_do_substitutions` and `p_do_serveronly_substitutions` in the same `get_varchar2` call.

## Render Item Plug-In

Assuming an item type plug-in render callback using the APEX 26.1 item parameter and result records:

```sql
function render_rating_item (
    p_item   in apex_plugin.t_item,
    p_plugin in apex_plugin.t_plugin,
    p_param  in apex_plugin.t_item_render_param )
    return apex_plugin.t_item_render_result
is
    l_result     apex_plugin.t_item_render_result;
    l_input_name varchar2(4000);
    l_value      varchar2(32767) := p_param.value;
begin
    l_input_name := apex_plugin.get_input_name_for_item(false);

    apex_plugin_util.print_hidden_if_readonly(
        p_item_name           => p_item.name,
        p_value               => l_value,
        p_is_readonly         => p_param.is_readonly,
        p_is_printer_friendly => p_param.is_printer_friendly);

    if not p_param.is_readonly then
        sys.htp.p(
            '<input type="range"' ||
            ' id="'    || apex_escape.html_attribute(p_item.name) || '"' ||
            ' name="'  || apex_escape.html_attribute(l_input_name) || '"' ||
            ' value="' || apex_escape.html_attribute(l_value) || '"' ||
            ' min="1" max="5" class="my-rating-item">');

        l_result.is_navigable     := true;
        l_result.navigable_dom_id := p_item.name;
    else
        sys.htp.p('<span class="my-rating-readonly">');
        apex_plugin_util.print_escaped_value(l_value);
        sys.htp.p('</span>');
    end if;

    return l_result;
end;
/
```

Notes:

- Use `GET_INPUT_NAME_FOR_ITEM` for form controls that should post back to APEX session state.
- Use `apex_escape.html_attribute` for attributes and `apex_plugin_util.print_escaped_value` or `apex_escape.html` for text content.
- Return `is_navigable` and `navigable_dom_id` when APEX should be able to place focus in the item.

## Validate Item Plug-In

Assuming a validation callback with the current item value available as `p_value`:

```sql
function validate_hex_color (
    p_item   in apex_plugin.t_item,
    p_plugin in apex_plugin.t_plugin,
    p_value  in varchar2 )
    return apex_plugin.t_item_validation_result
is
    l_result apex_plugin.t_item_validation_result;
begin
    if p_value is not null
       and not regexp_like(p_value, '^#[[:xdigit:]]{6}$')
    then
        l_result.message := p_item.plain_label || ' must be a hex color like #336699.';
        l_result.display_location := apex_plugin.c_inline_with_field_and_notif;
        l_result.page_item_name := p_item.name;
    end if;

    return l_result;
end;
/
```

Use the display constants instead of hard-coded strings when returning validation locations.

## Render Region Plug-In

Assuming a region type plug-in render callback:

```sql
function render_task_region (
    p_region in apex_plugin.t_region,
    p_plugin in apex_plugin.t_plugin,
    p_param  in apex_plugin.t_region_render_param )
    return apex_plugin.t_region_render_result
is
    l_result          apex_plugin.t_region_render_result;
    l_ajax_identifier varchar2(4000);
begin
    l_ajax_identifier := apex_plugin.get_ajax_identifier;

    sys.htp.p(
        '<section id="' || apex_escape.html_attribute(p_region.dom_id) || '"' ||
        ' class="task-region"' ||
        ' data-ajax-id="' || apex_escape.html_attribute(l_ajax_identifier) || '">' ||
        '<input id="' || apex_escape.html_attribute(p_region.dom_id || '_search') || '"' ||
        ' type="search" class="task-region-search">' ||
        '<div class="task-region-body"></div>' ||
        '</section>');

    l_result.navigable_dom_id := p_region.dom_id || '_search';
    return l_result;
end;
/
```

Pair region rendering with a client region interface in JavaScript, usually through `apex.region.create`, so app code can call `apex.region("static_id").refresh()`.

## Ajax Callback Pattern

Render callback:

```sql
apex_javascript.add_onload_code(
    p_code => 'myTasks.init(' ||
              apex_javascript.add_value(p_region.dom_id) ||
              apex_javascript.add_value(apex_plugin.get_ajax_identifier, false) ||
              ');',
    p_key  => p_region.dom_id || '_init');
```

Client code:

```javascript
apex.server.plugin( ajaxIdentifier, {
    x01: "open"
} ).done( function( data ) {
    apex.region( "tasks" ).element.find( ".task-region-body" ).html( data.html );
} );
```

Ajax callback:

```sql
function ajax_tasks (
    p_region in apex_plugin.t_region,
    p_plugin in apex_plugin.t_plugin )
    return apex_plugin.t_region_ajax_result
is
    l_result apex_plugin.t_region_ajax_result;
begin
    apex_json.open_object;
    apex_json.write('html', '<p>No tasks.</p>');
    apex_json.close_object;

    return l_result;
end;
/
```

## Safety Notes

- Escape every value according to where it is emitted: HTML text, HTML attribute, JavaScript literal, JSON, or SQL.
- Treat Ajax input values such as `apex_application.g_x01` as untrusted.
- Use `p_item.session_state_name` where session-state identity matters; use `p_item.name` for the rendered item name and DOM ID.
- Use `p_region.dom_id` rather than deprecated static ID fields when generating region DOM markup.
- Prefer `attributes.get_*` over deprecated numbered attributes.
- Keep render callbacks deterministic; defer data mutations to processes, Ajax callbacks, or explicit actions.
- For exact type fields and callback signatures, open the local member detail pages below.

## Related APIs

- [APEX_PLUGIN_UTIL](APEX_PLUGIN_UTIL.md) for rendering, LOV, SQL, debug, and REST helper functions.
- [APEX_JAVASCRIPT](APEX_JAVASCRIPT.md) for registering plug-in JavaScript.
- [APEX_CSS](APEX_CSS.md) for registering plug-in CSS.
- [apex.item](../JavaScript/apex.item.md) and [item](../JavaScript/item.md) for custom item client interfaces.
- [apex.region](../JavaScript/apex.region.md) and [region](../JavaScript/region.md) for custom region client interfaces.
- [apex.server](../JavaScript/apex.server.md) for client Ajax calls.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| About Configuring Flexible Remote Servers in APEX | about | [local](APEX_PLUGIN/About_Configuring_Flexible_Remote_Servers_in_APEX.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-Configuring-Flexible-Remote-Servers.html) |
| Constants | constants | [local](APEX_PLUGIN/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Constants.html) |
| Data Types | data types | [local](APEX_PLUGIN/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| c_inline_in_notification | topic | [local](APEX_PLUGIN/c_inline_in_notification.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| c_inline_with_field | topic | [local](APEX_PLUGIN/c_inline_with_field.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| c_inline_with_field_and_notif | topic | [local](APEX_PLUGIN/c_inline_with_field_and_notif.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| c_on_error_page | topic | [local](APEX_PLUGIN/c_on_error_page.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authentication | topic | [local](APEX_PLUGIN/t_authentication.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authentication_ajax_result | topic | [local](APEX_PLUGIN/t_authentication_ajax_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authentication_auth_result | topic | [local](APEX_PLUGIN/t_authentication_auth_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authentication_inval_result | topic | [local](APEX_PLUGIN/t_authentication_inval_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authentication_logout_result | topic | [local](APEX_PLUGIN/t_authentication_logout_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authentication_sentry_result | topic | [local](APEX_PLUGIN/t_authentication_sentry_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authorization | topic | [local](APEX_PLUGIN/t_authorization.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_authorization_exec_result | topic | [local](APEX_PLUGIN/t_authorization_exec_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_dynamic_action | topic | [local](APEX_PLUGIN/t_dynamic_action.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_dynamic_action_ajax_param | topic | [local](APEX_PLUGIN/t_dynamic_action_ajax_param.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_dynamic_action_ajax_result | topic | [local](APEX_PLUGIN/t_dynamic_action_ajax_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_dynamic_action_render_param | topic | [local](APEX_PLUGIN/t_dynamic_action_render_param.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_dynamic_action_render_result | topic | [local](APEX_PLUGIN/t_dynamic_action_render_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_escape_mode | topic | [local](APEX_PLUGIN/t_escape_mode.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_item | topic | [local](APEX_PLUGIN/t_item.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_item_ajax_result | topic | [local](APEX_PLUGIN/t_item_ajax_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_item_meta_data_result | topic | [local](APEX_PLUGIN/t_item_meta_data_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_item_render_param | topic | [local](APEX_PLUGIN/t_item_render_param.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_item_render_result | topic | [local](APEX_PLUGIN/t_item_render_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_item_validation_result | topic | [local](APEX_PLUGIN/t_item_validation_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_plugin | topic | [local](APEX_PLUGIN/t_plugin.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_plugin_attributes | topic | [local](APEX_PLUGIN/t_plugin_attributes.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_process | topic | [local](APEX_PLUGIN/t_process.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_process_exec_result | topic | [local](APEX_PLUGIN/t_process_exec_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_region | topic | [local](APEX_PLUGIN/t_region.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_region_ajax_result | topic | [local](APEX_PLUGIN/t_region_ajax_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_region_column | topic | [local](APEX_PLUGIN/t_region_column.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_region_columns | topic | [local](APEX_PLUGIN/t_region_columns.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_region_render_param | topic | [local](APEX_PLUGIN/t_region_render_param.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_region_render_result | topic | [local](APEX_PLUGIN/t_region_render_result.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_remote_server_config | topic | [local](APEX_PLUGIN/t_remote_server_config.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| t_remote_server_info | topic | [local](APEX_PLUGIN/t_remote_server_info.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html) |
| GET_AJAX_IDENTIFIER Function | function | [local](APEX_PLUGIN/GET_AJAX_IDENTIFIER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AJAX_IDENTIFIER-Function.html) |
| GET_KEEP_BACKGROUND_EXECS Function | function | [local](APEX_PLUGIN/GET_KEEP_BACKGROUND_EXECS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html) |
| GET_INPUT_NAME_FOR_ITEM Function | function | [local](APEX_PLUGIN/GET_INPUT_NAME_FOR_ITEM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN_UTIL.GET_INPUT_NAME_FOR_ITEM-Function.html) |
| GET_INPUT_NAME_FOR_PAGE_ITEM Function (Deprecated) | function | [local](APEX_PLUGIN/GET_INPUT_NAME_FOR_PAGE_ITEM_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INPUT_NAME_FOR_PAGE_ITEM-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
