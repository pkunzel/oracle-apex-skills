# APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PWA](../APEX_PWA.md)

## Purpose

This procedure subscribes a user to an application to enable receiving push notifications from the application.

## When To Use

Use this page when code needs the `APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS (
    p_application_id         IN NUMBER   DEFAULT [current application id],
    p_user_name              IN VARCHAR2 DEFAULT [current user],
    p_subscription_interface IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application that has the push subscription. |
| `p_user_name` | Username of the user that has the push subscription. |
| `p_subscription_interface` | Subscription object (JSON) generated from a browser. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use this from a trusted Ajax callback that receives the browser-generated subscription JSON.

```sql
begin
    apex_pwa.subscribe_push_notifications(
        p_application_id         => :APP_ID,
        p_user_name              => :APP_USER,
        p_subscription_interface => :P10_PUSH_SUBSCRIPTION_JSON);
end;
/
```
