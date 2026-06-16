# APEX_WEB_SERVICE.CLEAR_REQUEST_HEADERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REQUEST_HEADERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure clears the current request headers.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.CLEAR_REQUEST_HEADERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.CLEAR_REQUEST_HEADERS;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Clear request headers before setting a new HTTP request profile.

```sql
begin
    apex_web_service.clear_request_headers;
end;
/
```

