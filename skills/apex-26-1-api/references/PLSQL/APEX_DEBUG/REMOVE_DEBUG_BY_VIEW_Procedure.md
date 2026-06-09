# APEX_DEBUG.REMOVE_DEBUG_BY_VIEW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_VIEW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

Deletes all data for a specified view from the message log.

## When To Use

Use this page when code needs the `APEX_DEBUG.REMOVE_DEBUG_BY_VIEW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.REMOVE_DEBUG_BY_VIEW (
    p_application_id    IN NUMBER,
    p_view_id           IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID of the application. |
| `p_view_id` | The view ID of the view. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.REMOVE_DEBUG_BY_VIEW(
        p_application_id => 1,
        p_view_id => 1
    );
end;
/
```

