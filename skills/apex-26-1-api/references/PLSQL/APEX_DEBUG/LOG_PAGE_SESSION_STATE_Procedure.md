# APEX_DEBUG.LOG_PAGE_SESSION_STATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_PAGE_SESSION_STATE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure logs the session's item values.

## When To Use

Use this page when code needs the `APEX_DEBUG.LOG_PAGE_SESSION_STATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.LOG_PAGE_SESSION_STATE (
    p_page_id   IN  NUMBER      DEFAULT NULL, 
    p_enabled   IN  BOOLEAN     DEFAULT FALSE, 
    p_level     IN  t_log_level DEFAULT c_log_level_app_trace )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Identifies a page within the current applicaton and workspace context. |
| `p_enabled` | Messages are logged when logging is enabled. TRUE enables logging. |
| `p_level` | Identifies the level of the log message where 1 is most important, 9 is least important. Must be an integer value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.log_page_session_state(
        p_page_id => :APP_PAGE_ID,
        p_enabled => true,
        p_level   => apex_debug.c_log_level_app_trace
    );
end;
/
```
