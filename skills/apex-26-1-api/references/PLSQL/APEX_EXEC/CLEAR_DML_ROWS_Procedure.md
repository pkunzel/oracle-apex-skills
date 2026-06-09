# APEX_EXEC.CLEAR_DML_ROWS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLEAR_DML_ROWS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure clears all DML rows which have been added with add_dml_rows .

## When To Use

Use this page when code needs the `APEX_EXEC.CLEAR_DML_ROWS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.CLEAR_DML_ROWS (
    p_context               IN t_context )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.CLEAR_DML_ROWS(
        p_context => to_clob('Example text')
    );
end;
/
```

