# APEX_EXEC.SET_VALUE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_VALUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure sets DML column values for different data types. To be called after add_dml_row for each column value to be set. Each procedure is called either with the column name or with the column position.

## When To Use

Use this page when code needs the `APEX_EXEC.SET_VALUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN VARCHAR2 );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_position` | Position of the column to set the value for within the DML context. |
| `p_column_name` | Name of the column to set the value for. |
| `p_value` | Value to set. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.SET_VALUE(
        p_context => to_clob('Example text'),
        p_column_position => 1,
        p_value => 'EXAMPLE',
        p_column_name => 'EXAMPLE'
    );
end;
/
```

