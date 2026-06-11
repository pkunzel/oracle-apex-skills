# APEX_EXEC.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

The APEX_EXEC package uses the following data types.

## Key Data Types

- `t_context` is the query or DML context handle returned by `OPEN_*` functions. Treat it as a handle; track whether it was opened before calling `APEX_EXEC.CLOSE`.
- `t_value` stores typed values for strings, numbers, dates, timestamps, intervals, LOBs, booleans, JSON arrays, vectors, and `ANYDATA`.
- `t_parameter` and `t_parameters` represent bind parameters used by SQL, PL/SQL, REST Source, and remote SQL calls. Populate them with `APEX_EXEC.ADD_PARAMETER`; read OUT binds with `GET_PARAMETER_*`.
- `t_column` and `t_columns` describe selected or DML columns. Important attributes include `name`, `data_type`, `data_type_length`, `sql_expression`, `format_mask`, `is_required`, `is_primary_key`, `is_query_only`, `is_checksum`, and `is_returning`.
- `t_filter` and `t_filters` hold query filters. Use `APEX_EXEC.ADD_FILTER` with `c_filter_*` constants.
- `t_order_by` and `t_order_bys` hold sort expressions. Use `APEX_EXEC.ADD_ORDER_BY` with `c_order_*` constants.
- `t_source_capabilities` describes whether a data source supports pagination, filtering, ordering, grouping, and related REST Source plug-in capabilities.

## When To Use

Use this page when code needs the `APEX_EXEC.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

`APEX_EXEC` collections are populated with helper procedures before opening query or DML contexts:

```sql
declare
    l_parameters apex_exec.t_parameters;
    l_columns    apex_exec.t_columns;
begin
    apex_exec.add_parameter(l_parameters, 'P_CUSTOMER_ID', :P10_CUSTOMER_ID);
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);
end;
/
```
