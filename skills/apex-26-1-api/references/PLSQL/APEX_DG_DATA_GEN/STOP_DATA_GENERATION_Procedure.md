# APEX_DG_DATA_GEN.STOP_DATA_GENERATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STOP_DATA_GENERATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure stops the current data generation process. This only works within an Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.STOP_DATA_GENERATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.STOP_DATA_GENERATION (
    p_blueprint         IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Name of the blueprint. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.stop_data_generation(p_blueprint => 'DEMO_ORDER_BP');
end;
/
```
