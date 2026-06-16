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

Use the token produced by the last OAuth authentication call only when it is still available.

```sql
declare
    l_token varchar2(32767);
begin
    l_token := apex_web_service.oauth_get_last_token;

    if l_token is null then
        raise_application_error(-20000, 'OAuth token is missing or expired.');
    end if;
end;
/
```

