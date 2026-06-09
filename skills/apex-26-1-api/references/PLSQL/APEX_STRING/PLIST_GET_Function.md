# APEX_STRING.PLIST_GET Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_GET-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function gets the property list value for a key.

## When To Use

Use this page when code needs the `APEX_STRING.PLIST_GET` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PLIST_GET (
    p_table IN apex_t_varchar2,
    p_key IN VARCHAR2 )
    RETURN VARCHAR2
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_key` | The input key. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_string.PLIST_GET(
        p_table => 'EXAMPLE',
        p_key => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

