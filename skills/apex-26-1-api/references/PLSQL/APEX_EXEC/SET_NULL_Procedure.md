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
declare
    l_columns      apex_exec.t_columns;
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'CANCELLED_REASON', apex_exec.c_data_type_varchar2);

    l_context := apex_exec.open_local_dml_context(
        p_columns    => l_columns,
        p_query_type => apex_exec.c_query_type_table,
        p_table_name => 'ORDERS'
    );
    l_context_open := true;

    apex_exec.add_dml_row(l_context, apex_exec.c_dml_operation_update);
    apex_exec.set_value(l_context, 'ORDER_ID', :P10_ORDER_ID);
    apex_exec.set_null(l_context, 2);
    apex_exec.execute_dml(l_context);

    apex_exec.close(l_context);
    l_context_open := false;
exception
    when others then
        if l_context_open then
            apex_exec.close(l_context);
        end if;
        raise;
end;
/
```
