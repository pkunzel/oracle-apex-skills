# APEX_EXEC.ADD_FILTER Procedures

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_FILTER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure adds a filter to the filter collection.

## When To Use

Use this page when code needs the `APEX_EXEC.ADD_FILTER` topic. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_filters` | Filters array. |
| `p_filter_type` | Type of filter - use one of the t_filter_type constants. |
| `p_column_name` | Column to apply this filter on. |
| `p_value` | Value for filters requiring one value (for example, equals or greater than). |
| `p_values` | Value array for IN or NOT IN filters. |
| `p_from_value` | Lower value for filters requiring a range (for example, between). |
| `p_to_value` | Upper value for filters requiring a range (for example, between). |
| `p_interval` | Interval for date filters (for example, last X months). |
| `p_interval_type` | Interval type for date filters (months, dates). |
| `p_sql_expression` | Generic SQL expression to use as filter. |
| `p_null_result` | Result to return when the actual column value is NULL . |
| `p_is_case_sensitive` | Whether this filter should work case-sensitive or not. |
| `p_search_columns` | List of columns to apply the row search filter on. |
| `p_text_column_name` | Column name for the SQL contains expression when using Oracle TEXT or Ubiquitous Database Search. |
| `p_text_query_function` | Function to be used for the SQL contains expression when using Oracle TEXT or Ubiquitous Database Search. |
| `p_search_index_owner` | For Ubiquitous Database Search, to apply a filter for the Ubiquitous Search index source owner. |
| `p_search_index_table` | For Ubiquitous Database Search, to apply a filter for the Ubiquitous Search index source name. |
| `p_vector_column_name` | Vector column to apply this filter on. |
| `p_vector_search_type` | Search Type. Use one of the t_vector_search_type constants. |
| `p_distance_metric` | Distance Metric. Use one of the t_vector_distance_type constants. |
| `p_target_accuracy` | Target accuracy. Only used if p_vector_search_type = c_vector_search_approx . |
| `p_max_results` | Amount of rows to fetch. |
| `p_max_dist` | Maximum Vector Distance for the search results. |
| `p_search_vector` | Vector value for the Vector Search. |
| `p_data_type` | Data type of the column to apply this filter on. |
| `p_tokenize` | Whether to tokenize a row search term to individual words. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

```sql
declare
    l_filters apex_exec.t_filters;
begin
    apex_exec.add_filter(
        p_filters     => l_filters,
        p_filter_type => apex_exec.c_filter_eq,
        p_column_name => 'STATUS',
        p_value       => 'OPEN'
    );

    apex_exec.add_filter(
        p_filters     => l_filters,
        p_filter_type => apex_exec.c_filter_between,
        p_column_name => 'ORDER_DATE',
        p_from_value  => trunc(sysdate) - 30,
        p_to_value    => trunc(sysdate)
    );
end;
/
```
