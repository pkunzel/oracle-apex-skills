# APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to get Subscription Mode setting value.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE
    RETURN t_subscription_mode;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_SUBSCRIPTION_MODE;
begin
    l_result := apex_application_install.GET_SUBSCRIPTION_MODE;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

