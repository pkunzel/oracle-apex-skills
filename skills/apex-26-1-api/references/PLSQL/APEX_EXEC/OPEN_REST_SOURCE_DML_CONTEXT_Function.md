# APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function opens a DML-context-based REST Data Source.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION OPEN_REST_SOURCE_DML_CONTEXT (
    p_static_id             IN VARCHAR2,
    p_parameters            IN t_parameters            DEFAULT c_empty_parameters,
    --
    p_columns               IN t_columns               DEFAULT c_empty_columns,
    p_lost_update_detection IN t_lost_update_detection DEFAULT NULL )
    --
    p_fetch_rows_parameters IN t_parameters            DEFAULT c_empty_parameters,
    p_fetch_row_parameters  IN t_parameters            DEFAULT c_empty_parameters,
    p_insert_row_parameters IN t_parameters            DEFAULT c_empty_parameters,
    p_update_row_parameters IN t_parameters            DEFAULT c_empty_parameters,
    p_delete_row_parameters IN t_parameters            DEFAULT c_empty_parameters,
    --
    p_array_column_name     IN VARCHAR2                DEFAULT NULL )
    RETURN t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID of the REST Data Source to use. This REST Data Source must have operations for at least one of the Insert Rows, Update Rows or Delete rows database actions. |
| `p_parameters` | REST Data Source parameter values to pass to the DML context. |
| `p_columns` | DML columns to pass to the data source. |
| `p_lost_update_detection` | Lost-update detection type. Possible values are: c_lost_update_implicit : APEX calculates a checksum from the row values. c_lost_update_explicit : One of the p_columns has the is_checksum attribute set. c_lost_update_none : No lost update detection. |
| `p_fetch_rows_parameters` | REST Data Source parameter values to use only for the "Fetch Rows" operation within this DML context. |
| `p_fetch_row_parameters` | REST Data Source parameter values to use only for the "Fetch Single Row" operation within this DML context. |
| `p_insert_row_parameters` | REST Data Source parameter values to use only for the "Update" operation within this DML context. |
| `p_update_row_parameters` | REST Data Source parameter values to use only for the "Insert" operation within this DML context. |
| `p_delete_row_parameters` | REST Data Source parameter values to use only for the "Delete" operation within this DML context. |
| `p_array_column_name` | Name of an array column within the REST Source data profile. |

## Returns

The context object representing the DML handle.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_CONTEXT;
begin
    l_result := apex_exec.OPEN_REST_SOURCE_DML_CONTEXT(
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_parameters => null,
        p_columns => null,
        p_lost_update_detection => sysdate,
        p_fetch_rows_parameters => null,
        p_fetch_row_parameters => null,
        p_insert_row_parameters => null,
        p_update_row_parameters => sysdate,
        p_delete_row_parameters => true,
        p_array_column_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result T_CONTEXT;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_exec.OPEN_REST_SOURCE_DML_CONTEXT(
            p_static_id => 'EXAMPLE_STATIC_ID',
            p_parameters => null,
            p_columns => null,
            p_lost_update_detection => sysdate,
            p_fetch_rows_parameters => null,
            p_fetch_row_parameters => null,
            p_insert_row_parameters => null,
            p_update_row_parameters => sysdate,
            p_delete_row_parameters => true,
            p_array_column_name => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

