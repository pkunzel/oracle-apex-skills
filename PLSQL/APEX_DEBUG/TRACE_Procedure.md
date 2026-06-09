# APEX_DEBUG.TRACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure logs messages at level c_log_level_app_trace .

## When To Use

Use this page when code needs the `APEX_DEBUG.TRACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.TRACE ( 
    p_message       IN  VARCHAR2,
    p0              IN  VARCHAR2    DEFAULT NULL,
    p1              IN  VARCHAR2    DEFAULT NULL,
    p2              IN  VARCHAR2    DEFAULT NULL,
    p3              IN  VARCHAR2    DEFAULT NULL,
    p4              IN  VARCHAR2    DEFAULT NULL,
    p5              IN  VARCHAR2    DEFAULT NULL,
    p6              IN  VARCHAR2    DEFAULT NULL,
    p7              IN  VARCHAR2    DEFAULT NULL,
    p8              IN  VARCHAR2    DEFAULT NULL,
    p9              IN  VARCHAR2    DEFAULT NULL,
    p_max_length    IN  PLS_INTEGER DEFAULT 1000 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | The debug message. Occurrences of % are replaced by p0 to p19 , as in utl_lms.format_message and C's sprintf. Occurrences of %% represent the special character % . Occurrences of % are replaced by p . |
| `p0 through p9` | Substitution strings for % placeholders. |
| `p_max_length` | The p values are truncated to this length. The tilde ( ~ ) character is appended to indicate that the original value exceeded this length. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.TRACE(
        p_message => to_clob('Example text'),
        p_max_length => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_debug.TRACE(
            p_message => to_clob('Example text'),
            p_max_length => 1
        );
end;
/
```

