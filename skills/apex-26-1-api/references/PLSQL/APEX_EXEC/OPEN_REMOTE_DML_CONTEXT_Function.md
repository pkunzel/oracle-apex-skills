# APEX_EXEC.OPEN_REMOTE_DML_CONTEXT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_DML_CONTEXT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function opens a DML-context-based remote database.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_REMOTE_DML_CONTEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_REMOTE_DML_CONTEXT (
    p_server_static_id      IN VARCHAR2,
    --
    p_columns                 IN t_columns               DEFAULT c_empty_columns,
    p_query_type              IN t_query_type,
    --     
    p_table_owner             IN VARCHAR2                DEFAULT NULL,
    p_table_name              IN VARCHAR2                DEFAULT NULL,
    p_where_clause            IN VARCHAR2                DEFAULT NULL,  
    --
    p_sql_query               IN VARCHAR2                DEFAULT NULL,
    p_function_body           IN VARCHAR2                DEFAULT NULL,
    p_function_body_language  IN t_language              DEFAULT c_lang_plsql,
    p_plsql_function_body     IN VARCHAR2                DEFAULT NULL, -- Deprecated:
    --
    p_with_check_option       IN BOOLEAN                 DEFAULT TRUE,
    p_optimizer_hint          IN VARCHAR2                DEFAULT NULL,
    --
    p_dml_table_owner         IN VARCHAR2                DEFAULT NULL,
    p_dml_table_name          IN VARCHAR2                DEFAULT NULL,
    p_dml_plsql_code          IN VARCHAR2                DEFAULT NULL,
    --
    p_lost_update_detection   IN t_lost_update_detection DEFAULT NULL,
    p_lock_rows               IN t_lock_rows             DEFAULT NULL,
    p_lock_plsql_code         IN VARCHAR2                DEFAULT NULL,
    --
    p_sql_parameters          IN t_parameters            DEFAULT c_empty_parameters )
RETURN t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_server_static_id` | Static ID of the ORDS REST Enabled SQL Instance. |
| `p_columns` | DML columns to pass to the Data Source. |
| `p_query_type` | Indicates the type of the Data Source. Possible values are: c_query_type_table : Use a plain Table as the data source. c_query_type_sql_query : Use a SQL query as the data source. c_query_type_func_return_sql : Use the SQL query returned by the PL/SQL function. |
| `p_table_owner` | For query type TABLE: Table owner. |
| `p_table_name` | For query type TABLE: Table name. |
| `p_where_clause` | For query type TABLE: where clause. |
| `p_sql_query` | For query type SQL QUERY: the query. |
| `p_function_body` | Function body which returns the SQL query. Note that the SQL query must produce an updatable result for the DML to succeed. |
| `p_function_body_language` | Programming language used for p_function_body . Use c_lang_* constants. |
| `p_plsql_function_body` | Deprecated. Use p_function_body instead. For query type PLSQL: the PL/SQL function which returns the SQL query. |
| `p_with_check_option` | Specify whether the "WITH CHECK" option should be added to the data source. If set to " TRUE " (default), INSERTED or UPDATED rows cannot violate the where clause. |
| `p_optimizer_hint` | Optimizer hints to be added to the DML clause. |
| `p_dml_table_owner` | When set, DML statements will be executed against this table. |
| `p_dml_table_name` | When set, DML statements will be executed against this table. |
| `p_dml_plsql_code` | Custom PL/SQL code to be executed instead of DML statements. |
| `p_lost_update_detection` | Lost-update detection type. Possible values are: c_lost_update_implicit : APEX calculates a checksum from the row values c_lost_update_explicit : One of the p_columns has the " is_checksum " attribute set c_lost_update_none : No lost update detection |
| `p_lock_rows` | Specify whether to lock the rows for the (short) time frame between the lost update detection and the actual DML statement. Possible values are: c_lock_rows_automatic : use a SELECT .. FOR UPDATE c_lock_rows_plsql : use custom PL/SQL code to lock the rows c_lock_rows_none : do not lock rows |
| `p_dml_plsql_code` | Custom PL/SQL code to be used to lock the rows. |
| `p_sql_parameters` | Bind variables to be used. |

## Returns

The context object representing the DML handle.

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
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);

    l_context := apex_exec.open_remote_dml_context(
        p_server_static_id => 'REMOTE_ORDERS',
        p_columns          => l_columns,
        p_query_type       => apex_exec.c_query_type_table,
        p_table_name       => 'ORDERS'
    );
    l_context_open := true;

    apex_exec.add_dml_row(l_context, apex_exec.c_dml_operation_update);
    apex_exec.set_value(l_context, 'ORDER_ID', :P10_ORDER_ID);
    apex_exec.set_value(l_context, 'STATUS', 'SHIPPED');
    apex_exec.execute_dml(l_context);

    apex_exec.close(l_context);
    l_context_open := false;
exception
    when others then
        if l_context_open then apex_exec.close(l_context); end if;
        raise;
end;
/
```
