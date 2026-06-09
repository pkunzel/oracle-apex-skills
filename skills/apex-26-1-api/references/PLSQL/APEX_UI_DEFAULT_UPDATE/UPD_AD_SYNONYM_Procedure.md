# APEX_UI_DEFAULT_UPDATE.UPD_AD_SYNONYM Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_AD_SYNONYM-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the synonym name is found within the User Interface Default Attribute Dictionary, the synonym name is updated.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_AD_SYNONYM` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_AD_SYNONYM (
    p_syn_name           IN VARCHAR2,
    p_new_syn_name       IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_syn_name` | Name of synonym to be updated. |
| `p_new_syn_name` | New name for synonym. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_AD_SYNONYM(
        p_syn_name => 'EXAMPLE',
        p_new_syn_name => 'EXAMPLE'
    );
end;
/
```

