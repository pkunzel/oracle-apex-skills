# APEX_EXEC.GET_COLUMN_COUNT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_COUNT-FUNCTION.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns the result column count for the current execution context.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_COLUMN_COUNT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_COLUMN_COUNT (
    p_context   IN t_context )
RETURN PLS_INTEGER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |

## Returns

Returns the result columns count. Parent topic: APEX_EXEC

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
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'select order_id, status from orders'
    );
    l_context_open := true;

    sys.dbms_output.put_line('Columns: ' || apex_exec.get_column_count(l_context));

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
