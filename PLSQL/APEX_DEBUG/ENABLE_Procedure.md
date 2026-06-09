# APEX_DEBUG.ENABLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure turns on debug messaging. You can specify the types of debug messages that are logged by level of importance.

## When To Use

Use this page when code needs the `APEX_DEBUG.ENABLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.ENABLE (
    p_level    IN  t_log_level DEFAULT c_log_level_info )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_level` | Level or levels of messages to log. Must be an integer from 1 to 9, where level 1 is the most important messages and level 4 (the default) is the least important. Setting to a specific level logs messages both at that level and below that level. For example, setting p_level to 2 logs any message at level 1 and 2. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.ENABLE(
        p_level => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_debug.ENABLE(
            p_level => null
        );
end;
/
```

