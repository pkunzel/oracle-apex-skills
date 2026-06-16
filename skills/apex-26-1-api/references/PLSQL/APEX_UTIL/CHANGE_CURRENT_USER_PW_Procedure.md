# APEX_UTIL.CHANGE_CURRENT_USER_PW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_CURRENT_USER_PW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure changes the password of the currently authenticated user.

## When To Use

Use this page when code needs the `APEX_UTIL.CHANGE_CURRENT_USER_PW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CHANGE_CURRENT_USER_PW (
    p_new_password  IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_new_password` | The new password value in clear text. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Let the signed-in user change their own password after validating a page item.

```sql
begin
    apex_util.change_current_user_pw(
        p_new_password => :P100_NEW_PASSWORD);
end;
/
```

