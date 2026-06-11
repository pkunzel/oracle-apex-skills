# APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns the row version checksum for the current nested array row. Can only be called when inside an array column; otherwise an error message is called.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM (
    p_context               IN t_context )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions |

## Returns

Row version checksum for the nested current array row. See Also: SET_ARRAY_ROW_VERSION_CHECKSUM Procedure Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns      apex_exec.t_columns;
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
    l_checksum     varchar2(32767);
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'LINES', apex_exec.c_data_type_array);

    l_context := apex_exec.open_rest_source_dml_context(
        p_static_id         => 'ORDERS_API',
        p_columns           => l_columns,
        p_array_column_name => 'lines'
    );
    l_context_open := true;

    apex_exec.add_dml_array_row(
        p_context         => l_context,
        p_column_name     => 'LINES',
        p_column_position => 2,
        p_operation       => apex_exec.c_dml_operation_update
    );
    apex_exec.set_array_row_version_checksum(l_context, :P10_LINE_CHECKSUM);

    l_checksum := apex_exec.get_array_row_version_checksum(l_context);
    sys.dbms_output.put_line(l_checksum);

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
