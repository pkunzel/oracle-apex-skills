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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_web_service.PARSE_XML(
        p_xml => null,
        p_xpath => 'EXAMPLE',
        p_ns => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_web_service.PARSE_XML(
            p_xml => null,
            p_xpath => 'EXAMPLE',
            p_ns => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

