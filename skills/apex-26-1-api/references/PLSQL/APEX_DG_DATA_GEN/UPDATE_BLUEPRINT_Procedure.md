# APEX_DG_DATA_GEN.UPDATE_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure updates the attributes of an existing blueprint.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.UPDATE_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.UPDATE_BLUEPRINT (
    p_name                  IN VARCHAR2,
    p_new_name              IN VARCHAR2 DEFAULT NULL,
    p_display_name          IN VARCHAR2 DEFAULT NULL,
    p_description           IN VARCHAR2 DEFAULT NULL,
    p_lang                  IN VARCHAR2 DEFAULT 'en',
    p_default_schema        IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of blueprint to update. |
| `p_new_name` | The new name (rename). The name is upper cased and special characters removed. |
| `p_display_name` | Friendly display name. |
| `p_description` | Description of the blueprint. |
| `p_lang` | Blueprint language determines values from built-in data sources. If the built-in data source has 0 records in this language, en is used. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.UPDATE_BLUEPRINT(
        p_name => 'EXAMPLE',
        p_new_name => 'EXAMPLE',
        p_display_name => 'EXAMPLE',
        p_description => 'EXAMPLE',
        p_lang => 'EXAMPLE',
        p_default_schema => 'EXAMPLE'
    );
end;
/
```

