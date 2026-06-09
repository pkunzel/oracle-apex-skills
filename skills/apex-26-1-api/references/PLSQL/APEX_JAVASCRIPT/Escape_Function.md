# APEX_JAVASCRIPT.Escape Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Escape-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This function escapes text to be used in JavaScript. This function uses APEX_ESCAPE.JS_LITERAL to escape characters and provide a reference to that other API.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.Escape Function` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ESCAPE (
    p_text  IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_text` | Text to be escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_javascript.Escape Function(
        p_text => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

