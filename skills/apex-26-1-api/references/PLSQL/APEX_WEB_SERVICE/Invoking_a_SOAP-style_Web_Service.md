# APEX_WEB_SERVICE.Invoking a SOAP-style Web Service

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Invoking-a-SOAP-Style-Web-Service.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

There is a procedure and a function to invoke a SOAP-style Web service.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Invoking a SOAP-style Web Service` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Build the SOAP envelope as a CLOB and pass it to MAKE_REQUEST.

```sql
declare
    l_envelope clob;
    l_response sys.xmltype;
begin
    l_envelope := q'~<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body><getOrder><orderId>1001</orderId></getOrder></soapenv:Body>
</soapenv:Envelope>~';

    l_response := apex_web_service.make_request(
        p_url      => 'https://api.example.com/soap/orders',
        p_action   => 'urn:getOrder',
        p_envelope => l_envelope);
end;
/
```

