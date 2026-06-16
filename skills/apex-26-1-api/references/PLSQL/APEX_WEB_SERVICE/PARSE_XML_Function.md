# APEX_WEB_SERVICE.PARSE_XML Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_XML-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function parses the response from a Web service returned as an XMLTYPE and returns the value requested as a VARCHAR2.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.PARSE_XML` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.PARSE_XML (
    p_xml               IN XMLTYPE,
    p_xpath             IN VARCHAR2,
    p_ns                IN VARCHAR2 DEFAULT NULL ) 
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_xml` | The XML document as an XMLTYPE to parse. |
| `p_xpath` | The XPath expression to the desired node. |
| `p_ns` | The namespace to the desired node. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a scalar value from an XMLTYPE response.

```sql
declare
    l_xml    sys.xmltype;
    l_status varchar2(4000);
begin
    l_xml := sys.xmltype('<order><status>SHIPPED</status></order>');

    l_status := apex_web_service.parse_xml(
        p_xml   => l_xml,
        p_xpath => '/order/status/text()');
end;
/
```

