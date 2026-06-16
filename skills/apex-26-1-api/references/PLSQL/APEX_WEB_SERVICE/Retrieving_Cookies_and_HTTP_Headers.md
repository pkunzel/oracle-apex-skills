# APEX_WEB_SERVICE.Retrieving Cookies and HTTP Headers

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Retrieving-Cookies-and-HTTP-Headers.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

When you invoke a Web service using any of the supported methods in Oracle APEX , the g_response_cookies and g_headers globals are populated if the Web service response included any cookies or HTTP headers. You can interrogate these globals and store the information in collections.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Retrieving Cookies and HTTP Headers` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Inspect response headers after a web service call.

```sql
declare
    l_response clob;
begin
    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.com/orders/1001',
        p_http_method => 'GET');

    for i in 1 .. apex_web_service.g_headers.count loop
        apex_debug.info(
            'Header %s: %s',
            apex_web_service.g_headers(i).name,
            apex_web_service.g_headers(i).value);
    end loop;
end;
/
```

