# APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this procedure to instruct how subscriptions should be handled during the application installation process. By default, Oracle APEX uses apex_application_install.c_subscription_strict as subscription mode. This default value can be overwritten using instance level parameter IMP_DEFAULT_SUBSCRIPTION_MODE .

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE (
    p_mode                   IN              t_subscription_mode);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_mode` | Subscription installation mode, see t_subscription_mode constants. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.set_subscription_mode(
        p_mode => apex_application_install.c_subscription_strict
    );
end;
/
```
