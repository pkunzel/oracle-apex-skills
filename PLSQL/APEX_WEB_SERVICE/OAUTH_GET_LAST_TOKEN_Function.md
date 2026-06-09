# APEX_WEB_SERVICE.OAUTH_GET_LAST_TOKEN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_GET_LAST_TOKEN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function returns the OAuth access token received in the last OAUTH_AUTHENTICATE call. Returns NULL when the token is already expired or OAUTH_AUTHENTICATE has not been called.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.OAUTH_GET_LAST_TOKEN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION OAUTH_GET_LAST_TOKEN RETURN VARCHAR2;
```

## Returns

The OAuth access token from the last OAUTH_AUTHENTICATE call; NULL when the token is expired.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_web_service.OAUTH_GET_LAST_TOKEN;
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

    l_result := apex_web_service.OAUTH_GET_LAST_TOKEN;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

