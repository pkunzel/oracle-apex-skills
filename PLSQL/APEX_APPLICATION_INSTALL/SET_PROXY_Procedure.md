# APEX_APPLICATION_INSTALL.SET_PROXY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PROXY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the proxy server attributes of an imported application.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_PROXY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_PROXY (
    p_proxy            IN VARCHAR2,
    p_no_proxy_domains IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_proxy` | The proxy server. There is no default value. The proxy server must be fewer than 255 characters and must exclude any protocol prefix (such as http:// ). The following is a valid example: www-proxy.example.com |
| `p_no_proxy_domains` | Default null. The list of domains for which the proxy server can not be used. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_PROXY(
        p_proxy => 'EXAMPLE',
        p_no_proxy_domains => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.SET_PROXY(
            p_proxy => 'EXAMPLE',
            p_no_proxy_domains => 'EXAMPLE'
        );
end;
/
```

