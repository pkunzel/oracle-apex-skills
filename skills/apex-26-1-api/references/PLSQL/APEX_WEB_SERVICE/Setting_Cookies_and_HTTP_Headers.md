# APEX_WEB_SERVICE.Setting Cookies and HTTP Headers

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Setting-Cookies-and-HTTP-Headers.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

Set cookies and HTTP headers that should be sent along with a Web Service request by populating the globals g_request_cookies and g_request_headers before the process that invokes the Web Service.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Setting Cookies and HTTP Headers` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Set headers through the documented helper before invoking the request.

```sql
begin
    apex_web_service.set_request_headers(
        p_name_01  => 'Content-Type',
        p_value_01 => 'application/json',
        p_name_02  => 'Accept',
        p_value_02 => 'application/json');
end;
/
```

