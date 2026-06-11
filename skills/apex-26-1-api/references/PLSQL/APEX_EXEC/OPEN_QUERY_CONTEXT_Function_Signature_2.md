# APEX_EXEC.OPEN_QUERY_CONTEXT Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC-OPEN_QUERY_CONTEXT-Function-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Enables plug-in developers to open a query context based on the current region source. All data source information that the query retrieves is from the plug-in region metadata.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_QUERY_CONTEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_QUERY_CONTEXT (
    p_columns                     IN t_columns        DEFAULT c_empty_columns,
    --
    p_filters                     IN t_filters        DEFAULT c_empty_filters,
    p_order_bys                   IN t_order_bys      DEFAULT c_empty_order_bys,
    p_aggregation                 IN t_aggregation    DEFAULT c_empty_aggregation,
    p_control_break               IN t_control_break  DEFAULT c_empty_control_break,
    --
    p_first_row                   IN NUMBER           DEFAULT NULL,
    p_max_rows                    IN NUMBER           DEFAULT NULL,
    --
    p_total_row_count             IN BOOLEAN          DEFAULT FALSE,
    p_total_row_count_limit       IN NUMBER           DEFAULT NULL,
    --
    p_sql_parameters              IN t_parameters     DEFAULT c_empty_parameters )
    RETURN t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_columns` | Columns to be selected from the data source. |
| `p_filters` | Filters to be passed to the query context. |
| `p_order_bys` | Order by expressions to be passed to the query context. |
| `p_aggregation` | Aggregation ( GROUP BY , DISTINCT ) to apply on top of the query. |
| `p_control_break` | Whether to return control breaks when looping through the context data. |
| `p_first_row` | First row to be fetched from the result set. |
| `p_max_rows` | Maximum amount of rows to be fetched. |
| `p_total_row_count` | Whether to determine the total row count. |
| `p_total_row_count_limit` | Upper boundary for the total row count computation. |
| `p_sql_parameters` | Bind variables to be used. |

## Returns

The context object representing a "cursor" for the query. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns      apex_exec.t_columns;
    l_filters      apex_exec.t_filters;
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number);
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);
    apex_exec.add_filter(l_filters, apex_exec.c_filter_eq, 'STATUS', p_value => 'OPEN');

    l_context := apex_exec.open_query_context(
        p_columns         => l_columns,
        p_filters         => l_filters,
        p_first_row       => 1,
        p_max_rows        => 25,
        p_total_row_count => true
    );
    l_context_open := true;

    while apex_exec.next_row(l_context) loop
        sys.dbms_output.put_line(apex_exec.get_varchar2(l_context, 'STATUS'));
    end loop;

    apex_exec.close(l_context);
    l_context_open := false;
exception
    when others then
        if l_context_open then
            apex_exec.close(l_context);
        end if;
        raise;
end;
/
```
