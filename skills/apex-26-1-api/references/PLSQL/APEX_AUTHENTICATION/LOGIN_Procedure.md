# APEX_AUTHENTICATION.LOGIN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure authenticates the user in the current session.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.LOGIN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.LOGIN ( 
    p_username              IN VARCHAR2, 
    p_password              IN VARCHAR2, 
    p_uppercase_username    IN BOOLEAN  DEFAULT TRUE
    p_set_persistent_auth   IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | The user's name. |
| `p_password` | The user's password. |
| `p_uppercase_username` | If TRUE then p_username is converted to uppercase. |
| `p_set_persistent_auth` | If TRUE then persistent authentication cookie is set. Persistent authentication needs to be enabled on instance level. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.LOGIN(
        p_username => 'USER',
        p_password => 'EXAMPLE',
        p_uppercase_username => true,
        p_set_persistent_auth => true
    );
end;
/
```

