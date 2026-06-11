# APEX_EXEC.Global Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.Global-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

The APEX_EXEC package uses the following constants.

## Key Constants

- Query/DML locations: `c_location_local_db`, `c_location_remote_db`, `c_location_rest_source`, `c_location_region_source`, `c_location_duality_view`, `c_location_json_source`, `c_location_sample_data`.
- Query types: `c_query_type_table`, `c_query_type_sql_query`, `c_query_type_func_return_sql`.
- DML operations: `c_dml_operation_insert`, `c_dml_operation_update`, `c_dml_operation_delete`.
- Target/post-processing constants: `c_target_type_region_source`, `c_target_type_table`, `c_target_type_sql_query`, `c_target_type_plsql`, `c_postprocess_where_orderby`, `c_postprocess_sql`, `c_postprocess_func_return_sql`.
- Column data types: `c_data_type_varchar2`, `c_data_type_number`, `c_data_type_date`, `c_data_type_timestamp`, `c_data_type_timestamp_tz`, `c_data_type_timestamp_ltz`, `c_data_type_interval_y2m`, `c_data_type_interval_d2s`, `c_data_type_blob`, `c_data_type_bfile`, `c_data_type_clob`, `c_data_type_rowid`, `c_data_type_user_defined`, `c_data_type_binary_number`, `c_data_type_sdo_geometry`, `c_data_type_boolean`, `c_data_type_array`, `c_data_type_vector`, `c_data_type_json`.
- Filter types: `c_filter_eq`, `c_filter_not_eq`, `c_filter_gt`, `c_filter_gte`, `c_filter_lt`, `c_filter_lte`, `c_filter_null`, `c_filter_not_null`, `c_filter_starts_with`, `c_filter_ends_with`, `c_filter_contains`, `c_filter_in`, `c_filter_between`, `c_filter_regexp`, `c_filter_search`, `c_filter_sql_expression`, `c_filter_oracletext`, `c_filter_dbms_search`, `c_filter_vector_type`, `c_filter_true`, `c_filter_false`, plus matching negative and bounded variants documented by Oracle.
- Ordering: `c_order_asc`, `c_order_desc`, `c_order_nulls_first`, `c_order_nulls_last`, and REST Source null-ordering constants `c_orderby_nulls_flexible`, `c_orderby_nulls_are_lowest`, `c_orderby_nulls_are_highest`, `c_orderby_nulls_always_last`, `c_orderby_nulls_always_first`.
- Empty collections: `c_empty_columns`, `c_empty_filters`, `c_empty_order_bys`, `c_empty_parameters`, `c_empty_aggregation`.
- Database vendors: `c_database_oracle`, `c_database_mysql`.
- Aggregation: `c_aggregation_none`, `c_aggregation_group_by`, `c_aggregation_distinct`, column roles `c_column_role_aggregate` and `c_column_role_group_by`, and aggregate functions such as `c_aggregate_sum`, `c_aggregate_avg`, `c_aggregate_min`, `c_aggregate_max`, `c_aggregate_listagg`.
- Vector search: `c_vector_search_exact`, `c_vector_search_approx`, `c_vector_search_multi`, distance constants `c_vector_distance_cosine`, `c_vector_distance_dot`, `c_vector_distance_euclidean`, `c_vector_distance_eucl_squared`, `c_vector_distance_hamming`, `c_vector_distance_manhattan`, and matching string constants `c_vector_dist_str_*`.

## When To Use

Use this page when code needs the `APEX_EXEC.Global Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Common constants used with `APEX_EXEC` query, DML, filtering, ordering, and data type APIs:

```sql
declare
    l_columns apex_exec.t_columns;
    l_filters apex_exec.t_filters;
begin
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'ORDER_ID',
        p_data_type      => apex_exec.c_data_type_number,
        p_is_primary_key => true
    );

    apex_exec.add_filter(
        p_filters     => l_filters,
        p_filter_type => apex_exec.c_filter_eq,
        p_column_name => 'STATUS',
        p_value       => 'OPEN'
    );
end;
/
```
