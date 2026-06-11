# APEX_EXEC.GET_COLUMN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN-FUNCTION.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns detailed information about a result set column.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_COLUMN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_COLUMN (
    p_context       IN t_context,
    p_column_idx    IN PLS_INTEGER )
RETURN t_column;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_idx` | Index of the column to retrieve information for. |

## Returns

t_column object with column metadata. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
    l_column       apex_exec.t_column;
begin
    l_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'select order_id, status from orders'
    );
    l_context_open := true;

    l_column := apex_exec.get_column(l_context, 1);
    sys.dbms_output.put_line(l_column.name || ': ' || apex_exec.get_data_type(l_column.data_type));

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
