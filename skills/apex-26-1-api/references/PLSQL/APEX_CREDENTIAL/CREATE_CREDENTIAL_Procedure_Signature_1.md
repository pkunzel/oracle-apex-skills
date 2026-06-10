# APEX_CREDENTIAL.CREATE_CREDENTIAL Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CREDENTIAL-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure creates a credential definition.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.CREATE_CREDENTIAL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE CREATE_CREDENTIAL (
    p_credential_name       IN VARCHAR2,
    p_credential_static_id  IN VARCHAR2,
    p_authentication_type   IN VARCHAR2,
    p_scope                 IN VARCHAR2         DEFAULT NULL,
    p_allowed_urls          IN apex_t_varchar2  DEFAULT NULL,
    p_prompt_on_install     IN BOOLEAN          DEFAULT FALSE,
    p_credential_comment    IN VARCHAR2         DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_name` | The credential name. |
| `p_credential_static_id` | The credential static ID. |
| `p_authentication_type` | The authentication type. Supported types: APEX_CREDENTIAL.C_TYPE_BASIC APEX_CREDENTIAL.C_TYPE_OAUTH_CLIENT_CRED APEX_CREDENTIAL.C_TYPE_JWT APEX_CREDENTIAL.C_TYPE_OCI APEX_CREDENTIAL.C_TYPE_HTTP_HEADER APEX_CREDENTIAL.C_TYPE_HTTP_QUERY_STRING |
| `p_scope` | (Optional) OAuth 2.0 scope. |
| `p_allowed_urls` | (Optional) List of URLs (as APEX_T_VARCHAR2 ) that these credentials can access. |
| `p_prompt_on_install` | (Optional) Choose whether prompts for this credential should be displayed when the application is being imported on another Oracle APEX instance. |
| `p_credential_comment` | (Optional) Credential comment. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.create_credential(
        p_credential_name      => 'Payments API Key',
        p_credential_static_id => 'PAYMENTS_API',
        p_authentication_type  => apex_credential.c_type_http_header,
        p_allowed_urls         => apex_t_varchar2('https://payments.example.com/'),
        p_prompt_on_install    => true,
        p_credential_comment   => 'Used for server-side payment status calls.'
    );
end;
/
```

