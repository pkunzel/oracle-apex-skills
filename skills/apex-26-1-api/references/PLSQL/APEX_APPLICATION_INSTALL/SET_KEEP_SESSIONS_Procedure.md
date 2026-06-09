# APEX_APPLICATION_INSTALL.SET_KEEP_SESSIONS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_SESSIONS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure preserves sessions associated with the application on upgrades.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_KEEP_SESSIONS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
procedure SET_KEEP_SESSIONS (
    p_keep_sessions IN BOOLEAN );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_keep_sessions` | Default FALSE . If FALSE , sessions are deleted. If TRUE , sessions are preserved. KEEP_SESSIONS_ON_UPGRADE controls the default behavior. If N (default), sessions are deleted. KEEP_SESSIONS_ON_UPGRADE is an instance parameter. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_KEEP_SESSIONS(
        p_keep_sessions => true
    );
end;
/
```

