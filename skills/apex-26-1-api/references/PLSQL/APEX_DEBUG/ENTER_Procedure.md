# APEX_DEBUG.ENTER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure logs messages at level c_log_level_app_enter . Use APEX_DEBUG.ENTER() to log the routine name and its arguments at the beginning of a procedure or function.

## When To Use

Use this page when code needs the `APEX_DEBUG.ENTER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.ENTER (
    p_routine_name      IN VARCHAR2,
    p_name01            IN VARCHAR2     DEFAULT NULL,
    p_value01           IN VARCHAR2     DEFAULT NULL,
    p_name02            IN VARCHAR2     DEFAULT NULL,
    p_value02           IN VARCHAR2     DEFAULT NULL,
    p_name03            IN VARCHAR2     DEFAULT NULL,
    p_value03           IN VARCHAR2     DEFAULT NULL,
    p_name04            IN VARCHAR2     DEFAULT NULL,
    p_value04           IN VARCHAR2     DEFAULT NULL,
    p_name05            IN VARCHAR2     DEFAULT NULL,
    p_value05           IN VARCHAR2     DEFAULT NULL,
    p_name06            IN VARCHAR2     DEFAULT NULL,
    p_value06           IN VARCHAR2     DEFAULT NULL,
    p_name07            IN VARCHAR2     DEFAULT NULL,
    p_value07           IN VARCHAR2     DEFAULT NULL,
    p_name08            IN VARCHAR2     DEFAULT NULL,
    p_value08           IN VARCHAR2     DEFAULT NULL,
    p_name09            IN VARCHAR2     DEFAULT NULL,
    p_value09           IN VARCHAR2     DEFAULT NULL,
    p_name10            IN VARCHAR2     DEFAULT NULL,
    p_value10           IN VARCHAR2     DEFAULT NULL,
    p_value_max_length  IN PLS_INTEGER  DEFAULT 1000 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_routine_name` | The name of the procedure or function. |
| `p_namexx / p_valuexx` | The procedure or function parameter name and value. |
| `p_value_max_length` | The p_valuexx values is truncated to this length. The tilde ( ~ ) character is appended to indicate that the original value exceeded this length. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.ENTER(
        p_routine_name => 'EXAMPLE',
        p_name01 => 'EXAMPLE',
        p_value01 => 'EXAMPLE',
        p_name02 => 'EXAMPLE',
        p_value02 => 'EXAMPLE',
        p_name03 => 'EXAMPLE',
        p_value03 => 'EXAMPLE',
        p_name04 => 'EXAMPLE',
        p_value04 => 'EXAMPLE',
        p_name05 => 'EXAMPLE',
        p_value05 => 'EXAMPLE',
        p_name06 => 'EXAMPLE',
        p_value06 => 'EXAMPLE',
        p_name07 => 'EXAMPLE',
        p_value07 => 'EXAMPLE',
        p_name08 => 'EXAMPLE',
        p_value08 => 'EXAMPLE',
        p_name09 => 'EXAMPLE',
        p_value09 => 'EXAMPLE',
        p_name10 => 'EXAMPLE',
        p_value10 => 'EXAMPLE',
        p_value_max_length => 1
    );
end;
/
```

