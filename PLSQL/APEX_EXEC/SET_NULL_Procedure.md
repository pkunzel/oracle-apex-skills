# APEX_EXEC.SET_NULL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_NULL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure sets procedures to set a DML column value to NULL. Useful when the row is initialized from a query context with set_values and the new value of one of the columns should be NULL .

## When To Use

Use this page when code needs the `APEX_EXEC.SET_NULL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.SET_NULL (
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_position` | Position of the column to set the value for within the DML context. |
| `p_column_name` | Name of the column to set the value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.SET_NULL(
        p_context => to_clob('Example text'),
        p_column_position => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.SET_NULL(
            p_context => to_clob('Example text'),
            p_column_position => 1
        );
end;
/
```

