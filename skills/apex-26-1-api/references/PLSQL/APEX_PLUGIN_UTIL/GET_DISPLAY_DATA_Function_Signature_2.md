# APEX_PLUGIN_UTIL.GET_DISPLAY_DATA Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DISPLAY_DATA-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function looks up all the values provided in the p_search_value_list instead of just a single value lookup.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_DISPLAY_DATA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_DISPLAY_DATA (
    p_sql_statement        IN VARCHAR2,
    p_min_columns          IN NUMBER,
    p_max_columns          IN NUMBER,
    p_component_name       IN VARCHAR2,
    p_display_column_no    IN BINARY_INTEGER DEFAULT 1,
    p_search_column_no     IN BINARY_INTEGER DEFAULT 2,
    p_search_value_list    IN apex_application_global.vc_arr2,
    p_display_extra        IN BOOLEAN        DEFAULT TRUE,
    p_escape_display_extra IN BOOLEAN        DEFAULT TRUE,
    p_auto_bind_items      IN BOOLEAN        DEFAULT TRUE,
    p_bind_list            IN t_bind_list    DEFAULT c_empty_bind_list )
    RETURN apex_application_global.vc_arr2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_sql_statement` | SQL statement used for the lookup. |
| `p_min_columns` | Minimum number of return columns. |
| `p_max_columns` | Maximum number of return columns. |
| `p_component_name` | In case an error is returned, this is the name of the page item or report column used to display the error message. |
| `p_display_column_no` | Number of the column returned from the SQL statement. Must be within the p_min_columns through p_max_columns range. |
| `p_search_column_no` | Number of the column used to restrict the SQL statement. Must be within the p_min_columns through p_max_columns range. |
| `p_search_value_list` | Array of values to look up. |
| `p_display_extra` | If set to TRUE , and a value is not found, the search value is added to the result instead. |
| `p_escape_display_extra` | If TRUE , p_search_string is escaped if added as "Display Extra" value. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_bind_list` | Additional bind variables to be used for the SQL query. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the multi-value overload to translate several stored return values into display labels.

```sql
declare
    l_values  apex_application_global.vc_arr2 := apex_application_global.vc_arr2('10', '20');
    l_labels  apex_application_global.vc_arr2;
begin
    l_labels := apex_plugin_util.get_display_data(
        p_sql_statement     => 'select display_name, user_id from app_users',
        p_min_columns       => 2,
        p_max_columns       => 2,
        p_component_name    => p_item.name,
        p_display_column_no => 1,
        p_search_column_no  => 2,
        p_search_value_list => l_values,
        p_display_extra     => false,
        p_auto_bind_items   => true);
end;
/
```
