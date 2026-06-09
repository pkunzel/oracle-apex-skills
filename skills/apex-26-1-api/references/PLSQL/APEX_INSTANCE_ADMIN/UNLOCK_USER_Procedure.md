# APEX_INSTANCE_ADMIN.UNLOCK_USER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNLOCK_USER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure unlocks an Oracle APEX workspace user account and optionally also changes the user's password.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.UNLOCK_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.UNLOCK_USER (
    p_workspace    IN  VARCHAR2,
    p_username     IN  VARCHAR2,
    p_password     IN  VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | Workspace of the user. |
| `p_username` | Name of the user. |
| `p_password` | New password. If not set, only unlocks the account. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.UNLOCK_USER(
        p_workspace => 'EXAMPLE',
        p_username => 'USER',
        p_password => 'EXAMPLE'
    );
end;
/
```

