# APEX_DEBUG.REMOVE_DEBUG_BY_AGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_AGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

Deletes all data older than the specified number of days from the debug message log.

## When To Use

Use this page when code needs the `APEX_DEBUG.REMOVE_DEBUG_BY_AGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.REMOVE_DEBUG_BY_AGE (
    p_application_id    IN NUMBER,
    p_older_than_days   IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID of the application. |
| `p_older_than_days` | The number of days data can exist in the debug message log before it is deleted. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.remove_debug_by_age(
        p_application_id  => :APP_ID,
        p_older_than_days => 14
    );
end;
/
```
