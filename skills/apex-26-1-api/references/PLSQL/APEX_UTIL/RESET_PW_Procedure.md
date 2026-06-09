# APEX_UTIL.RESET_PW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_PW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure resets the password for a named user and emails it in a message to the email address located for the named account in the current workspace. To execute this procedure, the current user must have administrative privilege in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.RESET_PW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.RESET_PW (
    p_user IN VARCHAR2,
    p_msg  IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user` | The user name of the user account. |
| `p_msg` | Message text to be mailed to a user. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.RESET_PW(
        p_user => 'USER',
        p_msg => 'EXAMPLE'
    );
end;
/
```

