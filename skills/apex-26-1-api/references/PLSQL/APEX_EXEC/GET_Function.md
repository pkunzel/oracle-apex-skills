# APEX_EXEC.GET Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET-Functions.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function retrieves column values for different data types.

## When To Use

Use this page when code needs the `APEX_EXEC.GET` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_VARCHAR2 (
    p_context     IN t_context,
    p_column_idx  IN PLS_INTEGER ) RETURN VARCHAR2;
	
APEX_EXEC.GET_VARCHAR2 (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_idx` | Column index. |
| `p_column_name` | Column name. |

## Returns

The column value as specific data type. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
    l_order_id_pos pls_integer;
    l_status_pos   pls_integer;
begin
    l_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'select order_id, status from orders where customer_id = :P10_CUSTOMER_ID',
        p_max_rows  => 50
    );
    l_context_open := true;

    l_order_id_pos := apex_exec.get_column_position(l_context, 'ORDER_ID');
    l_status_pos   := apex_exec.get_column_position(l_context, 'STATUS');

    while apex_exec.next_row(l_context) loop
        sys.dbms_output.put_line(
            apex_exec.get_number(l_context, l_order_id_pos) || ': ' ||
            apex_exec.get_varchar2(l_context, l_status_pos)
        );
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
