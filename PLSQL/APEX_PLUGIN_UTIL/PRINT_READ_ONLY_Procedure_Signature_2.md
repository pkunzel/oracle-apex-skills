# APEX_PLUGIN_UTIL.PRINT_READ_ONLY Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_READ_ONLY-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs a read-only text field or textarea. Use when displaying multiple values.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_READ_ONLY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_READ_ONLY (
    p_item              IN apex_plugin_api.t_item,
    p_param             IN apex_plugin_api.t_item_render_param,
    p_value             IN apex_session_state_api.t_value
                                   DEFAULT apex_session_state_api.t_value(),
    p_display_values    IN apex_application_global.vc_arr2,
    p_width             IN PLS_INTEGER                        DEFAULT NULL,
    p_height            IN PLS_INTEGER                        DEFAULT NULL,
    p_css_classes       IN VARCHAR2                           DEFAULT NULL,
    p_protected         IN BOOLEAN                            DEFAULT TRUE,
    p_escape            IN BOOLEAN                            DEFAULT TRUE,
    p_show_icon         IN BOOLEAN                            DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The item's p_item variable. |
| `p_param` | The item's p_param variable. |
| `p_value` | (Optional) The unescaped value (API always escapes it). If NULL, defaults to p_param.session_state_value . |
| `p_display_values` | Array of display values. |
| `p_width` | (Optional) The width of the item. If NULL, uses p_item.element_width . |
| `p_height` | (Optional) The height of the item. If NULL, uses p_item.element_height . If height is greater than 1, API renders a textarea instead of a text field. |
| `p_css_classes` | (Optional) Additional CSS classes to be added to the text field or textarea. |
| `p_protected` | Add checksum for the value. Default TRUE . |
| `p_escape` | Controls escaping of p_display_values ( p_value is always escaped). Default TRUE . |
| `p_show_icon` | Controls if the icon defined for the page item is rendered. Defaults TRUE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.PRINT_READ_ONLY(
        p_item => null,
        p_param => null,
        p_value => null,
        p_display_values => 'EXAMPLE',
        p_width => 1,
        p_height => 1,
        p_css_classes => 'EXAMPLE',
        p_protected => true,
        p_escape => true,
        p_show_icon => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.PRINT_READ_ONLY(
            p_item => null,
            p_param => null,
            p_value => null,
            p_display_values => 'EXAMPLE',
            p_width => 1,
            p_height => 1,
            p_css_classes => 'EXAMPLE',
            p_protected => true,
            p_escape => true,
            p_show_icon => true
        );
end;
/
```

