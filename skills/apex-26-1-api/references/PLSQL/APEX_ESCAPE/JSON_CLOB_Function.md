# APEX_ESCAPE.JSON_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JSON_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function returns p_string with all special characters escaped.

## When To Use

Use this page when code needs the `APEX_ESCAPE.JSON_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.JSON_CLOB (
    p_string    IN CLOB )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The string to be escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result clob;
begin
    l_result := apex_escape.json_clob(p_string => to_clob('Line 1' || chr(10) || '"quoted" value'));
    sys.dbms_output.put_line(dbms_lob.substr(l_result, 4000, 1));
end;
/
```
