# APEX_EXEC.ADD_DML_ROW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ROW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure adds one row to the DML context. This is called after the open_dml_context and before the execute_dml procedures. This procedure can be called multiple times to process multiple rows. All columns of the new row are initialized with NULL .

## When To Use

Use this page when code needs the `APEX_EXEC.ADD_DML_ROW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ADD_DML_ROW (
    p_context               IN t_context,
    p_operation             IN t_dml_operation );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions |
| `p_operation` | DML operation to be executed on this row. Possible values: c_dml_operation_insert c_dml_operation_update c_dml_operation_delete |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.ADD_DML_ROW(
        p_context => to_clob('Example text'),
        p_operation => null
    );
end;
/
```

