# APEX_DG_DATA_GEN.IMPORT_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IMPORT_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure imports a JSON blueprint.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.IMPORT_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.IMPORT_BLUEPRINT (
    p_clob              IN CLOB,
    p_override_name     IN VARCHAR2 DEFAULT NULL,
    p_replace           IN BOOLEAN  DEFAULT FALSE,
    p_blueprint_id      OUT NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_clob` | Blueprint in JSON format. |
| `p_override_name` | Name of blueprint. This overrides the name provided in p_clob . |
| `p_replace` | Return error if blueprint exists and p_replace is FALSE . Replaces the blueprint (or p_override_name if provided). |
| `p_blueprint_id` | ID of the imported blueprint ( OUT ). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_blueprint_json clob;
    l_blueprint_id   number;
begin
    l_blueprint_json := apex_dg_data_gen.export_blueprint(p_blueprint => 'DEMO_ORDER_BP');

    apex_dg_data_gen.import_blueprint(
        p_clob          => l_blueprint_json,
        p_override_name => 'DEMO_ORDER_BP_COPY',
        p_replace       => true,
        p_blueprint_id  => l_blueprint_id
    );
end;
/
```
