# APEX_ESCAPE.CSV Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CSV-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes special characters in a CSV value (VARCHAR2).

## When To Use

Use this page when code needs the `APEX_ESCAPE.CSV` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.CSV (
    p_string        IN VARCHAR2,
    p_quote         IN BOOLEAN  DEFAULT TRUE,
    p_strip_html    IN BOOLEAN  DEFAULT FALSE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The string to be escaped. |
| `p_quote` | If TRUE (default) and p_string contains special characters, enclose the result with the p_enclose_by parameter of set_csv_parameters . |
| `p_strip_html` | Default FALSE . If TRUE , remove any HTML tags. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.CSV(
        p_string => 'EXAMPLE',
        p_quote => true,
        p_strip_html => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

