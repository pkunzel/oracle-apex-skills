# APEX_ESCAPE.HTML_TRUNC Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_TRUNC-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes HTML and limits the returned string to p_length bytes. This function returns the first p_length bytes of an input CLOB and escapes them. You can use this function if the input CLOB is too large to fit in a VARCHAR2 variable and it is sufficient to only display the first part of it.

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML_TRUNC` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML_TRUNC (
    p_string    IN CLOB,
    p_length    IN NUMBER   DEFAULT 4000 )
    return VARCHAR2 deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string to be escaped (CLOB). |
| `p_length` | The number of bytes from p_string that are escaped. For ASCII characters, a byte is a character. For Unicode characters, a single character can take up to 4 bytes. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.HTML_TRUNC(
        p_string => to_clob('Example text'),
        p_length => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

