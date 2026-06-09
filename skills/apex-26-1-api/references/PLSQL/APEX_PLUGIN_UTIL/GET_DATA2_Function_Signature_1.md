# APEX_PLUGIN_UTIL.GET_DATA2 Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATA2-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function executes the specified SQL query (optionally restricted by the provided search string) and returns the values for each column. All column values are returned along with their original data types. The search column is identified by providing a column number in the p_search_column_no parameter. This function takes into account character value comparison globalization attributes defines for the application.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_DATA2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_DATA2 (
    p_sql_statement    IN VARCHAR2,
    p_min_columns      IN NUMBER,
    p_max_columns      IN NUMBER,
    p_data_type_list   IN apex_application_global.vc_arr2 DEFAULT c_empty_data_type_list,
    p_component_name   IN VARCHAR2,
    p_search_type      IN VARCHAR2,
    p_search_column_no IN VARCHAR2,
    p_search_string    IN VARCHAR2,
    p_first_row        IN NUMBER                          DEFAULT NULL,
    p_max_rows         IN NUMBER                          DEFAULT NULL,
    p_auto_bind_items  IN BOOLEAN                         DEFAULT TRUE,
    p_bind_list        IN t_bind_list                     DEFAULT c_empty_bind_list )
    RETURN t_column_list;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_sql_statement` | SQL statement used for the lookup. |
| `p_min_columns` | Minimum number of return columns. |
| `p_max_columns` | Maximum number of return columns. |
| `p_data_type_list` | If provided, checks to make sure the data type for each column matches the specified data type in the array. Use the constants c_data_type_* for available data types. |
| `p_component_name` | In case an error is returned, this is the name of the page item or report column used to display the error message. |
| `p_search_type` | Must be one of the following c_search_* constants: c_search_contains_case c_search_contains_ignore c_search_exact_case c_search_exact_ignore |
| `p_search_column_no` | Number of the column used to restrict the SQL statement. Must be within the p_min_columns through p_max_columns range. |
| `p_search_string` | Value used to restrict the query. |
| `p_first_row` | Start query at the specified row. All rows before the specified row are skipped. |
| `p_max_rows` | Maximum number of return rows allowed. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_bind_list` | Additional bind variables to be used for the SQL query. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_COLUMN_LIST;
begin
    l_result := apex_plugin_util.GET_DATA2(
        p_sql_statement => to_clob('Example text'),
        p_min_columns => 1,
        p_max_columns => 1,
        p_data_type_list => 'EXAMPLE',
        p_component_name => 'EXAMPLE',
        p_search_type => 'EXAMPLE',
        p_search_column_no => 'EXAMPLE',
        p_search_string => 'EXAMPLE',
        p_first_row => 1,
        p_max_rows => 1,
        p_auto_bind_items => true,
        p_bind_list => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

