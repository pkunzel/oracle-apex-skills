# APEX_PWA

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html)

Status: curated first-pass reference.

## Purpose

`APEX_PWA` provides server-side utilities for APEX applications that have Progressive Web App features enabled. It manages push notification credentials, subscriptions, queue processing, and sending push notifications to subscribed users.

Pair this package with the client-side [apex.pwa](../JavaScript/apex.pwa.md) namespace.

## When To Use

Use `APEX_PWA` when server-side PL/SQL needs to administer or send PWA push notifications.

Common tasks:

- Generate push credentials for an application.
- Check whether a user is subscribed to push notifications.
- Subscribe or unsubscribe a user from server-side logic.
- Queue a push notification for a user.
- Trigger processing of queued push notifications.

## API Surface

| Need | Members |
| --- | --- |
| Push credentials | `GENERATE_PUSH_CREDENTIALS` |
| Subscription status | `HAS_PUSH_SUBSCRIPTION` |
| Subscribe/unsubscribe | `SUBSCRIBE_PUSH_NOTIFICATIONS`, `UNSUBSCRIBE_PUSH_NOTIFICATIONS` |
| Send/queue notifications | `SEND_PUSH_NOTIFICATION`, `PUSH_QUEUE` |

## Generate Push Credentials

```sql
begin
    apex_pwa.generate_push_credentials(
        p_application_id => 100);
end;
/
```

Run this only as an administrative setup step. Regenerating credentials can affect existing push subscriptions.

## Check Subscription

```sql
declare
    l_has_subscription boolean;
begin
    l_has_subscription := apex_pwa.has_push_subscription(
        p_application_id => 100,
        p_user_name      => :APP_USER);

    if not l_has_subscription then
        apex_debug.info('User is not subscribed to push notifications.');
    end if;
end;
/
```

Use the JavaScript `apex.pwa.hasPushSubscription()` function when checking the current browser/user from page code.

## Send Push Notification

Assuming app `100` has PWA push configured and user `JSMITH` has subscribed:

```sql
begin
    apex_pwa.send_push_notification(
        p_application_id => 100,
        p_user_name      => 'JSMITH',
        p_title          => 'Approval needed',
        p_body           => 'Expense report 4821 is waiting for review.',
        p_target_url     => apex_page.get_url(
                                p_application => 100,
                                p_page        => 20,
                                p_items       => 'P20_REQUEST_ID',
                                p_values      => '4821'));
end;
/
```

Oracle recommends enabling deep linking or rejoin sessions for best behavior when a notification target opens the application.

## Process Queue

```sql
begin
    apex_pwa.push_queue;
end;
/
```

In most applications, rely on APEX-managed queue processing. Use `PUSH_QUEUE` in controlled jobs or diagnostics when you need to trigger queued sends explicitly.

## Client And Server Flow

Client page code:

```javascript
async function ensurePushEnabled() {
    if ( await apex.pwa.isInstallable() ) {
        apex.pwa.openInstallDialog();
    }

    if ( !( await apex.pwa.hasPushSubscription() ) ) {
        await apex.pwa.subscribePushNotifications();
    }
}
```

Server process later:

```sql
begin
    if apex_pwa.has_push_subscription(
        p_application_id => :APP_ID,
        p_user_name      => :APP_USER)
    then
        apex_pwa.send_push_notification(
            p_user_name => :APP_USER,
            p_title     => 'Background job complete',
            p_body      => 'Your export is ready.');
    end if;
end;
/
```

## Safety Notes

- PWA features must be enabled for the application.
- Push notifications require browser/user permission and an existing subscription.
- Keep notification title/body short and free of sensitive personal or secret data.
- Validate target URLs and prefer APEX-generated URLs.
- Avoid sending push notifications from unthrottled loops; use queueing and rate controls.
- Treat server-side subscription changes as administrative or explicit-user-consent actions.

## Related APIs

- [apex.pwa](../JavaScript/apex.pwa.md) for install and subscription UI.
- [APEX_PAGE](APEX_PAGE.md) for target URLs.
- [APEX_DEBUG](APEX_DEBUG.md) for diagnostics.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| GENERATE_PUSH_CREDENTIALS Procedure | procedure | [local](APEX_PWA/GENERATE_PUSH_CREDENTIALS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.GENERATE_PUSH_CREDENTIALS-Procedure.html) |
| HAS_PUSH_SUBSCRIPTION Function | function | [local](APEX_PWA/HAS_PUSH_SUBSCRIPTION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.HAS_PUSH_SUBSCRIPTION-Function.html) |
| PUSH_QUEUE Procedure | procedure | [local](APEX_PWA/PUSH_QUEUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.PUSH_QUEUE-Procedure.html) |
| SEND_PUSH_NOTIFICATION Procedure | procedure | [local](APEX_PWA/SEND_PUSH_NOTIFICATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.SEND_PUSH_NOTIFICATION-Procedure.html) |
| SUBSCRIBE_PUSH_NOTIFICATIONS Procedure | procedure | [local](APEX_PWA/SUBSCRIBE_PUSH_NOTIFICATIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS-Procedure.html) |
| UNSUBSCRIBE_PUSH_NOTIFICATIONS Procedure | procedure | [local](APEX_PWA/UNSUBSCRIBE_PUSH_NOTIFICATIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
