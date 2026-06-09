# APEX_UTIL.SET_EMAIL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_EMAIL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure updates a user account with a new email address. To execute this procedure, the current user must have administrative privileges in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_EMAIL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_EMAIL (
    p_userid IN NUMBER,
    p_email  IN VARCHAR2 );
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_EMAIL(
        p_userid => 1,
        p_email => 'EXAMPLE'
    );
end;
/
```

