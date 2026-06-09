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
    l_result T_CONTEXT;
begin
    l_result := apex_exec.OPEN_QUERY_CONTEXT(
        p_columns => null,
        p_filters => null,
        p_order_bys => null,
        p_aggregation => null,
        p_control_break => null,
        p_first_row => 1,
        p_max_rows => 1,
        p_total_row_count => true,
        p_total_row_count_limit => 1,
        p_sql_parameters => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result T_CONTEXT;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_exec.OPEN_QUERY_CONTEXT(
            p_columns => null,
            p_filters => null,
            p_order_bys => null,
            p_aggregation => null,
            p_control_break => null,
            p_first_row => 1,
            p_max_rows => 1,
            p_total_row_count => true,
            p_total_row_count_limit => 1,
            p_sql_parameters => to_clob('Example text')
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

