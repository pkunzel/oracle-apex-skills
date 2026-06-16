# APEX_UTIL.PASSWORD_FIRST_USE_OCCURRED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PASSWORD_FIRST_USE_OCCURRED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns TRUE if the account's password has changed since the account was created, an Oracle APEX administrator performs a password reset operation that results in a new password being emailed to the account holder, or a user has initiated password reset operation.

## When To Use

Use this page when code needs the `APEX_UTIL.PASSWORD_FIRST_USE_OCCURRED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.PASSWORD_FIRST_USE_OCCURRED (
    p_user_name     IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user name of the user account. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Check whether a user has already used the current password.

```sql
declare
    l_used boolean;
begin
    l_used := apex_util.password_first_use_occurred(
        p_user_name => 'JSMITH');

    if not l_used then
        apex_debug.info('JSMITH has not completed first password use.');
    end if;
end;
/
```

