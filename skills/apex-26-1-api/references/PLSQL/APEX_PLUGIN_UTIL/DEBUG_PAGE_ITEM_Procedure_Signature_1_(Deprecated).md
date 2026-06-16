# APEX_PLUGIN_UTIL.DEBUG_PAGE_ITEM Procedure Signature 1 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_PAGE_ITEM-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.DEBUG_PAGE_ITEM` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN_UTIL.DEBUG_PAGE_ITEM (
    p_plugin    IN apex_plugin.t_plugin,
    p_page_item IN apex_plugin.t_page_item );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plugin` | This is the p_plugin parameter of your plug-in function. |
| `p_page_item` | This is the p_page_item parameter of your plug-in function. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This API is deprecated. Use it only in legacy item plug-ins that still receive the older page-item record.

```sql
begin
    apex_plugin_util.debug_page_item(
        p_plugin    => p_plugin,
        p_page_item => p_page_item);
end;
/
```
