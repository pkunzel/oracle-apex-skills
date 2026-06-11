# APEX_EXEC.IS_GROUP_END Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_GROUP_END-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Returns whether an end of group was found. Group columns must not be NULL.

## When To Use

Use this page when code needs the `APEX_EXEC.IS_GROUP_END` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.IS_GROUP_END (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

## Returns

TRUE , if successful; FALSE if no group change was found.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
begin
    l_context := apex_exec.open_query_context(
        p_location        => apex_exec.c_location_local_db,
        p_sql_query       => 'select customer_id, order_id, order_total from orders order by customer_id, order_id',
        p_order_by_clause => 'customer_id, order_id'
    );
    l_context_open := true;

    while apex_exec.next_row(l_context) loop
        sys.dbms_output.put_line(apex_exec.get_number(l_context, 'ORDER_ID'));

        if apex_exec.is_group_end(l_context) then
            sys.dbms_output.put_line('End of customer group.');
        end if;
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
