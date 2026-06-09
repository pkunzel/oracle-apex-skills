# APEX_REGION.OPEN_QUERY_CONTEXT Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This function returns an APEX_EXEC query context returning current region data.

## When To Use

Use this page when code needs the `APEX_REGION.OPEN_QUERY_CONTEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.OPEN_QUERY_CONTEXT (
    p_page_id                IN   NUMBER,
    p_static_id              IN   VARCHAR2,
    p_component_id           IN   NUMBER                           DEFAULT NULL,
    p_view_mode              IN   VARCHAR2                         DEFAULT NULL,
    p_additional_filters     IN   apex_exec.t_filters              DEFAULT apex_exec.c_empty_filters,
    p_outer_sql              IN   VARCHAR2                         DEFAULT NULL,
    p_first_row              IN   NUMBER                           DEFAULT NULL,
    p_max_rows               IN   NUMBER                           DEFAULT NULL,
    p_total_row_count        IN   BOOLEAN                          DEFAULT FALSE,
    p_total_row_count_limit  IN   NUMBER                           DEFAULT NULL,
    p_parent_column_values   IN   apex_exec.t_parameters           DEFAULT apex_exec.c_empty_parameters )
    RETURN apex_exec.t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | ID of the page where the region is on. |
| `p_static_id` | Static ID of a specific region to open the query context for. |
| `p_component_id` | Region component ID to use. For interactive reports and interactive grids this is the saved report ID within the current application page. For JET charts, use the chart series ID. |
| `p_view_mode` | The view type available for the report. The values can be APEX_IR.C_VIEW_REPORT , APEX_IR.C_VIEW_GROUPBY , or APEX_IR.C_VIEW_PIVOT . If p_view is null, it gets the view currently used by the report. If the p_view passed does not exist for the current report, an error is raised. |
| `p_additional_filters` | Additional filters to apply to the context. |
| `p_outer_sql` | Outer SQL query to wrap around the region SQL query. Use #APEX$SOURCE_DATA# to reference the region source ( apex_exec.c_data_source_table_name constant). If this parameter is specified, then the p_columns parameter has no effect. This parameter overrides CHART, GROUP BY or PIVOT views for interactive reports. |
| `p_first_row` | Row index to start fetching at. Defaults to 1. |
| `p_max_rows` | Maximum amount of rows to get. Default unlimited. |
| `p_total_row_count` | Determines whether to retrieve the total row count. Default FALSE . If used together with the p_outer_sql parameter, you must add the APEX$TOTAL_ROW_COUNT column to the select list of the p_outer_sql query. |
| `p_total_row_count_limit` | Upper limit of rows to process the query on. This applies to interactive report aggregations or ordering. Default is no limit. |
| `p_parent_column_values` | For the detail grid in an Interactive Grid Master-Detail relationship. Use this parameter to pass in values for the master-detail parent column(s). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_EXEC.T_CONTEXT;
begin
    l_result := apex_region.OPEN_QUERY_CONTEXT(
        p_page_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_component_id => 1,
        p_view_mode => 'EXAMPLE',
        p_additional_filters => null,
        p_outer_sql => to_clob('Example text'),
        p_first_row => 1,
        p_max_rows => 1,
        p_total_row_count => true,
        p_total_row_count_limit => 1,
        p_parent_column_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

