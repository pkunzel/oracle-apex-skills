# APEX_EXEC.ADD_DML_ARRAY_ROW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure adds a child row for the current array or the array column provided as p_column_name . The cursor moves to the new row within the specified array column, and all subsequent calls to SET_VALUE target the attributes of this new array element. Only supported within DML contexts on REST Data Sources.

## When To Use

Use this page when code needs the `APEX_EXEC.ADD_DML_ARRAY_ROW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ADD_DML_ARRAY_ROW (
    p_context               IN t_context,
    p_column_name           IN VARCHAR2        DEFAULT NULL,
    p_column_position       IN PLS_INTEGER,
    p_operation             IN t_dml_operation DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_name` | Name of the array column (must exist within the current context) to add a new row for. |
| `p_column_position` | Position of the column to set the value for within the DML context. |
| `p_operation` | DML operation to be executed on this row. Use constants c_dml_operation_* . If omitted, the child row inherits the operation from its parent. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.ADD_DML_ARRAY_ROW(
        p_context => to_clob('Example text'),
        p_column_name => 'EXAMPLE',
        p_column_position => 1,
        p_operation => null
    );
end;
/
```

