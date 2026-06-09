# APEX_SESSION.DETACH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure detaches from the current session, resets the environment and runs the application's Cleanup PL/SQL Code. This procedure does nothing if no session is attached.

## When To Use

Use this page when code needs the `APEX_SESSION.DETACH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.DETACH;
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
    apex_session.DETACH;
end;
/
```

