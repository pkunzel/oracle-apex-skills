# APEX_APP_SETTING.GET_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.GET_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APP_SETTING](../APEX_APP_SETTING.md)

## Purpose

This function retrieves the application setting value in the current application.

## When To Use

Use this page when code needs the `APEX_APP_SETTING.GET_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APP_SETTING.GET_VALUE (
    p_name          IN VARCHAR2
    p_raise_error   IN BOOLEAN DEFAULT FALSE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The case insensitive name of the application setting. An error raises if: the application setting name does not exist the build option associated with the application setting is disabled |
| `p_raise_error` | If TRUE , the procedure raises an error if an application setting with a passed name does not exist. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_app_setting.GET_VALUE(
        p_name => 'EXAMPLE',
        p_raise_error => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

