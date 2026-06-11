# APEX_DEBUG.REMOVE_SESSION_MESSAGES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SESSION_MESSAGES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure deletes from the debug message log all data for a given session in your workspace defaults to your current session.

## When To Use

Use this page when code needs the `APEX_DEBUG.REMOVE_SESSION_MESSAGES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.REMOVE_SESSION_MESSAGES (
    p_session    IN NUMBER  DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session` | The session ID. Defaults to your current session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.remove_session_messages(p_session => v('APP_SESSION'));
end;
/
```
