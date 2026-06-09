# APEX_INSTANCE_ADMIN.SET_LOG_SWITCH_INTERVAL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_LOG_SWITCH_INTERVAL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Set the log switch interval for each of the logs maintained by Oracle APEX .

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.SET_LOG_SWITCH_INTERVAL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.SET_LOG_SWITCH_INTERVAL(
    p_log_name              IN VARCHAR2,
    p_log_switch_after_days IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_log_name` | Specifies the name of the log. Valid values include ACCESS , ACTIVITY , AUTOMATION , CLICKTHRU , DEBUG , WEBSERVICE , and WEBSOURCESYNC . |
| `p_log_switch_after_days` | This interval must be a positive integer between 1 and 180. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.SET_LOG_SWITCH_INTERVAL(
        p_log_name => 'EXAMPLE',
        p_log_switch_after_days => 1
    );
end;
/
```

