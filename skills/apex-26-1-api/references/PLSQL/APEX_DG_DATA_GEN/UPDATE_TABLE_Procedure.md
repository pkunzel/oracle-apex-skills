# APEX_DG_DATA_GEN.UPDATE_TABLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_TABLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure updates the attributes for a blueprint table. The logical key is p_blueprint and p_table_name .

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.UPDATE_TABLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.UPDATE_TABLE (
    p_blueprint         IN VARCHAR2,
    p_table_name        IN VARCHAR2,
    p_new_table_name    IN VARCHAR2     DEFAULT NULL,
    p_sequence          IN PLS_INTEGER,
    p_preserve_case     IN VARCHAR2     DEFAULT 'N',
    p_display_name      IN VARCHAR2     DEFAULT NULL,
    p_singular_name     IN VARCHAR2     DEFAULT NULL,
    p_plural_name       IN VARCHAR2     DEFAULT NULL,
    p_rows              IN NUMBER       DEFAULT 0,
    p_max_rows          IN VARCHAR2     DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Identifier for the blueprint. |
| `p_table_name` | Name of table that can exist or not exist. |
| `p_new_table_name` | New table name (rename). |
| `p_sequence` | 1 for first table, 2 for second, and so forth. |
| `p_preserve_case` | Defaults to N which forces p_new_table_name to uppercase. If Y , preserves casing of p_new_table_name . |
| `p_display_name` | Friendly display name. |
| `p_singular_name` | Singluar friendly name. |
| `p_plural_name` | Plural friendly name. |
| `p_rows` | Number of rows to generate for this table. |
| `p_max_rows` | If NULL, then p_rows determines the number of rows, otherwise random rows between p_rows and p_max_rows are used when generating output. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.update_table(
        p_blueprint      => 'DEMO_ORDER_BP',
        p_table_name     => 'CUSTOMERS',
        p_sequence       => 1,
        p_display_name   => 'Customers',
        p_singular_name  => 'Customer',
        p_plural_name    => 'Customers',
        p_rows           => 50,
        p_max_rows       => 75
    );
end;
/
```
