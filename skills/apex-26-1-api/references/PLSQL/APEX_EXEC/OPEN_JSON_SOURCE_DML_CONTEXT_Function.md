# APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Opens a DML context based on a JSON source.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT (
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
| `p_static_id` | Static ID of the JSON source. |
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
    l_result T_CONTEXT;
begin
    l_result := apex_exec.OPEN_JSON_SOURCE_DML_CONTEXT(
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_array_column_name => 'EXAMPLE',
        p_columns => null,
        p_lost_update_detection => sysdate
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

