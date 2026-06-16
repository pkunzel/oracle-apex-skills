# APEX_SESSION.DELETE_SESSION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure deletes the session with the given ID. If the session is currently attached, call the application's Cleanup PL/SQL Code and reset the environment.

## When To Use

Use this page when code needs the `APEX_SESSION.DELETE_SESSION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.DELETE_SESSION (
    p_session_id    IN  NUMBER  DEFAULT apex_application.g_instance );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session_id` | The session ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Delete a session that the current script created and owns.

```sql
begin
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'SCOTT');

    apex_session.delete_session(
        p_session_id => apex_application.g_instance);
end;
/
```
