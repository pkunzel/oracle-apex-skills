# APEX_ESCAPE.REGEXP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REGEXP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes characters that can change the context in a regular expression. It should be used to secure user input. The following list depicts ascii characters that the function escapes with a backslash (\):

## When To Use

Use this page when code needs the `APEX_ESCAPE.REGEXP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.REGEXP (
    p_string    IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | Text to escape. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_escape.REGEXP(
        p_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

