# APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PWA](../APEX_PWA.md)

## Purpose

This procedure unsubscribes a user from the push notifications of an application.

## When To Use

Use this page when code needs the `APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS (
    p_application_id         IN NUMBER   DEFAULT [current application id],
    p_user_name              IN VARCHAR2 DEFAULT [current user],
    p_subscription_interface IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application that has the push subscription. |
| `p_user_name` | Username of the user that has the push subscription. |
| `p_subscription_interface` | Subscription object (JSON) generated from a browser. If provided, it will only unsubscribe this subscription. If not provided, it will unsubscribe all subscriptions. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_pwa.UNSUBSCRIBE_PUSH_NOTIFICATIONS(
        p_application_id => 1,
        p_user_name => 'USER',
        p_subscription_interface => 'EXAMPLE'
    );
end;
/
```

