# APEX_DEBUG.MESSAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure logs a formatted debug message, general version.

## When To Use

Use this page when code needs the `APEX_DEBUG.MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.MESSAGE (
    p_message       IN VARCHAR2,
    p0              IN VARCHAR2     DEFAULT NULL,
    p1              IN VARCHAR2     DEFAULT NULL,
    p2              IN VARCHAR2     DEFAULT NULL,
    p3              IN VARCHAR2     DEFAULT NULL,
    p4              IN VARCHAR2     DEFAULT NULL,
    p5              IN VARCHAR2     DEFAULT NULL,
    p6              IN VARCHAR2     DEFAULT NULL,
    p7              IN VARCHAR2     DEFAULT NULL,
    p8              IN VARCHAR2     DEFAULT NULL,
    p9              IN VARCHAR2     DEFAULT NULL,
    p10             IN VARCHAR2     DEFAULT NULL,
    p11             IN VARCHAR2     DEFAULT NULL,
    p12             IN VARCHAR2     DEFAULT NULL,
    p13             IN VARCHAR2     DEFAULT NULL,
    p14             IN VARCHAR2     DEFAULT NULL,
    p15             IN VARCHAR2     DEFAULT NULL,
    p16             IN VARCHAR2     DEFAULT NULL,
    p17             IN VARCHAR2     DEFAULT NULL,
    p18             IN VARCHAR2     DEFAULT NULL,
    p19             IN VARCHAR2     DEFAULT NULL,
    p_max_length    IN PLS_INTEGER  DEFAULT 1000,
    p_level         IN t_log_level  DEFAULT c_log_level_info,
    p_force         IN BOOLEAN      DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | The debug message. Occurrences of % are replaced by p0 to p19 , as in utl_lms.format_message and C's sprintf. Occurrences of %% represent the special character % . Occurrences of % are replaced by p . |
| `p0 through p19` | Substitution strings for % placeholders. |
| `p_max_length` | The p values is truncated to this length. The tilde ( ~ ) character is appended to indicate that the original value exceeded this length. |
| `p_level` | The log level for the message, default is c_log_level_info . See Constants . |
| `p_force` | If TRUE , this generates a debug message even if the page is not rendered in debug mode or p_level is greater than the configured debug messaging (using the URL or using the enable procedure). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.message(
        p_message    => 'Inventory check for product %s returned %s units',
        p0           => :P20_PRODUCT_ID,
        p1           => :P20_AVAILABLE_QTY,
        p_max_length => 2000,
        p_level      => apex_debug.c_log_level_info
    );
end;
/
```
