# APEX_EXEC.GET_COLUMN_POSITION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_POSITION-FUNCTION.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns the array index for a given column alias. In order to do this lookup operation only once, Oracle recommends you to use GET_COLUMN_POSITION function before entering the NEXT_ROW loop. This saves on computing resources.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_COLUMN_POSITION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_COLUMN_POSITION (
    p_context               IN t_context, 
    p_column_name           IN VARCHAR2,
    p_attribute_label       IN VARCHAR2  DEFAULT NULL,
    p_is_required           IN BOOLEAN   DEFAULT FALSE,
    p_data_type             IN VARCHAR2  DEFAULT c_data_type_varchar2,
    p_parent_column_path    IN VARCHAR2  DEFAULT NULL )
    RETURN PLS_INTEGER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_attribute_label` | Attribute label to format error messages. |
| `p_column_name` | Column name. |
| `p_is_required` | Indicates whether this is a required column. |
| `p_data_type` | Indicates the requested data type. |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

## Returns

The position of the column in the query result set. Throws an exception when p_is_required or p_data_type prerequisites are not met. Parent topic: APEX_EXEC

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
