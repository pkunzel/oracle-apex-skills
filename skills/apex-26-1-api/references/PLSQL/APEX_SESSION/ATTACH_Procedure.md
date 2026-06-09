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

## Simple Example

```sql
begin
    apex_session.ATTACH(
        p_app_id => 1,
        p_page_id => 1,
        p_session_id => 1
    );
end;
/
```

