# APEX_ESCAPE.NOOP Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/NOOP-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function returns p_string (CLOB) unchanged. Use this function to silence automatic injection detection tests, similar to DBMS_ASSERT.NOOP for SQL injection.

## When To Use

Use this page when code needs the `APEX_ESCAPE.NOOP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.NOOP (
    p_string    IN CLOB )
    RETURN CLOB deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input text string. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result clob;
begin
    l_result := apex_escape.noop(p_string => to_clob('<span>already escaped upstream</span>'));
    sys.dbms_output.put_line(dbms_lob.substr(l_result, 4000, 1));
end;
/
```
