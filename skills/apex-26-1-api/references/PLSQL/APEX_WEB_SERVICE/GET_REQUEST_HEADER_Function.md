# APEX_WEB_SERVICE.GET_REQUEST_HEADER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REQUEST_HEADER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function gets a specific request header value out of the request headers array.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.GET_REQUEST_HEADER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.GET_REQUEST_HEADER (
    p_header_name   VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_header_name` | The parameter name (case is normalized for the search in the header array). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a request header that was previously configured.

```sql
declare
    l_content_type varchar2(4000);
begin
    apex_web_service.set_request_headers(
        p_name_01  => 'Content-Type',
        p_value_01 => 'application/json');

    l_content_type := apex_web_service.get_request_header(
        p_header_name => 'Content-Type');
end;
/
```

