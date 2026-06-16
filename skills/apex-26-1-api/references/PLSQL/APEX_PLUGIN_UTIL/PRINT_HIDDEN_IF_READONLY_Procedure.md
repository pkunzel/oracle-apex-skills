# APEX_PLUGIN_UTIL.PRINT_HIDDEN_IF_READONLY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_HIDDEN_IF_READONLY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs a hidden field to store the page item value if the page item is rendered as readonly and is not printer friendly. If this procedure is called in an item type plug-in, the parameters of the plug-in interface should directly be passed in.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_HIDDEN_IF_READONLY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_HIDDEN_IF_READ_ONLY (
    p_item_name             IN VARCHAR2,
    p_value                 IN VARCHAR2,
    p_is_readonly           IN BOOLEAN,
    p_is_printer_friendly   IN BOOLEAN,
    p_id_postfix            IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item_name` | Name of the page item. For this parameter the p_item.name should be passed in. |
| `p_value` | Current value of the page item. For this parameter p_value should be passed in. |
| `p_is_readonly` | Is the item rendered readonly. For this parameter p_is_readonly should be passed in. |
| `p_is_printer_friendly` | Is the item rendered in printer friendly mode. For this parameter p_is_printer_friendly should be passed in. |
| `p_id_postfix` | Used to generate the ID attribute of the hidden field. It is build based on p_item_name and the value in p_id_postfix . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Call this from an item render callback before branching into readonly and editable markup.

```sql
begin
    apex_plugin_util.print_hidden_if_readonly(
        p_item_name           => p_item.name,
        p_value               => p_param.value,
        p_is_readonly         => p_param.is_readonly,
        p_is_printer_friendly => p_param.is_printer_friendly);
end;
/
```
