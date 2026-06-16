# APEX_UTIL.STRONG_PASSWORD_VALIDATION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRONG_PASSWORD_VALIDATION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns formatted HTML in a VARCHAR2 result based on whether a proposed password meets the password strength requirements as defined by the Oracle APEX site administrator.

## When To Use

Use this page when code needs the `APEX_UTIL.STRONG_PASSWORD_VALIDATION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.STRONG_PASSWORD_VALIDATION (
    p_username          IN  VARCHAR2,
    p_password          IN  VARCHAR2,
    p_old_password      IN  VARCHAR2 DEFAULT NULL,
    p_workspace_name    IN  VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Username that identifies the account in the current workspace. |
| `p_password` | Password to be checked against password strength rules. |
| `p_old_password` | Current password for the account. Used only to enforce "new password must differ from old" rule. |
| `p_workspace_name` | Current workspace name, used only to enforce "password must not contain workspace name" rule. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Return the default password validation message for an invalid password.

```sql
declare
    l_validation_message varchar2(4000);
begin
    l_validation_message := apex_util.strong_password_validation(
        p_username       => :APP_USER,
        p_password       => :P100_NEW_PASSWORD,
        p_old_password   => :P100_OLD_PASSWORD,
        p_workspace_name => 'MY_WORKSPACE');

    if l_validation_message is not null then
        apex_error.add_error(
            p_message          => l_validation_message,
            p_display_location => apex_error.c_inline_in_notification);
    end if;
end;
/
```

