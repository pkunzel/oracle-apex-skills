# APEX_PLUGIN_UTIL.PRINT_HIDDEN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_HIDDEN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs a hidden field to store the page item value.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_HIDDEN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_HIDDEN (
    p_item       IN apex_plugin.t_item,
    p_param      IN apex_plugin.t_item_render_param,
    p_id_postfix IN VARCHAR2 DEFAULT NULL,
    p_classes    IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The p_item record to be passed in. |
| `p_param` | The p_param record to be passed in. |
| `p_id_postfix` | A postfix for the ID of the hidden element. It is appended to the item's name. |
| `p_classes` | Additional classes for the hidden element. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Render APEX's standard hidden item field when a custom item should submit its current value without visible UI.

```sql
begin
    apex_plugin_util.print_hidden(
        p_item       => p_item,
        p_param      => p_param,
        p_id_postfix => '_HIDDEN',
        p_classes    => 'custom-item-hidden');
end;
/
```
