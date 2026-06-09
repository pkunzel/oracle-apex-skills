# APEX_PWA.HAS_PUSH_SUBSCRIPTION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.HAS_PUSH_SUBSCRIPTION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PWA](../APEX_PWA.md)

## Purpose

This function returns whether a user has at least one device subscribed to push notifications.

## When To Use

Use this page when code needs the `APEX_PWA.HAS_PUSH_SUBSCRIPTION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PWA.HAS_PUSH_SUBSCRIPTION (
    p_application_id IN NUMBER   DEFAULT [current application id],
    p_user_name      IN VARCHAR2 DEFAULT [current user] )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application that has the push subscription. |
| `p_user_name` | Username of the user that has the push subscription. |

## Returns

Function returns boolean containing whether a user is subscribed to an application.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_pwa.HAS_PUSH_SUBSCRIPTION(
        p_application_id => 1,
        p_user_name => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_pwa.HAS_PUSH_SUBSCRIPTION(
            p_application_id => 1,
            p_user_name => 'USER'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

