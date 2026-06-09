# APEX_DEBUG.ENABLE_DBMS_OUTPUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DBMS_OUTPUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure writes all debug logs via dbms_output . If debug is disabled, this call also enables it with log level c_log_level_warn . You have to set a debug level higher than c_log_level_warn for finer grained debug output. The output 95 starts with a configurable prefix, followed by the log level, "|" and the actual debug message.

## When To Use

Use this page when code needs the `APEX_DEBUG.ENABLE_DBMS_OUTPUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
ENABLE_DBMS_OUTPUT (
    p_prefix    IN VARCHAR2    DEFAULT '# APEX|' )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_prefix` | Prefix for lines that go to dbms_output , default '# APEX\|' . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.ENABLE_DBMS_OUTPUT(
        p_prefix => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_debug.ENABLE_DBMS_OUTPUT(
            p_prefix => 'EXAMPLE'
        );
end;
/
```

