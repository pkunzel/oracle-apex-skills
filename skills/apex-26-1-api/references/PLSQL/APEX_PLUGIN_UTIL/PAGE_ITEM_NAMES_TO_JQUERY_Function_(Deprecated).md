# APEX_PLUGIN_UTIL.PAGE_ITEM_NAMES_TO_JQUERY Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PAGE_ITEM_NAMES_TO_JQUERY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PAGE_ITEM_NAMES_TO_JQUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN_UTIL.PAGE_ITEM_NAMES_TO_JQUERY (
    p_page_item_names   IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_item_names` | Comma-delimited list of page item names. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This helper is deprecated. Existing legacy plug-ins can use it to convert item names into a jQuery selector.

```sql
declare
    l_selector varchar2(4000);
begin
    l_selector := apex_plugin_util.page_item_names_to_jquery(
        p_page_item_names => 'P10_STATUS,P10_OWNER');
end;
/
```
