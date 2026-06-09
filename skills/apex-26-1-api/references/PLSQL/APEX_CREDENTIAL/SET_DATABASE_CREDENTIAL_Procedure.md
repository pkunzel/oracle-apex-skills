# APEX_CREDENTIAL.SET_DATABASE_CREDENTIAL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DATABASE_CREDENTIAL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure updates database credential properties for a web credential.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_DATABASE_CREDENTIAL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CREDENTIAL.SET_DATABASE_CREDENTIAL (
    p_credential_static_id      IN VARCHAR2,
    p_db_credential_name        IN VARCHAR2,
    p_db_credential_is_instance IN BOOLEAN DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | The credential static ID. |
| `p_db_credential_name` | Name of the database credential to be referenced. |
| `p_db_credential_is_instance` | Whether the database credential was made available at the Oracle APEX instance level (all workspaces). This parameter can only be used when instance credentials are enabled for the APEX instance using the INSTANCE_DBMS_CREDENTIAL_ENABLED instance parameter. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.SET_DATABASE_CREDENTIAL(
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_db_credential_name => 'EXAMPLE',
        p_db_credential_is_instance => true
    );
end;
/
```

