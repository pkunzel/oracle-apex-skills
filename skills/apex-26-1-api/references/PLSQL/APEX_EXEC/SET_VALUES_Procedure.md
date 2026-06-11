# APEX_EXEC.SET_VALUES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_VALUES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure sets all column values in the DML context with corresponding column values from the source (query) context. Useful for querying a row, changing only single columns and writing the row back.

## When To Use

Use this page when code needs the `APEX_EXEC.SET_VALUES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.SET_VALUES (
    p_context               IN t_context,
    p_source_context        IN t_context )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_source_context` | Query context object to get column values from. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns       apex_exec.t_columns;
    l_source_ctx    apex_exec.t_context;
    l_target_ctx    apex_exec.t_context;
    l_source_open   boolean := false;
    l_target_open   boolean := false;
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);

    l_source_ctx := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'select order_id, status from orders where order_id = :P10_ORDER_ID'
    );
    l_source_open := true;

    l_target_ctx := apex_exec.open_local_dml_context(
        p_columns    => l_columns,
        p_query_type => apex_exec.c_query_type_table,
        p_table_name => 'ORDERS'
    );
    l_target_open := true;

    if apex_exec.next_row(l_source_ctx) then
        apex_exec.add_dml_row(l_target_ctx, apex_exec.c_dml_operation_update);
        apex_exec.set_values(
            p_context        => l_target_ctx,
            p_source_context => l_source_ctx
        );
        apex_exec.set_value(l_target_ctx, 'STATUS', 'SHIPPED');
        apex_exec.execute_dml(l_target_ctx);
    end if;

    apex_exec.close(l_target_ctx);
    l_target_open := false;
    apex_exec.close(l_source_ctx);
    l_source_open := false;
exception
    when others then
        if l_target_open then apex_exec.close(l_target_ctx); end if;
        if l_source_open then apex_exec.close(l_source_ctx); end if;
        raise;
end;
/
```
