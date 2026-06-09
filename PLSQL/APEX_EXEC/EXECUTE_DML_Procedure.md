# APEX_EXEC.EXECUTE_DML Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_DML-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Covers the documented procedure APEX_EXEC.EXECUTE_DML.

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_DML` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.EXECUTE_DML (
    p_context               IN t_context,
    p_continue_on_error     IN BOOLEAN DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_continue_on_error` | Whether to continue executing DML for the remaining rows after an error occurred. Default FALSE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.EXECUTE_DML(
        p_context => to_clob('Example text'),
        p_continue_on_error => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.EXECUTE_DML(
            p_context => to_clob('Example text'),
            p_continue_on_error => true
        );
end;
/
```

