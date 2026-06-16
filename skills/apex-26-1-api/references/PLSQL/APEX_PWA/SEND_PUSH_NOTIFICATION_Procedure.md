# APEX_PWA.SEND_PUSH_NOTIFICATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.SEND_PUSH_NOTIFICATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PWA](../APEX_PWA.md)

## Purpose

This procedure sends a push notification to a user. All devices that the user subscribes on receive the push notification.

## When To Use

Use this page when code needs the `APEX_PWA.SEND_PUSH_NOTIFICATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PWA.SEND_PUSH_NOTIFICATION (
    p_application_id IN NUMBER   DEFAULT [current application id],
    p_user_name      IN VARCHAR2,
    p_title          IN VARCHAR2,
    p_body           IN VARCHAR2 DEFAULT NULL,
    p_icon_url       IN VARCHAR2 DEFAULT NULL,
    p_target_url     IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application that contains the user to send the push notification to. Defaults to current application. |
| `p_user_name` | Username of the user receiving the push notification. |
| `p_title` | Title of the push notification. |
| `p_body` | Body of the push notification. |
| `p_icon_url` | URL of the icon that displays on the push notification. Defaults to the provided application icon. |
| `p_target_url` | URL of the page that opens when the user clicks on the push notification. Defaults to the home page of the application. Oracle recommends enabling deep linking or rejoin session on the application for best performance. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Send a short notification to a subscribed user and use an APEX-generated target URL.

```sql
begin
    apex_pwa.send_push_notification(
        p_application_id => :APP_ID,
        p_user_name      => :P20_ASSIGNEE,
        p_title          => 'Task assigned',
        p_body           => 'Task ' || :P20_TASK_ID || ' is waiting for review.',
        p_icon_url       => apex_mail.get_images_url || 'app-icon-192.png',
        p_target_url     => apex_page.get_url(
                                p_application => :APP_ID,
                                p_page        => 20,
                                p_items       => 'P20_TASK_ID',
                                p_values      => :P20_TASK_ID));
end;
/
```
