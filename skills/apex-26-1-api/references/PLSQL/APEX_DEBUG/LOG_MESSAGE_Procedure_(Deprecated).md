# APEX_DEBUG.LOG_MESSAGE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_MESSAGE-Procedure-Deprecated.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure logs a debug message.

## When To Use

Use this page when code needs the `APEX_DEBUG.LOG_MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_DEBUG.LOG_MESSAGE (
    p_message   IN  VARCHAR2    DEFAULT NULL,
    p_enabled   IN  BOOLEAN     DEFAULT FALSE,
    p_level     IN  t_log_level DEFAULT c_log_level_app_trace )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | The debug message with a maximum length of 1,000 bytes. |
| `p_enabled` | Messages are logged when logging is enabled. TRUE enables logging. |
| `p_level` | Identifies the level of the log message where 1 is most important and 9 is least important. This is an integer value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.LOG_MESSAGE(
        p_message => to_clob('Example text'),
        p_enabled => true,
        p_level => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_debug.LOG_MESSAGE(
            p_message => to_clob('Example text'),
            p_enabled => true,
            p_level => null
        );
end;
/
```

