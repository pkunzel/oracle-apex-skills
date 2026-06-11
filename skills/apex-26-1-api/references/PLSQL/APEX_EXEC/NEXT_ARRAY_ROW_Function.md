# APEX_EXEC.NEXT_ARRAY_ROW Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function advances the array cursor by one row. Can only be called within an array column; otherwise an error is raised.

## When To Use

Use this page when code needs the `APEX_EXEC.NEXT_ARRAY_ROW` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.NEXT_ARRAY_ROW (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions |

## Returns

TRUE if successful. FALSE if the end of the result set has been reached. See Also: OPEN_ARRAY Procedure Signature 1 CLOSE_ARRAY Procedure HAS_MORE_ARRAY_ROWS Function Parent topic: APEX_EXEC

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
    l_context := apex_exec.open_rest_source_query(
        p_static_id         => 'ORDERS_API',
        p_array_column_name => 'lines',
        p_max_rows          => 10
    );
    l_context_open := true;

    while apex_exec.next_row(l_context) loop
        apex_exec.open_array(l_context, 'lines');
        while apex_exec.next_array_row(l_context) loop
            sys.dbms_output.put_line(apex_exec.get_varchar2(l_context, 'productCode'));
        end loop;
        apex_exec.close_array(l_context);
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
