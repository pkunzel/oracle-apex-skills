# APEX_DG_DATA_GEN.REMOVE_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure removes metadata associated with a blueprint.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.REMOVE_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.REMOVE_BLUEPRINT (
    p_name                  IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of blueprint to be removed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.REMOVE_BLUEPRINT(
        p_name => 'EXAMPLE'
    );
end;
/
```

