# APEX_WEB_SERVICE.About the APEX_WEB_SERVICE API

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

Use the APEX_WEB_SERVICE API to invoke a Web service and examine the response anywhere you can use PL/SQL in Oracle APEX .

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.About the APEX_WEB_SERVICE API` about. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use APEX_WEB_SERVICE when PL/SQL needs direct control over an HTTP call.

```sql
declare
    l_response clob;
begin
    apex_web_service.set_request_headers(
        p_name_01  => 'Accept',
        p_value_01 => 'application/json');

    l_response := apex_web_service.make_rest_request(
        p_url                  => 'https://api.example.com/orders/1001',
        p_http_method          => 'GET',
        p_credential_static_id => 'ORDERS_API');
end;
/
```

