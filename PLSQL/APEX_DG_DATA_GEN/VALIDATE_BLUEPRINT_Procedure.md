# APEX_DG_DATA_GEN.VALIDATE_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure validates the blueprint by checking the validity of the generated SQL.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.VALIDATE_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.VALIDATE_BLUEPRINT (
    p_blueprint          IN     VARCHAR2,
    p_format             IN     VARCHAR2,
    p_errors             OUT    CLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Name of the blueprint. |
| `p_format` | CSV , SQL INSERT , JSON , PRETTY JSON , INSERT INTO , or FAST INSERT INTO . |
| `p_errors` | Clob holds error output. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.VALIDATE_BLUEPRINT(
        p_blueprint => 'EXAMPLE',
        p_format => 'EXAMPLE',
        p_errors => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_dg_data_gen.VALIDATE_BLUEPRINT(
            p_blueprint => 'EXAMPLE',
            p_format => 'EXAMPLE',
            p_errors => to_clob('Example text')
        );
end;
/
```

