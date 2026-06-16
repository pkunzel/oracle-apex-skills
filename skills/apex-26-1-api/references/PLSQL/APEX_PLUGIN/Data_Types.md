# APEX_PLUGIN.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Item plug-ins receive item metadata and render parameters, then return a render-result record.

```sql
function render_rating_item (
    p_item   in apex_plugin.t_item,
    p_plugin in apex_plugin.t_plugin,
    p_param  in apex_plugin.t_item_render_param )
    return apex_plugin.t_item_render_result
is
    l_result     apex_plugin.t_item_render_result;
    l_input_name apex_plugin.t_input_name;
begin
    l_input_name := apex_plugin.get_input_name_for_item;

    sys.htp.p(
        '<input type="range"' ||
        ' id="' || apex_escape.html_attribute(p_item.name) || '"' ||
        ' name="' || apex_escape.html_attribute(l_input_name) || '"' ||
        ' value="' || apex_escape.html_attribute(p_param.value) || '"' ||
        ' min="1" max="5">');

    l_result.is_navigable := true;
    l_result.navigable_dom_id := p_item.name;
    return l_result;
end;
/
```
