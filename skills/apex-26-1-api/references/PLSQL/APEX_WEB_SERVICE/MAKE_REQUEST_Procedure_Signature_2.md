# APEX_WEB_SERVICE.MAKE_REQUEST Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure invokes a Web service with the supplied SOAP envelope and stores the response in a collection.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.MAKE_REQUEST` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.MAKE_REQUEST (
    p_url                  IN VARCHAR2,
    p_action               IN VARCHAR2 DEFAULT NULL,
    p_version              IN VARCHAR2 DEFAULT '1.1',
    p_collection_name      IN VARCHAR2 DEFAULT NULL,
    p_envelope             IN CLOB,
    --
    p_credential_static_id IN VARCHAR2,
    p_token_url            IN VARCHAR2 DEFAULT NULL,
    --
    p_proxy_override       IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout     IN NUMBER   DEFAULT 180,
    p_wallet_path          IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd           IN VARCHAR2 DEFAULT NULL,
    p_https_host           IN VARCHAR2 DEFAULT NULL,
    p_oauth_scope          IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_url` | The URL endpoint of the Web service. |
| `p_action` | The SOAP Action corresponding to the operation invoked. |
| `p_version` | The SOAP version (1.1 or 1.2). The default is 1.1. |
| `p_collection_name` | The name of the collection to store the response. |
| `p_envelope` | The SOAP envelope to post to the service. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_token_url` | For token-based authentication flows, the URL where to get the token from. |
| `p_proxy_override` | The proxy to use for the request. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is HTTPS. For example, file:/usr/home/oracle/WALLETS |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_oath_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_web_service.MAKE_REQUEST(
        p_url => 'EXAMPLE',
        p_action => 'EXAMPLE',
        p_version => 'EXAMPLE',
        p_collection_name => 'EXAMPLE',
        p_envelope => to_clob('Example text'),
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_token_url => 'EXAMPLE',
        p_proxy_override => 'EXAMPLE',
        p_transfer_timeout => 1,
        p_wallet_path => 'EXAMPLE',
        p_wallet_pwd => 'EXAMPLE',
        p_https_host => 'EXAMPLE',
        p_oauth_scope => 'EXAMPLE'
    );
end;
/
```

