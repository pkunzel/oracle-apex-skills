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

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_plugin_util.PAGE_ITEM_NAMES_TO_JQUERY(
        p_page_item_names => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

