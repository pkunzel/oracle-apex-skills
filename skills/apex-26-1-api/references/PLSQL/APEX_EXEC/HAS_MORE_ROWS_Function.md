# APEX_EXEC.HAS_MORE_ROWS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_MORE_ROWS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns whether the data source has more data after fetching p_max_rows. This function only returns a value after the NEXT_ROW loop has finished. Only then we can know that there is more data to fetch than we actually requested.

## When To Use

Use this page when code needs the `APEX_EXEC.HAS_MORE_ROWS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.HAS_MORE_ROWS (
    p_context   IN t_context )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |

## Returns

TRUE , if there is more data, FALSE otherwise. NULL if no more data detection was requested.

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
        p_sql_query => 'select order_id, status from orders order by order_id',
        p_max_rows  => 50
    );
    l_context_open := true;

    while apex_exec.next_row(l_context) loop
        sys.dbms_output.put_line(apex_exec.get_varchar2(l_context, 'STATUS'));
    end loop;

    if apex_exec.has_more_rows(l_context) then
        sys.dbms_output.put_line('Fetch the next page to continue.');
    end if;

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
