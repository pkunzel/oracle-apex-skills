# APEX_WEB_SERVICE.SET_REQUEST_HEADERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REQUEST_HEADERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure sets HTTP request headers ( g_request_headers ) for subsequent MAKE_REQUEST or MAKE_REST_REQUEST calls.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.SET_REQUEST_HEADERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.SET_REQUEST_HEADERS (
    p_name_01            IN VARCHAR2,
    p_value_01           IN VARCHAR2,
    p_name_02            IN VARCHAR2 DEFAULT NULL,
    p_value_02           IN VARCHAR2 DEFAULT NULL,
    p_name_03            IN VARCHAR2 DEFAULT NULL,
    p_value_03           IN VARCHAR2 DEFAULT NULL,
    p_name_04            IN VARCHAR2 DEFAULT NULL,
    p_value_04           IN VARCHAR2 DEFAULT NULL,
    p_name_05            IN VARCHAR2 DEFAULT NULL,
    p_value_05           IN VARCHAR2 DEFAULT NULL,
    p_reset              IN BOOLEAN  DEFAULT TRUE,
    p_skip_if_exists     IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name_01` | Name of the 1st parameter to set. |
| `p_value_01` | Value of the 1st parameter to set. |
| `p_name_02` | Name of the 2nd parameter to set. |
| `p_value_02` | Value of the 2nd parameter to set. |
| `p_name_03` | Name of the 3rd parameter to set. |
| `p_value_03` | Value of the 3rd parameter to set. |
| `p_name_04` | Name of the 4th parameter to set. |
| `p_value_04` | Value of the 4th parameter to set. |
| `p_name_05` | Name of the 5th parameter to set. |
| `p_value_05` | Value of the 5th parameter to set. |
| `p_reset` | Whether to clear the request header array before. |
| `p_skip_if_exists` | If TRUE, any existing headers with the same name remain unchanged. For example, if you pass in "Content-Type" as p_name_NN and that header is already present in the apex_web_services.g_request_headers array, then the value that you pass in does not override the existing header value for that name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set a clean header set for the next REST or SOAP request.

```sql
begin
    apex_web_service.set_request_headers(
        p_name_01        => 'Content-Type',
        p_value_01       => 'application/json',
        p_name_02        => 'Accept',
        p_value_02       => 'application/json',
        p_reset          => true,
        p_skip_if_exists => false);
end;
/
```

