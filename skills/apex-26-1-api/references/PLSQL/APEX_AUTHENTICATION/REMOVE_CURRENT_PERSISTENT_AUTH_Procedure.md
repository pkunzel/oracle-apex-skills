# APEX_AUTHENTICATION.REMOVE_CURRENT_PERSISTENT_AUTH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_CURRENT_PERSISTENT_AUTH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure removes all Persistent Authentication entries for for the user's current browser.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.REMOVE_CURRENT_PERSISTENT_AUTH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.REMOVE_CURRENT_PERSISTENT_AUTH;
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
    apex_authentication.REMOVE_CURRENT_PERSISTENT_AUTH;
end;
/
```

