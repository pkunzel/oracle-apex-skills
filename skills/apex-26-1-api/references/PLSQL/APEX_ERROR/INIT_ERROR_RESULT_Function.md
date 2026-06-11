# APEX_ERROR.INIT_ERROR_RESULT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INIT_ERROR_RESULT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This function returns the t_error_result type initialized with the values stored in p_error .

## When To Use

Use this page when code needs the `APEX_ERROR.INIT_ERROR_RESULT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.INIT_ERROR_RESULT (
    p_error  IN t_error)
    RETURN   t_error_result;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_error` | The p_error parameter of your error handling function. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
create or replace function app_error_handler (
    p_error in apex_error.t_error )
    return apex_error.t_error_result
is
    l_result apex_error.t_error_result;
begin
    l_result := apex_error.init_error_result(p_error);
    l_result.display_location := apex_error.c_inline_in_notification;
    return l_result;
end;
/
```
