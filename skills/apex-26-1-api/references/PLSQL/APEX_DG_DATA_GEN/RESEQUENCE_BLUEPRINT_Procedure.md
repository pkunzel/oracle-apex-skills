# APEX_DG_DATA_GEN.RESEQUENCE_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESEQUENCE_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure resequences all tables and columns within tables with gaps of p_offset , retaining their current order.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.RESEQUENCE_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.RESEQUENCE_BLUEPRINT (
    p_blueprint IN VARCHAR2,
    p_offset    IN NUMBER   DEFAULT c_default_seq_offset )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Identifier for the blueprint. |
| `p_offset` | The offset between gaps, such as 10 , 100 , or 1000 . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.resequence_blueprint(p_blueprint => 'DEMO_ORDER_BP', p_offset => 10);
end;
/
```
