# APEX_UTIL.SET_SESSION_TIME_ZONE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_TIME_ZONE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets the time zone to be used for the current user in the current Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_TIME_ZONE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_TIME_ZONE (
    p_time_zone IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_timezone` | A time zone value in the form of hours and minutes. Examples include: +09:00 , 04:00 , -05:00 . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set the time zone for the current APEX session.

```sql
begin
    apex_util.set_session_time_zone(
        p_time_zone => 'America/New_York');
end;
/
```

