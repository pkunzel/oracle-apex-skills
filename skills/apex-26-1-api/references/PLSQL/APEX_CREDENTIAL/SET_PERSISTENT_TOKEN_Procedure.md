# APEX_CREDENTIAL.SET_PERSISTENT_TOKEN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_TOKEN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets a token into the provided credential persistently, beyond the current Oracle APEX session. The token is encrypted for security. Client ID and Client Secret are not stored in the credential store by this procedure.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_PERSISTENT_TOKEN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CREDENTIAL.SET_PERSISTENT_TOKEN (
    p_credential_static_id  IN   VARCHAR2,
    p_token_type            IN   t_token_type,
    p_token_value           IN   VARCHAR2,
    p_token_expires         IN   DATE,
    p_token_scope           IN   VARCHAR2         DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | The credential static ID. |
| `p_token_type` | One of the constants C_TOKEN_ACCESS , C_TOKEN_REFRESH , or C_TOKEN_ID . |
| `p_token_value` | The token value. |
| `p_token_expires` | The token expiry date. |
| `p_token_scope` | OAuth scope this token is valid for. Separate multiple scopes with blanks. If not provided, the Web Credential's default scope is assumed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.SET_PERSISTENT_TOKEN(
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_token_type => null,
        p_token_value => 'EXAMPLE',
        p_token_expires => sysdate,
        p_token_scope => 'EXAMPLE'
    );
end;
/
```

