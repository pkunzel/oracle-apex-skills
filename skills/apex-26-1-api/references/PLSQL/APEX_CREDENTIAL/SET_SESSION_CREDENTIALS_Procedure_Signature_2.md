# APEX_CREDENTIAL.SET_SESSION_CREDENTIALS Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets provided credential attributes for the current Oracle APEX session. Typically used for the OAuth2 client credentials or OCI (Oracle Cloud Infrastructure) credential types.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_SESSION_CREDENTIALS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CREDENTIAL.SET_SESSION_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_client_id             IN VARCHAR2,
    p_client_secret         IN VARCHAR2, 
    p_namespace             IN VARCHAR2 DEFAULT NULL,    
    p_fingerprint           IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | Credential static ID. |
| `p_client_id` | Use Client ID for OAuth credentials (use User OCID for OCI credentials). |
| `p_client_secret` | Use Client Secret for OAuth credentials (use Private Key for OCI credentials). |
| `p_namespace` | Use the Tenancy OCID for OCI credentials. |
| `p_fingerprint` | Use the Public Key Fingerprint for OCI credentials. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.SET_SESSION_CREDENTIALS(
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_client_id => 'EXAMPLE',
        p_client_secret => 'EXAMPLE',
        p_namespace => 'EXAMPLE',
        p_fingerprint => 'EXAMPLE'
    );
end;
/
```

