# APEX_SESSION.SET_DEBUG Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DEBUG-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure sets debug level for all future requests in a session.

## When To Use

Use this page when code needs the `APEX_SESSION.SET_DEBUG` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.SET_DEBUG (
    p_session_id    IN NUMBER DEFAULT apex_application.g_instance,
    p_level         IN apex_debug.t_log_level );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session_id` | The session ID. Note : The session must belong to the current workspace or the caller must be able to set the session's workspace. |
| `p_level` | The debug level. NULL disables debug, 1-9 sets a debug level. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Enable debug for future requests in a specific APEX session.

```sql
begin
    apex_session.set_debug(
        p_session_id => apex_application.g_instance,
        p_level      => apex_debug.c_log_level_info);
end;
/
```
