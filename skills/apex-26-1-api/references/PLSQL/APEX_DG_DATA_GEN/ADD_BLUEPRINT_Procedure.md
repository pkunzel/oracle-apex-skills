# APEX_DG_DATA_GEN.ADD_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure creates a blueprint which is a collection of tables with corresponding columns and data generation attributes.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.ADD_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.ADD_BLUEPRINT (
    p_name                  IN VARCHAR2,
    p_display_name          IN VARCHAR2 DEFAULT NULL,
    p_description           IN VARCHAR2 DEFAULT NULL,
    p_lang                  IN VARCHAR2 DEFAULT 'en',
    p_default_schema        IN VARCHAR2 DEFAULT NULL,
    p_blueprint_id          OUT NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Identifier for the blueprint, combination of name and language is unique. Name is automatically upper cased and special characters removed. |
| `p_display_name` | Friendly display name. |
| `p_description` | Description of the blueprint. |
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
    apex_dg_data_gen.add_blueprint(
        p_name           => 'DEMO_ORDER_BP',
        p_display_name   => 'Demo Order Blueprint',
        p_description    => 'Synthetic customers and orders for development testing.',
        p_lang           => 'en',
        p_default_schema => 'HR',
        p_blueprint_id   => l_blueprint_id
    );

    sys.dbms_output.put_line('Blueprint id: ' || l_blueprint_id);
end;
/
```
