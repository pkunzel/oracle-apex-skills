# APEX_DEBUG.LOG_LONG_MESSAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_LONG_MESSAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure emits debug messages from PL/SQL components of Oracle APEX , or PL/SQL procedures and functions.

## When To Use

Use this page when code needs the `APEX_DEBUG.LOG_LONG_MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.LOG_LONG_MESSAGE (
    p_message   IN VARCHAR2     DEFAULT NULL,
    p_enabled   IN BOOLEAN      DEFAULT FALSE,
    p_level     IN t_log_level  DEFAULT c_log_level_app_trace )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Log long message with maximum size of 32,767 bytes. |
| `p_enabled` | Set to TRUE to always log messages, irrespective of whether debugging is enabled. Set to FALSE to only log messages if debugging is enabled. |
| `p_level` | Identifies the level of the long log message. See Constants . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_payload varchar2(32767) := rpad('payload=', 12000, '*');
begin
    apex_debug.log_long_message(
        p_message => l_payload,
        p_enabled => true,
        p_level   => apex_debug.c_log_level_app_trace
    );
end;
/
```
