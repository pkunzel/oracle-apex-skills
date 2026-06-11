# APEX_ESCAPE.STRIPHTML Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRIPHTML-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function returns p_string (VARCHAR2) removing HTML tags, leaving plain text.

## When To Use

Use this page when code needs the `APEX_ESCAPE.STRIPHTML` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.STRIPHTML (
    p_string    IN VARCHAR2 )
    RETURN VARCHAR2 deterministic;
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
    l_result varchar2(32767);
begin
    l_result := apex_escape.striphtml(p_string => '<p>Only text remains.</p>');
    sys.dbms_output.put_line(dbms_lob.substr(to_clob(l_result), 4000, 1));
end;
/
```
