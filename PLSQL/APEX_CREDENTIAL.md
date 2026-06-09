# APEX_CREDENTIAL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html)

Status: curated first-pass reference.

## Purpose

`APEX_CREDENTIAL` creates and maintains APEX Web Credential definitions and their runtime values. It supports credential metadata, allowed URL scoping, OAuth/OCI/basic/header/query-string credential values, database credential references, token storage, and token cleanup.

Use this package when REST integrations, AI providers, database credentials, or custom authentication flows need credentials managed through APEX rather than hard-coded in PL/SQL.

## When To Use

Use `APEX_CREDENTIAL` when:

- A deployment script must create or update a Web Credential definition.
- A page process must set session-only credentials supplied by the current user.
- An administrator flow must store persistent OAuth, OCI, basic, HTTP header, or query-string credentials.
- OAuth access, refresh, or ID tokens must be set or cleared.
- A credential should be restricted to an allowlist of URLs.
- A Web Credential should reference a database credential.

Do not store secrets in application settings, page items, source code, debug logs, or JavaScript. Page items may collect secrets temporarily, but server-side code should immediately move them into the credential store or session credential state and then clear the item if appropriate.

## API Surface

| Need | Members |
| --- | --- |
| Define credential metadata | `CREATE_CREDENTIAL`, `DROP_CREDENTIAL` |
| Persistent values | `SET_PERSISTENT_CREDENTIALS`, `SET_PERSISTENT_TOKEN` |
| Session-only values | `SET_SESSION_CREDENTIALS`, `SET_SESSION_TOKEN` |
| OAuth scope and named scopes | `SET_SCOPE` |
| URL allowlist | `SET_ALLOWED_URLS` |
| Database credential reference | `SET_DATABASE_CREDENTIAL` |
| Token cleanup | `CLEAR_TOKENS` |

## Create A Credential Definition

Common signature:

```sql
apex_credential.create_credential(
    p_credential_name      in varchar2,
    p_credential_static_id in varchar2,
    p_authentication_type  in varchar2,
    p_scope                in varchar2        default null,
    p_allowed_urls         in apex_t_varchar2 default null,
    p_prompt_on_install    in boolean         default false,
    p_credential_comment   in varchar2        default null );
```

Assuming a REST or AI provider uses an HTTP authorization header:

```sql
begin
    apex_credential.create_credential(
        p_credential_name      => 'AI Provider API Key',
        p_credential_static_id => 'AI_PROVIDER_API_KEY',
        p_authentication_type  => apex_credential.c_type_http_header,
        p_allowed_urls         => apex_t_varchar2('https://api.example.com/'),
        p_prompt_on_install    => true,
        p_credential_comment   => 'Used by server-side AI and REST calls.');
end;
/
```

Use `p_allowed_urls` to reduce the blast radius of a credential. Use `p_prompt_on_install` when an application export should ask the installer for credential values.

## Set Persistent Credentials

Persistent credentials survive beyond the current APEX session and are appropriate for application-owned service accounts or administrator-managed provider secrets.

For HTTP header or query-string credentials:

```sql
begin
    apex_credential.set_persistent_credentials(
        p_credential_static_id => 'AI_PROVIDER_API_KEY',
        p_key                  => 'Authorization',
        p_value                => 'Bearer <secret-token>');
end;
/
```

For basic authentication:

```sql
begin
    apex_credential.set_persistent_credentials(
        p_credential_static_id => 'PARTNER_BASIC',
        p_username             => 'service_account',
        p_password             => '<secret-password>');
end;
/
```

For OAuth client credentials or OCI-style values:

```sql
begin
    apex_credential.set_persistent_credentials(
        p_credential_static_id => 'OCI_OBJECT_STORAGE',
        p_client_id            => '<user-or-client-id>',
        p_client_secret        => '<private-key-or-client-secret>',
        p_namespace            => '<tenancy-ocid>',
        p_fingerprint          => '<public-key-fingerprint>');
end;
/
```

Never print these values to debug output. Avoid exposing this flow to non-administrators.

## Set Session Credentials

Session credentials last only for the current APEX session. They fit cases where the end user provides credentials for a one-time operation.

```sql
begin
    apex_credential.set_session_credentials(
        p_credential_static_id => 'USER_SUPPLIED_BASIC',
        p_username             => :P10_USERNAME,
        p_password             => :P10_PASSWORD);

    :P10_PASSWORD := null;
end;
/
```

Assuming a page temporarily calls an external service on behalf of the current user, prefer `SET_SESSION_CREDENTIALS` over persistent storage.

## Tokens

Store a token for the current session:

```sql
begin
    apex_credential.set_session_token(
        p_credential_static_id => 'OAUTH_PROVIDER',
        p_token_type           => apex_credential.c_token_access,
        p_token_value          => l_access_token,
        p_token_expires        => sysdate + (55 / 1440),
        p_token_scope          => 'profile email');
end;
/
```

