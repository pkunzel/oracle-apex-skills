# APEX_WEB_SERVICE.Invoking a RESTful-style Web Service

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Invoking-a-RESTful-Style-Web-Service.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

RESTful-style Web services use a simpler architecture than SOAP. Often the input to a RESTful-style Web service is a collection of name/value pairs. The response can be an XML document or simply text such as a comma-separated response or JSON.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Invoking a RESTful-style Web Service` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Pass query parameters with paired vc_arr2 arrays when calling a REST endpoint.

```sql
declare
    l_names    apex_application_global.vc_arr2;
    l_values   apex_application_global.vc_arr2;
    l_response clob;
begin
    l_names  := apex_string.string_to_table('status:limit');
    l_values := apex_string.string_to_table('open:25');

    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.com/orders',
        p_http_method => 'GET',
        p_parm_name   => l_names,
        p_parm_value  => l_values);
end;
/
```

