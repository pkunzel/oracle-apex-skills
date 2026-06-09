# APEX_WEB_SERVICE.MAKE_REQUEST Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function invokes a SOAP-style web service with the supplied SOAP envelope returning the results in an XMLTYPE .

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.MAKE_REQUEST` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.MAKE_REQUEST (
    p_url                  IN VARCHAR2,
    p_action               IN VARCHAR2 DEFAULT NULL,
    p_version              IN VARCHAR2 DEFAULT '1.1',
    p_envelope             IN CLOB,
    p_username             IN VARCHAR2 DEFAULT NULL,
    p_password             IN VARCHAR2 DEFAULT NULL,
    p_scheme               IN VARCHAR2 DEFAULT 'Basic',
    p_proxy_override       IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout     IN NUMBER   DEFAULT 180,
    p_wallet_path          IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd           IN VARCHAR2 DEFAULT NULL,
    p_https_host           IN VARCHAR2 DEFAULT NULL )
RETURN sys.xmltype;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_url` | The URL endpoint of the Web service. |
| `p_action` | The SOAP Action corresponding to the operation to be invoked. |
| `p_version` | The SOAP version (1.1 or 1.2). The default is 1.1. |
| `p_envelope` | The SOAP envelope to post to the service. |
| `p_username` | The username if basic authentication is required for this service. |
| `p_password` | The password if basic authentication is required for this service. |
| `p_scheme` | The authentication scheme. Basic (default), AWS, Digest, or OAUTH_CLIENT_CRED if supported by your database release. |
| `p_proxy_override` | The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The file system path to a wallet if the URL endpoint is HTTPS. For example, file:/usr/home/oracle/WALLETS The wallet path provided overrides the wallet defined in the instance settings. |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |

## Returns

The SOAP service response in an XMLTYPE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result SYS.XMLTYPE;
begin
    l_result := apex_web_service.MAKE_REQUEST(
        p_url => 'EXAMPLE',
        p_action => 'EXAMPLE',
        p_version => 'EXAMPLE',
        p_envelope => to_clob('Example text'),
        p_username => 'USER',
        p_password => 'EXAMPLE',
        p_scheme => 'EXAMPLE',
        p_proxy_override => 'EXAMPLE',
        p_transfer_timeout => 1,
        p_wallet_path => 'EXAMPLE',
        p_wallet_pwd => 'EXAMPLE',
        p_https_host => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result SYS.XMLTYPE;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_web_service.MAKE_REQUEST(
            p_url => 'EXAMPLE',
            p_action => 'EXAMPLE',
            p_version => 'EXAMPLE',
            p_envelope => to_clob('Example text'),
            p_username => 'USER',
            p_password => 'EXAMPLE',
            p_scheme => 'EXAMPLE',
            p_proxy_override => 'EXAMPLE',
            p_transfer_timeout => 1,
            p_wallet_path => 'EXAMPLE',
            p_wallet_pwd => 'EXAMPLE',
            p_https_host => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

