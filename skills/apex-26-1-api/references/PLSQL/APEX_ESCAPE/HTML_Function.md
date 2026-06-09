# APEX_ESCAPE.HTML Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes characters which can change the context in an HTML environment. It is an extended version of sys.htf.escape_sc .

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2 deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The string text that is escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.HTML(
        p_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

