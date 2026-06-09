# APEX_WEB_SERVICE.PARSE_RESPONSE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_RESPONSE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function parses the response from a Web service that is stored in a collection and returns the result as a VARCHAR2 type.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.PARSE_RESPONSE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.PARSE_RESPONSE (
    p_collection_name   IN VARCHAR2,
    p_xpath             IN VARCHAR2,
    p_ns                IN VARCHAR2 DEFAULT NULL ) 
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection where the Web service response is stored. |
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
    l_result := apex_web_service.PARSE_RESPONSE(
        p_collection_name => 'EXAMPLE',
        p_xpath => 'EXAMPLE',
        p_ns => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

