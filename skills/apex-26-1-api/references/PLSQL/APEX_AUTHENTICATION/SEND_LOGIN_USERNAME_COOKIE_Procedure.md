# APEX_AUTHENTICATION.SEND_LOGIN_USERNAME_COOKIE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND_LOGIN_USERNAME_COOKIE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure sends a cookie with the username.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.SEND_LOGIN_USERNAME_COOKIE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.SEND_LOGIN_USERNAME_COOKIE (
    p_username      IN VARCHAR2,
    p_cookie_name   IN VARCHAR2 DEFAULT c_default_username_cookie,
    p_consent       IN BOOLEAN  DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | The user's name. |
| `p_cookie_name` | The cookie name which stores p_username in the browser. |
| `p_consent` | Control if the cookie should actually be sent. If true , assume the user gave consent to send the cookie. If false , do not send the cookie. If there is no consent and the cookie already exists, the procedure overwrites the existing cookie value with null. This parameter is ignored and no cookie gets sent if PERSISTENT_COOKIES_ENABLED returns false . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.SEND_LOGIN_USERNAME_COOKIE(
        p_username => 'USER',
        p_cookie_name => 'EXAMPLE',
        p_consent => true
    );
end;
/
```

