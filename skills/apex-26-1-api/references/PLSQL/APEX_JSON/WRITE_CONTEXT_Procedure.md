# APEX_JSON.WRITE_CONTEXT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE_CONTEXT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes an array with all rows that the context handle returns. Each row is a separate object.

## When To Use

Use this page when code needs the `APEX_JSON.WRITE_CONTEXT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE WRITE_CONTEXT (
   p_name        IN VARCHAR2
   p_context     IN apex_exec.t_context,
   p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The attribute name. |
| `p_context` | The context handle from an APEX_EXEC.OPEN_QUERY_CONTEXT call. |
| `p_write_null` | Whether to write (TRUE) or omit (FALSE) NULL values. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_json.WRITE_CONTEXT(
        p_name => 'EXAMPLE',
        p_context => to_clob('Example text'),
        p_write_null => true
    );
end;
/
```

