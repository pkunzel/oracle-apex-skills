# APEX_EXEC.ADD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure adds a column to the columns collection.

## When To Use

Use this page when code needs the `APEX_EXEC.ADD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ADD_COLUMN (
    p_columns               IN OUT NOCOPY   t_columns,
    p_column_name           IN              VARCHAR2,
    p_data_type             IN              t_data_type DEFAULT NULL,
    p_sql_expression        IN              VARCHAR2    DEFAULT NULL,
    p_format_mask           IN              VARCHAR2    DEFAULT NULL,
    p_is_primary_key        IN              BOOLEAN     DEFAULT FALSE,
    p_is_query_only         IN              BOOLEAN     DEFAULT FALSE,
    p_is_returning          IN              BOOLEAN     DEFAULT FALSE,
    p_is_checksum           IN              BOOLEAN     DEFAULT FALSE,
    p_parent_column_path    IN              VARCHAR2    DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_columns` | Columns array. |
| `p_column_name` | Column name. |
| `p_data_type` | Column data type. |
| `p_sql_expression` | SQL expression used to derive a column from other columns. |
| `p_format_mask` | Format mask to use for this column. |
| `p_is_primary_key` | Whether this is a primary key column (default FALSE ). |
| `p_is_query_only` | Query only columns are not written in a DML context (default FALSE ). |
| `p_is_returning` | Whether to retrieve the RETURNING column after DML has been executed (default FALSE ). |
| `p_is_checksum` | Whether this is a checksum (row version) column (default FALSE ). |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns apex_exec.t_columns;
begin
    apex_exec.add_column(l_columns, 'ORDER_ID', apex_exec.c_data_type_number, p_is_primary_key => true);
    apex_exec.add_column(l_columns, 'STATUS', apex_exec.c_data_type_varchar2);
    apex_exec.add_column(l_columns, 'UPDATED_ON', apex_exec.c_data_type_timestamp, p_is_query_only => true);
end;
/
```
