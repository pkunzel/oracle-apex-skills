# APEX_UTIL.RESET_PASSWORD Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_PASSWORD-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure changes the password of p_user_name in the current workspace to p_new_password . If p_change_password_on_first_use is TRUE, then the user has to change the password on the next login.

## When To Use

Use this page when code needs the `APEX_UTIL.RESET_PASSWORD` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.RESET_PASSWORD (
    p_user_name                     IN VARCHAR2 DEFAULT apex_application.g_user,
    p_old_password                  IN VARCHAR2 DEFAULT NULL,
    p_new_password                  IN VARCHAR2,
    p_change_password_on_first_use  IN BOOLEAN  DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user whose password should be changed. The default is the currently logged in Oracle APEX user name. |
| `p_old_password` | The current password of the user. The call succeeds if the given value matches the current password or it is NULL and the owner of the calling PL/SQL code has APEX_ADMINISTRATOR_ROLE. If the value is not the user's password, an error occurs. |
| `p_new_password` | The new password. |
| `p_change_password_on_first_use` | If TRUE (default), the user must change the password on the next login. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Reset an APEX account password and require a change at next login.

```sql
begin
    apex_util.reset_password(
        p_user_name                    => 'JSMITH',
        p_old_password                 => :P100_OLD_PASSWORD,
        p_new_password                 => :P100_NEW_PASSWORD,
        p_change_password_on_first_use => true);
end;
/
```

