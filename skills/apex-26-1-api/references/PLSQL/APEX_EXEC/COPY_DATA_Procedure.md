# APEX_EXEC.COPY_DATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COPY_DATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure fetches all rows from the source context and writes to the target context. Useful for copying data between different data sources (such as local to remote, remote to web source).

## When To Use

Use this page when code needs the `APEX_EXEC.COPY_DATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.COPY_DATA (
    p_from_context          IN OUT NOCOPY t_context,
    p_to_context            IN OUT NOCOPY t_context,
    p_operation_column_name IN            VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_from_context` | Query context to fetch rows from. |
| `p_to_context` | DML context to write rows to. |
| `p_operation_column_name` | Column in the query context to indicate the DML operation to execute on the target context. Possible values are: "I" : insert the row on the target (DML) context "U" : update the row on the target (DML) context "D" : delete the row on the target (DML) context |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_source_context apex_exec.t_context;
    l_target_context apex_exec.t_context;
    l_source_open    boolean := false;
    l_target_open    boolean := false;
    l_columns        apex_exec.t_columns;
begin
    l_source_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'select order_id, status from staging_orders'
    );
    l_source_open := true;

    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);

    l_target_context := apex_exec.open_local_dml_context(
        p_columns    => l_columns,
        p_query_type => apex_exec.c_query_type_table,
        p_table_name => 'ORDERS'
    );
    l_target_open := true;

    apex_exec.copy_data(
        p_from_context => l_source_context,
        p_to_context   => l_target_context
    );
    apex_exec.execute_dml(l_target_context);

    apex_exec.close(l_target_context);
    l_target_open := false;
    apex_exec.close(l_source_context);
    l_source_open := false;
exception
    when others then
        if l_target_open then apex_exec.close(l_target_context); end if;
        if l_source_open then apex_exec.close(l_source_context); end if;
        raise;
end;
/
```
