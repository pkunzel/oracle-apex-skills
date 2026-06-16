# APEX_WEB_SERVICE.Global Variables

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Global-Variables.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

The g_status_code and g_reason_phrase globals are set after each HTTP request so that you can get its outcome (for example, 200=OK. 400=Bad Request).

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Global Variables` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Read the HTTP status globals immediately after the request that set them.

```sql
declare
    l_response clob;
begin
    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.com/orders/1001',
        p_http_method => 'GET');

    if apex_web_service.g_status_code not between 200 and 299 then
        raise_application_error(
            -20000,
            'Service failed: ' || apex_web_service.g_status_code || ' ' ||
            apex_web_service.g_reason_phrase);
    end if;
end;
/
```

