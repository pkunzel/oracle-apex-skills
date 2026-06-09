# APEX_CUSTOM_AUTH.DEFINE_USER_SESSION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEFINE_USER_SESSION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This procedure combines the SET_USER and SET_SESSION_ID procedures to create one call.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.DEFINE_USER_SESSION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.DEFINE_USER_SESSION (
    p_user         IN    VARCHAR2,
    p_session_id   IN    NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user` | Login name of the user. |
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
    apex_custom_auth.DEFINE_USER_SESSION(
        p_user => 'USER',
        p_session_id => 1
    );
end;
/
```

