# APEX_ESCAPE.HTML_ATTRIBUTE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ATTRIBUTE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

Important:

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML_ATTRIBUTE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML_ATTRIBUTE (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2 deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string that is escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.HTML_ATTRIBUTE(
        p_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

