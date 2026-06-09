# APEX_UTIL.CLEAR_APP_CACHE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_APP_CACHE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure removes session state for a given application for the current session.

## When To Use

Use this page when code needs the `APEX_UTIL.CLEAR_APP_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CLEAR_APP_CACHE (
    p_app_id    IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_app_id` | The ID of the application for which session state is cleared for current session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.CLEAR_APP_CACHE(
        p_app_id => 'EXAMPLE'
    );
end;
/
```

