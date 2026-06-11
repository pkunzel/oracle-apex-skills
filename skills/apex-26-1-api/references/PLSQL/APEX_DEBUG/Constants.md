# APEX_DEBUG.Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

The APEX_DEBUG package uses the following constants.

## Log Levels

- `c_log_level_error`: critical errors.
- `c_log_level_warn`: less critical errors.
- `c_log_level_info`: default level when debugging is enabled.
- `c_log_level_app_enter`: application procedure/function entry messages.
- `c_log_level_app_trace`: application trace messages.
- `c_log_level_engine_enter`: APEX engine procedure/function entry messages.
- `c_log_level_engine_trace`: APEX engine trace messages.

## When To Use

Use this page when code needs the `APEX_DEBUG.Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

```sql
begin
    apex_debug.enable(p_level => apex_debug.c_log_level_info);
    apex_debug.message(
        p_message => 'Preparing order %s for customer %s',
        p0        => :P10_ORDER_ID,
        p1        => :P10_CUSTOMER_ID,
        p_level   => apex_debug.c_log_level_info
    );
end;
/
```
