# APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets provided credential attributes persistently beyond the current Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_key                   IN VARCHAR2,
    p_value                 IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | Credential static ID. |
| `p_key` | Credential key (for example, HTTP Header or Cookie name). |
| `p_value` | Credential value. |

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
        p_key => 'EXAMPLE',
        p_value => 'EXAMPLE'
    );
end;
/
```

