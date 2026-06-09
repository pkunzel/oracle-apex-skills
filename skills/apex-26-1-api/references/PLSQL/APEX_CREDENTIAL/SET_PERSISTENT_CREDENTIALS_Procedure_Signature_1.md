# APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_CREDENTIAL-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets provided credential attributes persistently, beyond the current session. Already stored access, refresh or ID tokens for the provided credential are removed.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE SET_PERSISTENT_CREDENTIALS (
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
| `p_client_id` | Use Client ID for OAuth Credentials. Use User OCID for OCI Credentials. |
| `p_client_secret` | Use Client Secret for OAuth Credentials. Use Private Key for OCI Credentials. |
| `p_namespace` | Use the Tenancy OCID for OCI Credentials. |
| `p_fingerprint` | Use the Public Key Fingerprint for OCI Credentials. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.SET_PERSISTENT_CREDENTIALS(
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_client_id => 'EXAMPLE',
        p_client_secret => 'EXAMPLE',
        p_namespace => 'EXAMPLE',
        p_fingerprint => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_credential.SET_PERSISTENT_CREDENTIALS(
            p_credential_static_id => 'EXAMPLE_STATIC_ID',
            p_client_id => 'EXAMPLE',
            p_client_secret => 'EXAMPLE',
            p_namespace => 'EXAMPLE',
            p_fingerprint => 'EXAMPLE'
        );
end;
/
```

