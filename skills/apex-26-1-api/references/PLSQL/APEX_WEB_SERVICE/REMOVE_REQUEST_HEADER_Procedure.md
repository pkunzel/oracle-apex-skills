# APEX_WEB_SERVICE.REMOVE_REQUEST_HEADER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_REQUEST_HEADER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure removes an HTTP request header ( g_request_headers ). If the header parameter name does not exist, no error is raised.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.REMOVE_REQUEST_HEADER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.REMOVE_REQUEST_HEADER (
    p_name  IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The name of the header to remove. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_web_service.REMOVE_REQUEST_HEADER(
        p_name => 'EXAMPLE'
    );
end;
/
```

