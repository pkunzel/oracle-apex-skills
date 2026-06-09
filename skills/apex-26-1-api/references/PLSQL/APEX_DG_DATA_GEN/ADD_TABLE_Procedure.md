# APEX_DG_DATA_GEN.ADD_TABLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TABLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure adds a destination table for the generated data.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.ADD_TABLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.ADD_TABLE (
    p_blueprint             IN VARCHAR2,
    p_sequence              IN PLS_INTEGER,
    p_table_name            IN VARCHAR2,
    p_preserve_case         IN VARCHAR2             DEFAULT 'N',
    p_display_name          IN VARCHAR2             DEFAULT NULL,
    p_singular_name         IN VARCHAR2             DEFAULT NULL,
    p_plural_name           IN VARCHAR2             DEFAULT NULL,
    p_rows                  IN NUMBER               DEFAULT 0,
    p_max_rows              IN NUMBER               DEFAULT NULL,
    p_use_existing_table    IN VARCHAR2             DEFAULT 'N',
    p_exclude_columns       IN wwv_flow_t_varchar2  DEFAULT c_empty_t_varchar2,
    p_table_id              OUT NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Identifier for the blueprint. |
| `p_sequence` | 1 for first table, 2 for second, and so forth. |
| `p_table_name` | Name of table that can exist or not exist. |
| `p_preserve_case` | Defaults to N , which forces table name to uppercase. If Y , perserves casing of parameter. |
| `p_display_name` | Friendly display name. |
| `p_singular_name` | Singluar friendly name. |
| `p_plural_name` | Plural friendly name. |
| `p_rows` | Number of rows to generate for this table. |
| `p_max_rows` | If null , then p_rows determines the number of rows, otherwise random rows between p_rows and p_max_rows are used when generating output. |
| `p_use_existing_table` | If Y , uses the data dictionary to auto generate columns. The automatic blueprint column creation supports the following data source mapping rules: Foreign key data generation (populates the column with keys from the master table). Inline data generation based on CHECK constraints (simple IN constructs are supported). Mapping based on existing built-in tables (based on the table and column name). Mapping based on the column name, data type, and length. If the column is nullable, 5% of the values will be NULL . |
| `p_exclude_columns` | String array ( apex_t_varchar2 ) of column names to exclude from the automatic column generation. |
| `p_table_id` | ID of the added table ( OUT ). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.ADD_TABLE(
        p_blueprint => 'EXAMPLE',
        p_sequence => 1,
        p_table_name => 'EXAMPLE',
        p_preserve_case => 'EXAMPLE',
        p_display_name => 'EXAMPLE',
        p_singular_name => 'EXAMPLE',
        p_plural_name => 'EXAMPLE',
        p_rows => 1,
        p_max_rows => 1,
        p_use_existing_table => 'EXAMPLE',
        p_exclude_columns => 'EXAMPLE',
        p_table_id => 1
    );
end;
/
```

