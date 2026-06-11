# APEX_EXEC.OPEN_REMOTE_SQL_QUERY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_SQL_QUERY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function opens a query context and executes the provided SQL query on the ORDS REST Enabled SQL instance.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_REMOTE_SQL_QUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_REMOTE_SQL_QUERY (
    p_server_static_id      IN VARCHAR2,
    p_sql_query             IN VARCHAR2,
    p_sql_parameters        IN t_parameters DEFAULT c_empty_parameters,
    p_auto_bind_items       IN BOOLEAN      DEFAULT TRUE,
    --
    p_columns               IN t_columns    DEFAULT c_empty columns,
    --
    p_first_row             IN NUMBER       DEFAULT NULL,
    p_max_rows              IN NUMBER       DEFAULT NULL,
    --
    p_total_row_count       IN BOOLEAN      DEFAULT FALSE,
    p_total_row_count_limit IN NUMBER       DEFAULT NULL )
RETURN t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_server_static_id` | Static ID of the ORDS REST Enabled SQL Instance. |
| `p_sql_query` | SQL Query to execute. |
| `p_sql_parameters` | Bind variables to pass to the remote server. |
| `p_auto_bind_items` | Whether to auto-bind all page items. |
| `p_columns` | Columns to return from the SQL query. |
| `p_first_row` | First row to be fetched from the result set. |
| `p_max_rows` | Maximum amount of rows to be fetched. |
| `p_total_row_count` | Whether to determine the total row count. |
| `p_total_row_count_limit` | Upper boundary for total row count computation. |

## Returns

The context object representing a cursor for the web source query.

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
    apex_exec.add_parameter(l_parameters, 'P_DEPTNO', :P10_DEPTNO);

    l_context := apex_exec.open_remote_sql_query(
        p_server_static_id => 'REMOTE_HR',
        p_sql_query        => 'select empno, ename from emp where deptno = :P_DEPTNO',
        p_sql_parameters   => l_parameters,
        p_max_rows         => 50
    );
    l_context_open := true;

    while apex_exec.next_row(l_context) loop
        sys.dbms_output.put_line(apex_exec.get_varchar2(l_context, 'ENAME'));
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
