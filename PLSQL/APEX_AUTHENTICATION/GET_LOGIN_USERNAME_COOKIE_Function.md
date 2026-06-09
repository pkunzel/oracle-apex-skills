# APEX_AUTHENTICATION.GET_LOGIN_USERNAME_COOKIE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOGIN_USERNAME_COOKIE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This function reads the cookie with the username from the default login page.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.GET_LOGIN_USERNAME_COOKIE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
GET_LOGIN_USERNAME_COOKIE (
    p_cookie_name IN VARCHAR2 DEFAULT C_DEFAULT_USERNAME_COOKIE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_cookie_name` | The cookie name which stores the username in the browser. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_authentication.GET_LOGIN_USERNAME_COOKIE(
        p_cookie_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_authentication.GET_LOGIN_USERNAME_COOKIE(
            p_cookie_name => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