Store a token persistently only for approved server-side flows:

```sql
begin
    apex_credential.set_persistent_token(
        p_credential_static_id => 'OAUTH_PROVIDER',
        p_token_type           => apex_credential.c_token_refresh,
        p_token_value          => l_refresh_token,
        p_token_expires        => add_months(sysdate, 6),
        p_token_scope          => 'offline_access');
end;
/
```

Clear acquired tokens when scope, consent, or provider access changes:

```sql
begin
    apex_credential.clear_tokens(
        p_credential_static_id => 'OAUTH_PROVIDER');
end;
/
```

## Scope, URL Allowlist, And Database Credentials

Changing scope clears existing tokens for the credential:

```sql
begin
    apex_credential.set_scope(
        p_credential_static_id => 'OAUTH_PROVIDER',
        p_scope                => 'profile email');
end;
/
```

Changing allowed URLs requires the client secret again:

```sql
begin
    apex_credential.set_allowed_urls(
        p_credential_static_id => 'PARTNER_OAUTH',
        p_allowed_urls         => apex_t_varchar2('https://partner.example.com/api/'),
        p_client_secret        => '<client-secret>');
end;
/
```

Reference a database credential:

```sql
begin
    apex_credential.set_database_credential(
        p_credential_static_id      => 'DBMS_CLOUD_CRED',
        p_db_credential_name        => 'MY_SCHEMA.MY_CREDENTIAL',
        p_db_credential_is_instance => false);
end;
/
```

Instance-level database credentials require instance configuration support.

## Safety Guidance

- Use Web Credential Static IDs in REST, AI, or integration code instead of literal secrets.
- Keep URL allowlists narrow and provider-specific.
- Use session credentials for user-supplied secrets and persistent credentials for administrator-managed service credentials.
- Changing scope or persistent credential values can clear tokens; design reconnect flows accordingly.
- Do not log secrets, tokens, private keys, or complete authorization headers.
- Drop credentials only from controlled install/uninstall flows.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| CLEAR_TOKENS Procedure | procedure | [local](APEX_CREDENTIAL/CLEAR_TOKENS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_TOKENS-Procedure.html) |
| CREATE_CREDENTIAL Procedure Signature 1 | procedure | [local](APEX_CREDENTIAL/CREATE_CREDENTIAL_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CREDENTIAL-Procedure-Signature-1.html) |
| CREATE_CREDENTIAL Procedure Signature 2 | procedure | [local](APEX_CREDENTIAL/CREATE_CREDENTIAL_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CREDENTIAL-Procedure-Signature-2.html) |
| DROP_CREDENTIAL Procedure | procedure | [local](APEX_CREDENTIAL/DROP_CREDENTIAL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DROP_CREDENTIAL-Procedure.html) |
| SET_ALLOWED_URLS Procedure | procedure | [local](APEX_CREDENTIAL/SET_ALLOWED_URLS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_ALLOWED_URLS-Procedure.html) |
| SET_DATABASE_CREDENTIAL Procedure | procedure | [local](APEX_CREDENTIAL/SET_DATABASE_CREDENTIAL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DATABASE_CREDENTIAL-Procedure.html) |
| SET_PERSISTENT_CREDENTIALS Procedure Signature 1 | procedure | [local](APEX_CREDENTIAL/SET_PERSISTENT_CREDENTIALS_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_CREDENTIAL-Procedure-Signature-1.html) |
| SET_PERSISTENT_CREDENTIALS Procedure Signature 2 | procedure | [local](APEX_CREDENTIAL/SET_PERSISTENT_CREDENTIALS_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_CREDENTIAL-Procedure-Signature-2.html) |
| SET_PERSISTENT_CREDENTIALS Procedure Signature 3 | procedure | [local](APEX_CREDENTIAL/SET_PERSISTENT_CREDENTIALS_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS-Procedure-Signature-3.html) |
| SET_PERSISTENT_TOKEN Procedure | procedure | [local](APEX_CREDENTIAL/SET_PERSISTENT_TOKEN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_TOKEN-Procedure.html) |
| SET_SCOPE Procedure | procedure | [local](APEX_CREDENTIAL/SET_SCOPE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.SET_SCOPE-Procedure.html) |
| SET_SESSION_CREDENTIALS Procedure Signature 1 | procedure | [local](APEX_CREDENTIAL/SET_SESSION_CREDENTIALS_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-1.html) |
| SET_SESSION_CREDENTIALS Procedure Signature 2 | procedure | [local](APEX_CREDENTIAL/SET_SESSION_CREDENTIALS_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-2.html) |
| SET_SESSION_CREDENTIALS Procedure Signature 3 | procedure | [local](APEX_CREDENTIAL/SET_SESSION_CREDENTIALS_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-3.html) |
| SET_SESSION_TOKEN Procedure | procedure | [local](APEX_CREDENTIAL/SET_SESSION_TOKEN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_TOKEN-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
