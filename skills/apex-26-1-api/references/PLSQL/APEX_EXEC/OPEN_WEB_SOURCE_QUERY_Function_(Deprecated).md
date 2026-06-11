# APEX_EXEC.OPEN_WEB_SOURCE_QUERY Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_QUERY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_WEB_SOURCE_QUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
FUNCTION OPEN_WEB_SOURCE_QUERY (
    p_module_static_id       IN VARCHAR2,
    p_parameters             IN t_parameters     DEFAULT c_empty_parameters,
    --
    p_filters                IN t_filters        DEFAULT c_empty_filters,
    p_order_bys              IN t_order_bys      DEFAULT c_empty_order_bys,
    p_aggregation            IN t_aggregation    DEFAULT c_empty_aggregation,
    p_control_break          IN t_control_break  DEFAULT c_empty_control_break,
    p_columns                IN t_columns        DEFAULT c_empty_columns,
    --
    p_first_row              IN PLS_INTEGER      DEFAULT NULL,
    p_max_rows               IN PLS_INTEGER      DEFAULT NULL,
    --
    p_external_filter_expr   IN VARCHAR2         DEFAULT NULL,
    p_external_order_by_expr IN VARCHAR2         DEFAULT NULL,
    --
    p_total_row_count        IN BOOLEAN          DEFAULT FALSE,
    --
    p_array_column_name      IN VARCHAR2         DEFAULT NULL )
    RETURN t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID of the web source module to invoke. |
| `p_parameters` | Parameter values to be passed to the web source. |
| `p_filters` | Filters to be passed to the web source. |
| `p_order_bys` | Order by expressions to be passed to the web source. |
| `p_aggregation` | Aggregation ( GROUP BY , DISTINCT ) to apply on top of the query. |
| `p_control_break` | Whether to return control breaks when looping trough the context data. |
| `p_columns` | Columns to be selected from the web source. |
| `p_first_row` | First row to be fetched from the web source. |
| `p_max_rows` | Maximum amount of rows to be fetched from the web source. |
| `p_external_filter_expr` | Filter expression to be passed 1:1 to the external web service. Depends on the actual web service being used. |
| `p_external_order_by_expr` | Order by expression to be passed 1:1 to the external web service. Depends on the actual web service being used. |
| `p_total_row_count` | Whether to determine the total row count (only supported when the attribute "allow fetch all rows" equals Yes ). |
| `p_array_column_name` | Name of an array column within the REST Source data profile. |

## Returns

The context object representing a "cursor" for the web source query.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_parameters   apex_exec.t_parameters;
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
begin
    apex_exec.add_parameter(l_parameters, 'customer_id', :P10_CUSTOMER_ID);
    l_context := apex_exec.open_web_source_query(p_module_static_id => 'LEGACY_ORDERS_WS', p_parameters => l_parameters, p_max_rows => 25);
    l_context_open := true;

    while apex_exec.next_row(l_context) loop
        sys.dbms_output.put_line(apex_exec.get_varchar2(l_context, 'status'));
    end loop;

    apex_exec.close(l_context);
    l_context_open := false;
exception
    when others then
        if l_context_open then apex_exec.close(l_context); end if;
        raise;
end;
/
```
