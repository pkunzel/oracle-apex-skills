# APEX_AUTHENTICATION.LOGOUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGOUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure closes the session and redirects to the application's home page. Call this procedure directly from the browser.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.LOGOUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.LOGOUT ( 
    p_session_id    IN NUMBER,
    p_app_id        IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session_id` | The Oracle APEX session identifier of the session to close. |
| `p_app_id` | The database application identifier. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.LOGOUT(
        p_session_id => 1,
        p_app_id => 1
    );
end;
/
```

