# APEX_CREDENTIAL.CREATE_CREDENTIAL Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CREDENTIAL-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure creates a credential definition.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.CREATE_CREDENTIAL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE CREATE_CREDENTIAL (
    p_credential_name           IN VARCHAR2,
    p_credential_static_id      IN VARCHAR2,
    p_authentication_type       IN VARCHAR2,
    p_scope                     IN VARCHAR2         DEFAULT NULL,
    p_allowed_urls              IN apex_t_varchar2  DEFAULT NULL,
    p_prompt_on_install         IN BOOLEAN          DEFAULT FALSE,
    p_credential_comment        IN VARCHAR2         DEFAULT NULL,
    --
    p_db_credential_name        IN VARCHAR2         DEFAULT NULL,
    p_db_credential_is_instance IN BOOLEAN          DEFAULT NULL,
    p_named_scopes              IN VARCHAR2         DEFAULT NULL,
    p_referenced_static_id      IN VARCHAR2         DEFAULT NULL,
    p_oauth_token_request_type  IN VARCHAR2         DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_name` | The credential name. |
| `p_credential_static_id` | The credential static ID. |
| `p_authentication_type` | The authentication type. Supported types: APEX_CREDENTIAL.C_TYPE_BASIC APEX_CREDENTIAL.C_TYPE_OAUTH_CLIENT_CRED APEX_CREDENTIAL.C_TYPE_JWT APEX_CREDENTIAL.C_TYPE_OCI APEX_CREDENTIAL.C_TYPE_HTTP_HEADER APEX_CREDENTIAL.C_TYPE_HTTP_QUERY_STRING APEX_CREDENTIAL.C_TYPE_OAUTH_PASSWORD APEX_CREDENTIAL.C_TYPE_SIGNED_USER_ASSERTION APEX_CREDENTIAL.C_TYPE_USER_ASSERT_CERTIFICATE |
| `p_scope` | OAuth 2.0 scope to use when making token requests. |
| `p_allowed_urls` | List of URLs (as APEX_T_VARCHAR2 ) that these credentials can access. |
| `p_prompt_on_install` | Choose whether prompts for this credential should be displayed when the application is being imported on another APEX instance. |
| `p_credential_comment` | Credential comment. |
| `p_db_credential_name` | Name of the database credential to be referenced. |
| `p_db_credential_is_instance` | Whether the database credential was made available at the Oracle APEX instance level (all workspaces). This parameter can only be used when instance credentials are enabled for the APEX instance using the INSTANCE_DBMS_CREDENTIAL_ENABLED instance parameter. |
| `p_named_scopes` |  |
| `p_referenced_static_id` | Reference to another credential. Only allowed for authentication type: APEX_CREDENTIAL.C_TYPE_OAUTH_PASSWORD referencing an apex_credential.c_type_basic APEX_CREDENTIAL.C_TYPE_SIGNED_USER_ASSERTION referencing an apex_credential.c_type_user_assert_certificate |
| `p_oauth_token_request_type` | Authenticating method used for making a request to an OAuth2 token URL. Supported methods: C_OAUTH_TOKEN_REQT_BODY C_OAUTH_TOKEN_REQT_BASIC C_OAUTH_TOKEN_REQT_CLIENT_ID C_OAUTH_TOKEN_REQT_BASIC_CLID |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.CREATE_CREDENTIAL(
        p_credential_name => 'EXAMPLE',
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_authentication_type => 'EXAMPLE',
        p_scope => 'EXAMPLE',
        p_allowed_urls => 'EXAMPLE',
        p_prompt_on_install => true,
        p_credential_comment => 'EXAMPLE',
        p_db_credential_name => 'EXAMPLE',
        p_db_credential_is_instance => true,
        p_named_scopes => 'EXAMPLE',
        p_referenced_static_id => 'EXAMPLE_STATIC_ID',
        p_oauth_token_request_type => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_credential.CREATE_CREDENTIAL(
            p_credential_name => 'EXAMPLE',
            p_credential_static_id => 'EXAMPLE_STATIC_ID',
            p_authentication_type => 'EXAMPLE',
            p_scope => 'EXAMPLE',
            p_allowed_urls => 'EXAMPLE',
            p_prompt_on_install => true,
            p_credential_comment => 'EXAMPLE',
            p_db_credential_name => 'EXAMPLE',
            p_db_credential_is_instance => true,
            p_named_scopes => 'EXAMPLE',
            p_referenced_static_id => 'EXAMPLE_STATIC_ID',
            p_oauth_token_request_type => 'EXAMPLE'
        );
end;
/
```

