# APEX_UTIL.SET_SESSION_HIGH_CONTRAST_OFF Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_HIGH_CONTRAST_OFF-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure switches off high contrast mode for the current session.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_HIGH_CONTRAST_OFF` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_HIGH_CONTRAST_OFF;
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
    apex_util.SET_SESSION_HIGH_CONTRAST_OFF;
end;
/
```

