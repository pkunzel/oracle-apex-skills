# APEX_PLUGIN_UTIL.PRINT_DISPLAY_ONLY Procedure Signature 2 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_DISPLAY_ONLY-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_DISPLAY_ONLY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_DISPLAY_ONLY (
    p_item             IN apex_plugin_util.t_item,
    p_display_value    IN apex_session_state.t_value,
    p_show_line_breaks IN BOOLEAN,
    p_escape           IN BOOLEAN  DEFAULT NULL,
    p_id_postfix       IN VARCHAR2 DEFAULT '_DISPLAY',
    p_show_icon        IN BOOLEAN  DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The p_item record to be passed in. |
| `p_display_value` | Text to be displayed. p_param.session_state_value should be passed in. |
| `p_show_line_breaks` | If set to TRUE line breaks in p_display_value are changed to so that the browser renders them as line breaks. |
| `p_escape` | Whether to escape the value. If p_escape is unspecified, the value from p_item is used. |
| `p_id_postfix` | Postfix which is getting added to the value in p_item.name to get the ID for the SPAN tag. Default is _DISPLAY . |
| `p_show_icon` | Whether to render the item icon. Default is TRUE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This display-only helper is deprecated. Prefer PRINT_READ_ONLY in current item plug-ins.

```sql
begin
    apex_plugin_util.print_display_only(
        p_item_name        => p_item.name,
        p_display_value    => l_display_value,
        p_show_line_breaks => true,
        p_attributes       => 'class="readonly-display"',
        p_id_postfix       => '_DISPLAY');
end;
/
```
