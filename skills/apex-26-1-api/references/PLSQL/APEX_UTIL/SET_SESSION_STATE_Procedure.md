# APEX_UTIL.SET_SESSION_STATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STATE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets session state for a current Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_STATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_STATE (
    p_name     IN    VARCHAR2 DEFAULT NULL,
    p_value    IN    VARCHAR2 DEFAULT NULL
    p_commit   IN    BOOLEAN  DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the application-level or page-level item for which you are setting sessions state. |
| `p_value` | Value of session state to set. |
| `p_commit` | If TRUE (default), commit after modifying session state. If FALSE or if the existing value in session state equals p_value , no commit. This parameter is ignored when the application's Session State Changes attribute is set to End Of Request . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_SESSION_STATE(
        p_name => 'EXAMPLE',
        p_value => 'EXAMPLE',
        p_commit => true
    );
end;
/
```

