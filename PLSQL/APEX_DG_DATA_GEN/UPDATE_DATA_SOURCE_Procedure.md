# APEX_DG_DATA_GEN.UPDATE_DATA_SOURCE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_DATA_SOURCE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure updates an existing data source which identifies a table or query from which you can source data values.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.UPDATE_DATA_SOURCE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.UPDATE_DATA_SOURCE (
    p_blueprint             IN VARCHAR2,
    p_name                  IN VARCHAR2,
    p_new_name              IN VARCHAR2 DEFAULT NULL,
    p_data_source_type      IN VARCHAR2,
    p_table                 IN VARCHAR2 DEFAULT NULL,
    p_preserve_case         IN VARCHAR2 DEFAULT 'N',
    p_sql_query             IN VARCHAR2 DEFAULT NULL,
    p_where_clause          IN VARCHAR2 DEFAULT NULL,
    p_inline_data           IN CLOB     DEFAULT NULL,
    p_order_by_column       IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Identifies the blueprint. |
| `p_name` | Name of a data source. Name is upper cased and must be 26 characters or less. |
| `p_new_name` | New name of a data source (rename). Name is upper cased and must be 26 characters or less. |
| `p_data_source_type` | TABLE, SQL_QUERY. |
| `p_table` | For source type = TABLE . Typically this matches p_name . |
| `p_preserve_case` | Defaults to N which forces p_table_name to uppercase. If Y , perserves casing of p_table . |
| `p_sql_query` | For p_data_source_type = SQL_QUERY . |
| `p_where_clause` | For p_data_source_type = TABLE , this adds the where clause. Do not include "where" keyword (for example deptno ). |
| `p_inline_data` | Used for p_data_source_type = JSON_DATA . |
| `p_order_by_column` | Not used. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.UPDATE_DATA_SOURCE(
        p_blueprint => 'EXAMPLE',
        p_name => 'EXAMPLE',
        p_new_name => 'EXAMPLE',
        p_data_source_type => 'EXAMPLE',
        p_table => 'EXAMPLE',
        p_preserve_case => 'EXAMPLE',
        p_sql_query => to_clob('Example text'),
        p_where_clause => 'EXAMPLE',
        p_inline_data => to_clob('Example text'),
        p_order_by_column => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_dg_data_gen.UPDATE_DATA_SOURCE(
            p_blueprint => 'EXAMPLE',
            p_name => 'EXAMPLE',
            p_new_name => 'EXAMPLE',
            p_data_source_type => 'EXAMPLE',
            p_table => 'EXAMPLE',
            p_preserve_case => 'EXAMPLE',
            p_sql_query => to_clob('Example text'),
            p_where_clause => 'EXAMPLE',
            p_inline_data => to_clob('Example text'),
            p_order_by_column => 'EXAMPLE'
        );
end;
/
```

