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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_web_service.GET_REQUEST_HEADER(
        p_header_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

