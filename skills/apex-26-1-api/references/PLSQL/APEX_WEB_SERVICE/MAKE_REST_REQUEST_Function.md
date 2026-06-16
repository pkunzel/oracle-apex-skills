# APEX_WEB_SERVICE.MAKE_REST_REQUEST Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

Use this function to invoke a RESTful style Web service supplying either name value pairs, a character based payload or a binary payload and returning the response in a CLOB.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.MAKE_REST_REQUEST` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.MAKE_REST_REQUEST (
    p_url                   IN  VARCHAR2,
    p_http_method           IN  VARCHAR2,
    p_username              IN  VARCHAR2 DEFAULT NULL,
    p_password              IN  VARCHAR2 DEFAULT NULL,
    p_scheme                IN  VARCHAR2 DEFAULT 'Basic',
    p_proxy_override        IN  VARCHAR2 DEFAULT NULL,
    p_transfer_timeout      IN  NUMBER   DEFAULT 180,
    p_body                  IN  CLOB     DEFAULT EMPTY_CLOB(),
    p_body_blob             IN  BLOB     DEFAULT EMPTY_BLOB(),
    p_parm_name             IN  apex_application_global.vc_arr2
                                    DEFAULT empty_vc_arr,
    p_parm_value            IN  apex_application_global.vc_arr2
                                    DEFAULT empty_vc_arr,
    p_wallet_path           IN  VARCHAR2 DEFAULT NULL,
    p_wallet_pwd            IN  VARCHAR2 DEFAULT NULL,
    p_https_host            IN  VARCHAR2 DEFAULT NULL,
    p_credential_static_id  IN  VARCHAR2 DEFAULT NULL,
    p_token_url             IN  VARCHAR2 DEFAULT NULL,
    p_oauth_scope           IN  VARCHAR2 DEFAULT NULL )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_url` | The URL endpoint of the Web service. |
| `p_http_method` | The HTTP method to use (PUT, POST, GET, HEAD, or DELETE). |
| `p_username` | The username if basic authentication is required for this service. |
| `p_password` | The password if basic authentication is required for this service |
| `p_scheme` | The authentication scheme, Basic (default) or AWS or Digest or OAUTH_CLIENT_CRED if supported by your database release. |
| `p_proxy_override` | The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_body` | The HTTP payload to be sent as CLOB. |
| `p_body_blob` | The HTTP payload to be sent as binary BLOB. For example, posting a file. |
| `p_parm_name` | The name of the parameters to be used in name/value pairs. |
| `p_parm_value` | The value of the parameters to be used in name/value pairs. |
| `p_wallet_path` | The file system path to a wallet if the URL endpoint is https. For example, file:/usr/home/oracle/WALLETS. The wallet path provided overrides the wallet defined in the instance settings. |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_token_url` | For token-based authentication flows (like OAuth2): The URL where to get the token from. |
| `p_oauth_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Call a REST endpoint with query parameters and a Web Credential.

```sql
declare
    l_names    apex_application_global.vc_arr2;
    l_values   apex_application_global.vc_arr2;
    l_response clob;
begin
    l_names  := apex_string.string_to_table('status:limit');
    l_values := apex_string.string_to_table('open:25');

    l_response := apex_web_service.make_rest_request(
        p_url                  => 'https://api.example.com/orders',
        p_http_method          => 'GET',
        p_parm_name            => l_names,
        p_parm_value           => l_values,
        p_credential_static_id => 'ORDERS_API');
end;
/
```

