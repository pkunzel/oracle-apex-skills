# APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_CREDENTIAL-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets user name and password for the provided credential persistently, beyond the current session. Typically used for BASIC authentication.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE SET_PERSISTENT_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_username              IN VARCHAR2,
    p_password              IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | Credential static ID. |
| `p_username` | Credential user name. |
| `p_password` | Credential password. |

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
        p_username => 'USER',
        p_password => 'EXAMPLE'
    );
end;
/
```

