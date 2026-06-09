# APEX_APPLICATION_ADMIN.SET_PROXY_SERVER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_PROXY_SERVER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the proxy server attributes of an application.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_PROXY_SERVER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_PROXY_SERVER (
    p_application_id   IN NUMBER,
    p_proxy_server     IN VARCHAR2 ,
    p_no_proxy_domains IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_proxy_server` | The proxy server. There is no default value. The proxy server must be fewer than 255 characters and must exclude any protocol prefix such as http:// . The following example is valid: www-proxy.example.com |
| `p_no_proxy_domains` | Comma-delimited list of domains for which the proxy server is invalid. Default value is null. Cannot be more than 500 characters. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.SET_PROXY_SERVER(
        p_application_id => 1,
        p_proxy_server => 'EXAMPLE',
        p_no_proxy_domains => 'EXAMPLE'
    );
end;
/
```

