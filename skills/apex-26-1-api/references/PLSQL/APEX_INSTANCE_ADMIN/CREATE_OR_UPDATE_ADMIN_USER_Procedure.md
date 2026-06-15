# APEX_INSTANCE_ADMIN.CREATE_OR_UPDATE_ADMIN_USER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_OR_UPDATE_ADMIN_USER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure creates an instance administration user account (that is, a user in the INTERNAL workspace). If the account already exists, this procedure also unlocks it and updates the account with a random password (not used when the builder authentication is Database Accounts).

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.CREATE_OR_UPDATE_ADMIN_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.CREATE_OR_UPDATE_ADMIN_USER (
    p_username  IN  VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | The username. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.create_or_update_admin_user(
        p_username => 'APEX_ADMIN'
    );
end;
/
```
