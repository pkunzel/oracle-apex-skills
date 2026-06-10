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
    l_last_username varchar2(255);
begin
    l_last_username := apex_authentication.get_login_username_cookie(
        p_cookie_name => apex_authentication.c_default_username_cookie
    );

    :P101_USERNAME := l_last_username;
end;
/
```
