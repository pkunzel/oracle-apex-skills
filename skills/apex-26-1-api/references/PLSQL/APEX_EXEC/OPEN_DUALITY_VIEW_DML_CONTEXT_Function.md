# APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Opens a DML context based on a Duality View source.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT (
    p_static_id             IN VARCHAR2,
    p_array_column_name     IN VARCHAR2                DEFAULT NULL,
    --
    p_columns               IN t_columns               DEFAULT c_empty_columns,
    p_lost_update_detection IN t_lost_update_detection DEFAULT NULL )
    RETURN t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID of the Duality View source. |
| `p_array_column_name` | Name of an Array column within the REST Source data profile. |
| `p_columns` | DML columns to pass to the data source. |
| `p_lost_update_detection` | Lost-update detection type. Use constants c_lost_update_* |

## Returns

The context object representing the DML handle.

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
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);

    l_context := apex_exec.open_duality_view_dml_context(p_static_id => 'ORDERS_DV', p_columns => l_columns);
    l_context_open := true;

    apex_exec.add_dml_row(l_context, apex_exec.c_dml_operation_update);
    apex_exec.set_value(l_context, 'ORDER_ID', :P10_ORDER_ID);
    apex_exec.set_value(l_context, 'STATUS', 'SHIPPED');
    apex_exec.execute_dml(l_context);

    apex_exec.close(l_context);
    l_context_open := false;
exception
    when others then
        if l_context_open then apex_exec.close(l_context); end if;
        raise;
end;
/
```
