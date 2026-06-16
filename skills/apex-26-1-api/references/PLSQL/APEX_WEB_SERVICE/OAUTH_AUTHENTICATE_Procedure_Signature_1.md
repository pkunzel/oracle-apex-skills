# APEX_WEB_SERVICE.OAUTH_AUTHENTICATE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure performs OAuth authentication and requests an OAuth access token. The token and its expiry date are stored in a package global.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.OAUTH_AUTHENTICATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.OAUTH_AUTHENTICATE (
    p_token_url         IN VARCHAR2,
    p_client_id         IN VARCHAR2,
    p_client_secret     IN VARCHAR2,
    p_flow_type         IN VARCHAR2 DEFAULT oauth_client_cred,
    p_proxy_override    IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout  IN NUMBER   DEFAULT 180,
    p_wallet_path       IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd        IN VARCHAR2 DEFAULT NULL,
    p_https_host        IN VARCHAR2 DEFAULT NULL,
    p_scope             IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_token_url` | The URL endpoint of the OAuth token service. |
| `p_client_id` | OAuth Client ID to use for authentication. |
| `p_client_secret` | OAuth Client Secret to use for authentication. |
| `p_flow_type` | OAuth flow type. Only OAUTH_CLIENT_CRED is supported at this time. |
| `p_proxy_override` | The proxy to use for the request. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is HTTPS. For example, file:/usr/home/oracle/WALLETS |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_scope` | The OAuth scope to identify groups of attributes that will be requested from the OAuth provider. For example, profile,email |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Request an OAuth token with explicit client credentials, avoiding logs of the secret.

```sql
begin
    apex_web_service.oauth_authenticate(
        p_token_url     => 'https://identity.example.com/oauth2/token',
        p_client_id     => :G_OAUTH_CLIENT_ID,
        p_client_secret => :G_OAUTH_CLIENT_SECRET,
        p_scope         => 'orders.read');
end;
/
```

