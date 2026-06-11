# APEX_EXEC.COLUMN_EXISTS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COLUMN_EXISTS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function checks whether a column already exists in the columns array.

## When To Use

Use this page when code needs the `APEX_EXEC.COLUMN_EXISTS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.COLUMN_EXISTS (
    p_columns            IN t_columns,
    p_column_name        IN VARCHAR2,
    p_parent_column_path IN VARCHAR2 DEFAULT NULL )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_columns` | Columns array. |
| `p_column_name` | Column name. |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

## Returns

TRUE if the column exists, FALSE otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns apex_exec.t_columns;
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number);

    if apex_exec.column_exists(l_columns, 'ORDER_ID') then
        sys.dbms_output.put_line('ORDER_ID is in the column collection.');
    end if;
end;
/
```
