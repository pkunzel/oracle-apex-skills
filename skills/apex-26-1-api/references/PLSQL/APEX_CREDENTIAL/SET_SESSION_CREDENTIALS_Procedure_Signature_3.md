# APEX_CREDENTIAL.SET_SESSION_CREDENTIALS Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets provided credential attributes for the current Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_SESSION_CREDENTIALS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CREDENTIAL.SET_SESSION_CREDENTIALS (
    p_credential_static_id IN VARCHAR2,
    p_key                  IN VARCHAR2,
    p_value                IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | The credential static ID. |
| `p_key` | Credential key (name of the HTTP Header or Query String Parameter). |
| `p_value` | Credential secret value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.set_session_credentials(
        p_credential_static_id => 'PAYMENTS_API',
        p_key                  => 'Authorization',
        p_value                => 'Bearer ' || :P10_ACCESS_TOKEN
    );
end;
/
```

