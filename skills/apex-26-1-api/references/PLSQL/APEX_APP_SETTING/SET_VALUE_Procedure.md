# APEX_APP_SETTING.SET_VALUE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.SET_VALUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APP_SETTING](../APEX_APP_SETTING.md)

## Purpose

This procedure changes the application setting value in the current application. If the setting is subscribed from another app, this API will not update the setting value. If the setting is subscribed and p_raise_error is set to TRUE , this API raises an error.

## When To Use

Use this page when code needs the `APEX_APP_SETTING.SET_VALUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APP_SETTING.SET_VALUE (
    p_name          IN VARCHAR2,
    p_value         IN VARCHAR2,
    p_raise_error   IN BOOLEAN DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The case-insensitive name of the application setting. An error raises if: the application setting name does not exist the build option associated with the application setting is disabled |
| `p_value` | The value of the application setting. An error raises if: the value is set to required, but a null value passes the valid values are defined, but the value is not in one of the valid values |
| `p_raise_error` | If set to TRUE and an error occurs, then this procedure raises an error message. If set to FALSE , all error messages are suppressed. In either case, this API never updates application setting values when an error occurs. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_app_setting.SET_VALUE(
        p_name => 'EXAMPLE',
        p_value => 'EXAMPLE',
        p_raise_error => true
    );
end;
/
```

