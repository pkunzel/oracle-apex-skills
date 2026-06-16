# APEX_SESSION.ATTACH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure sets the environment and runs the Initialization PL/SQL Code based on the given application and current session.

## When To Use

Use this page when code needs the `APEX_SESSION.ATTACH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.ATTACH (
    p_app_id        IN  NUMBER,
    p_page_id       IN  NUMBER,
    p_session_id    IN  NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_app_id` | The application ID. |
| `p_page_id` | The application page. |
| `p_session_id` | The session ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Attach to a known existing APEX session, work inside it, then detach so the database session is clean.

```sql
begin
    apex_session.attach(
        p_app_id     => 100,
        p_page_id    => 10,
        p_session_id => :P900_SESSION_ID);

    apex_session_state.set_value(
        p_item   => 'P10_STATUS',
        p_value  => 'REVIEWED',
        p_commit => false);

    apex_session.detach;
exception
    when others then
        apex_session.detach;
        raise;
end;
/
```
