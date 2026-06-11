# APEX_ESCAPE.HTML_TRUNC Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_TRUNC-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes HTML and limits the returned string to p_length bytes. This function returns the first p_length bytes of an input VARCHAR2 and escapes them. You can use this function if the input VARCHAR2 is too large to fit in a VARCHAR2 variable and it is sufficient to only display the first part of it.

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML_TRUNC` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML_TRUNC (
    p_string    IN VARCHAR2,
    p_length    IN NUMBER   DEFAULT 4000 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string that is escaped. |
| `p_length` | The number of bytes from p_string that are escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_escape.html_trunc(p_string => '<strong>Quarterly revenue & margin</strong>', p_length => 25);
    sys.dbms_output.put_line(dbms_lob.substr(to_clob(l_result), 4000, 1));
end;
/
```
