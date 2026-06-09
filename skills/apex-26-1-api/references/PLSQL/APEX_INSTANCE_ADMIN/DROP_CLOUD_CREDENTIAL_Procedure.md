# APEX_INSTANCE_ADMIN.DROP_CLOUD_CREDENTIAL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DROP_CLOUD_CREDENTIAL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure Drops an existing DBMS_CLOUD OCI API Key credential. The procedure drops a credential in the internal Oracle APEX schema using DBMS_CLOUD.DROP_CREDENTIAL .

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.DROP_CLOUD_CREDENTIAL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.DROP_CLOUD_CREDENTIAL (
    p_credential_name       IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_name` | Name for credential. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.DROP_CLOUD_CREDENTIAL(
        p_credential_name => 'EXAMPLE'
    );
end;
/
```

