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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.STRONG_PASSWORD_VALIDATION(
        p_username => 'USER',
        p_password => 'EXAMPLE',
        p_old_password => 'EXAMPLE',
        p_workspace_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

