# APEX_DG_DATA_GEN.ADD_BLUEPRINT_FROM_TABLES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_BLUEPRINT_FROM_TABLES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure creates a blueprint and adds the tables specified based on the data dictionary.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.ADD_BLUEPRINT_FROM_TABLES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.ADD_BLUEPRINT_FROM_TABLES (
    p_name              IN VARCHAR2,
    p_tables            IN wwv_flow_t_varchar2,
    p_preserve_case     IN VARCHAR2 DEFAULT 'N',
    p_exclude_columns   IN wwv_flow_t_varchar2 DEFAULT c_empty_t_varchar2,
    p_description       IN VARCHAR2 DEFAULT NULL,
    p_lang              IN VARCHAR2 DEFAULT 'en',
    p_default_schema    IN VARCHAR2 DEFAULT NULL,   
    p_blueprint_id      OUT NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of blueprint, combination of name and language are unique. Name is automatically upper cased. |
| `p_tables` | List of tables and the number of records. The format is: For example: apex_t_varchar2('PRODUCTS:10','CUSTOMERS:50', 'SALES:1000') The ordering of tables should be: master tables before child tables (for FK relationships). |
| `p_preserve_case` | Defaults to N which forces table name to uppercase. If Y , preserves table case. |
| `p_exclude_columns` | String array ( apex_t_varchar2 ) of column names to exclude from the auto column generation. The exclude columns parameter applies to all tables in the p_tables parameter. |
| `p_description` | Description of blueprint. |
| `p_lang` | Blueprint language determines values from built-in data sources. If the built-in data source has 0 records in this language, en is used. |
| `p_default_schema` | The default schema name for the blueprint. |
| `p_blueprint_id` | ID of the added blueprint ( OUT ). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_blueprint_id number;
begin
    apex_dg_data_gen.add_blueprint_from_tables(
        p_name            => 'DEMO_ORDER_BP',
        p_tables          => apex_t_varchar2('CUSTOMERS:25', 'ORDERS:100'),
        p_preserve_case   => 'N',
        p_exclude_columns => apex_t_varchar2('CREATED_BY', 'CREATED_ON'),
        p_description     => 'Blueprint generated from existing customer and order tables.',
        p_lang            => 'en',
        p_default_schema  => 'HR',
        p_blueprint_id    => l_blueprint_id
    );
end;
/
```
