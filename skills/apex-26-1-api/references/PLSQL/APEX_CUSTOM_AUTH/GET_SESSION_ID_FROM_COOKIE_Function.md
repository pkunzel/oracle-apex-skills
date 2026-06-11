# APEX_CUSTOM_AUTH.GET_SESSION_ID_FROM_COOKIE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_ID_FROM_COOKIE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function returns the Oracle APEX session ID located by the session cookie in a page request in the current browser session.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.GET_SESSION_ID_FROM_COOKIE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.GET_SESSION_ID_FROM_COOKIE
RETURN NUMBER;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_cookie_session_id number;
begin
    l_cookie_session_id := apex_custom_auth.get_session_id_from_cookie;

    if l_cookie_session_id is not null then
        apex_custom_auth.set_session_id(l_cookie_session_id);
    end if;
end;
/
```

