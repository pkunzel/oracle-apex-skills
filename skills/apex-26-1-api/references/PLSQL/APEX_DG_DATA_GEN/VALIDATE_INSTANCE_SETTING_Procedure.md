# APEX_DG_DATA_GEN.VALIDATE_INSTANCE_SETTING Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE_INSTANCE_SETTING-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure validates appropriate instance settings (table, column, generation level).

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.VALIDATE_INSTANCE_SETTING` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.VALIDATE_INSTANCE_SETTING (
    p_json      IN          CLOB,
    p_valid     OUT NOCOPY  VARCHAR2,
    p_message   OUT NOCOPY  CLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_json` | JSON Document. |
| `p_valid` | Out parameter to identify whether settings are valid. |
| `p_result` | Out parameter with a detailed message. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.VALIDATE_INSTANCE_SETTING(
        p_json => to_clob('Example text'),
        p_valid => 'EXAMPLE',
        p_message => to_clob('Example text')
    );
end;
/
```

