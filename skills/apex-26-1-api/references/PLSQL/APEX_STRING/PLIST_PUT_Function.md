# APEX_STRING.PLIST_PUT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_PUT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function inserts or updates property list value for a key.

## When To Use

Use this page when code needs the `APEX_STRING.PLIST_PUT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PLIST_PUT (
    p_table IN OUT NOCOPY apex_t_varchar2,
    p_key   IN            VARCHAR2,
    p_value IN            VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_key` | The input key. |
| `p_value` | The input value. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set or replace named values in a property list.

```sql
declare
    l_props apex_t_varchar2;
begin
    l_props := apex_string.plist_put(l_props, 'status', 'open');
    l_props := apex_string.plist_put(l_props, 'status', 'closed');
end;
/
```

