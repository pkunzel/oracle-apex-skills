# APEX_PLUGIN_UTIL.GET_ELEMENT_ATTRIBUTES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ELEMENT_ATTRIBUTES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function returns some of the standard attributes of an HTML element (such as ID, name, required, placeholder, aria-error-attributes, class) which generates an HTML tag (including input, select, or textarea) to get a consistent set of attributes.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_ELEMENT_ATTRIBUTES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_ELEMENT_ATTRIBUTES (
    p_item                   IN apex_plugin.t_item,
    p_name                   IN VARCHAR2 DEFAULT NULL,
    p_default_class          IN VARCHAR2 DEFAULT NULL,
    p_add_id                 IN BOOLEAN  DEFAULT TRUE,
    p_add_required           IN BOOLEAN  DEFAULT TRUE,
    p_add_labelledby         IN BOOLEAN  DEFAULT TRUE,
    p_aria_describedby_id    IN VARCHAR2 DEFAULT NULL,
    p_add_multi_value        IN BOOLEAN  DEFAULT FALSE ) 
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The p_item parameter of your plug-in function. |
| `p_name` | The value returned by apex_plugin.get_input_name_for_item . |
| `p_default_class` | Default CSS class contained in the result string. |
| `p_add_id` | If TRUE , then the ID attribute is also contained in the result string. |
| `p_add_required` | Set to TRUE to include the required HTML attribute. Internally, it checks whether p_item is marked as required. |
| `p_add_labelled_by` | Set to FALSE to render an HTML input element such as input, select, or textarea which does not require specifying the aria-labelledby attribute because the label's for attribute works for those HTML input elements. Set it to TRUE for all non-standard form element widgets (such as those using div or span) which enable focus for screen reading software. Note: Inclusion of aria-labelledby requires the item plug-in to have Standard Form Element set to No and that the item's corresponding label template defines a #LABEL_ID# substitution. |
| `p_aria_describedby_id` | Pass additional IDs here that you would like get_element_attributes to include in the value it renders for the 'aria-describedby' attribute on the form element. This is used to convey additional information to users of assistive technologies when they are focused on the form field. |
| `p_add_multi_value` | If TRUE , renders the required attributes for multiple values (multi-value, multi-value-storage, multi-value-separator). Used for items that support the multiple value infrastructure. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_plugin_util.GET_ELEMENT_ATTRIBUTES(
        p_item => null,
        p_name => 'EXAMPLE',
        p_default_class => 'EXAMPLE',
        p_add_id => true,
        p_add_required => true,
        p_add_labelledby => true,
        p_aria_describedby_id => 'EXAMPLE',
        p_add_multi_value => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin_util.GET_ELEMENT_ATTRIBUTES(
            p_item => null,
            p_name => 'EXAMPLE',
            p_default_class => 'EXAMPLE',
            p_add_id => true,
            p_add_required => true,
            p_add_labelledby => true,
            p_aria_describedby_id => 'EXAMPLE',
            p_add_multi_value => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

