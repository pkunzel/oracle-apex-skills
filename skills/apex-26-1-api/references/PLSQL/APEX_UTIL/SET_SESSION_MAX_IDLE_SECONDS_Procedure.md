# APEX_UTIL.SET_SESSION_MAX_IDLE_SECONDS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_MAX_IDLE_SECONDS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Sets the current application's Maximum Session Idle Time in Seconds value for the current session, overriding the corresponding application attribute. This allows developers to dynamically shorten or lengthen the maximum idle time allowed between page requests based on criteria determined after the user authenticates.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_MAX_IDLE_SECONDS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_MAX_IDLE_SECONDS (
    p_seconds  IN    NUMEBER,
    p_scope    IN    VARCHAR2 DEFAULT 'SESSION' );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_seconds` | A positive integer indicating the number of seconds allowed between page requests. |
| `p_scope` | This parameter is obsolete. The procedure always sets the lifetime for the whole session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_SESSION_MAX_IDLE_SECONDS(
        p_seconds => null,
        p_scope => 'EXAMPLE'
    );
end;
/
```

