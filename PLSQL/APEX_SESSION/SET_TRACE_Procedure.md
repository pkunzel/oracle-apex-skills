# APEX_SESSION.SET_TRACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TRACE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure sets trace mode in all future requests of a session.

## When To Use

Use this page when code needs the `APEX_SESSION.SET_TRACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.SET_TRACE (
    p_session_id    IN NUMBER  DEFAULT apex_application.g_instance,
    p_mode          IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session_id` | The session ID. The session must belong to the current workspace or the caller must be able to set the session's workspace. |
| `p_level` | The trace mode. NULL disables trace, SQL enables SQL trace. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_session.SET_TRACE(
        p_session_id => 1,
        p_mode => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_session.SET_TRACE(
            p_session_id => 1,
            p_mode => 'EXAMPLE'
        );
end;
/
```

