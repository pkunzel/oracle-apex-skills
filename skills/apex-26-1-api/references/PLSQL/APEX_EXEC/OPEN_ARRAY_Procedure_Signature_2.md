# APEX_EXEC.OPEN_ARRAY Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Enters the array within the provided array column and moves the cursor to before the first row, so that calling next_array_row() points to the first array element.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_ARRAY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_ARRAY (
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_position` | Position of the column to set the value for within the DML context. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
    l_lines_pos    pls_integer;
begin
    l_context := apex_exec.open_rest_source_query(
        p_static_id         => 'ORDERS_API',
        p_array_column_name => 'lines',
        p_max_rows          => 10
    );
    l_context_open := true;

    l_lines_pos := apex_exec.get_column_position(l_context, 'lines');
    apex_exec.open_array(l_context, l_lines_pos);
    while apex_exec.next_array_row(l_context) loop
        sys.dbms_output.put_line(apex_exec.get_varchar2(l_context, 'productCode'));
    end loop;
    apex_exec.close_array(l_context);

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
