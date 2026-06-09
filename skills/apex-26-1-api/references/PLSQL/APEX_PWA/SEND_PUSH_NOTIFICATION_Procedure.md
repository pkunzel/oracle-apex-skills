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

## Simple Example

```sql
begin
    apex_pwa.SEND_PUSH_NOTIFICATION(
        p_application_id => 1,
        p_user_name => 'USER',
        p_title => 'EXAMPLE',
        p_body => to_clob('Example text'),
        p_icon_url => 'EXAMPLE',
        p_target_url => 'EXAMPLE'
    );
end;
/
```

