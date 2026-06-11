# APEX_CUSTOM_AUTH.SET_SESSION_ID Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This procedure sets APEX_APPLICATION.G_INSTANCE global variable. This procedure requires the parameter P_SESSION_ID ( NUMBER ) which specifies a session ID.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.SET_SESSION_ID` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.SET_SESSION_ID ( 
    p_session_id    IN    NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session_id` | The session ID to be registered. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_custom_auth.set_session_id(
        p_session_id => apex_custom_auth.get_next_session_id
    );
end;
/
```

