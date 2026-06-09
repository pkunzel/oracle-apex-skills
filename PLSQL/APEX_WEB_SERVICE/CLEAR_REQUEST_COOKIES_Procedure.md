# APEX_WEB_SERVICE.CLEAR_REQUEST_COOKIES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REQUEST_COOKIES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure clears all cookies, so that the next MAKE_REST_REQUEST call executes without sending any cookies. This procedure clears the cookie globals in APEX_WEB_SERVICE and in UTL_HTTP.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.CLEAR_REQUEST_COOKIES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.CLEAR_REQUEST_COOKIES;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_web_service.CLEAR_REQUEST_COOKIES;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_web_service.CLEAR_REQUEST_COOKIES;
end;
/
```

