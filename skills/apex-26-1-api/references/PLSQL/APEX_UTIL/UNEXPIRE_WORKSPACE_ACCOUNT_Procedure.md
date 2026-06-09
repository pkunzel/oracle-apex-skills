# APEX_UTIL.UNEXPIRE_WORKSPACE_ACCOUNT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNEXPIRE_WORKSPACE_ACCOUNT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure unexpires developer and workspace administrator accounts and the associated passwords, enabling the developer or administrator to log into a workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.UNEXPIRE_WORKSPACE_ACCOUNT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.UNEXPIRE_WORKSPACE_ACCOUNT (
    p_user_name IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user name of the user account. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.UNEXPIRE_WORKSPACE_ACCOUNT(
        p_user_name => 'USER'
    );
end;
/
```

