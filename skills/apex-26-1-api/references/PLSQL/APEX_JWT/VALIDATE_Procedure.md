# APEX_JWT.VALIDATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JWT](../APEX_JWT.md)

## Purpose

This procedure validates the given token.

## When To Use

Use this page when code needs the `APEX_JWT.VALIDATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JWT.VALIDATE (
     p_token          IN t_token,
     p_iss            IN VARCHAR2    DEFAULT NULL,
     p_aud            IN VARCHAR2    DEFAULT NULL,
     p_leeway_seconds IN PLS_INTEGER DEFAULT 0 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_token` | The JWT. |
| `p_iss` | If not null, verify that the "iss" claim equals p_iss . |
| `p_aud` | If not null, verify that the single "aud" value equals p_aud . If "aud" is an array, verify that the "azp" (Authorized Party) claim equals p_aud . This is an OpenID extension. |
| `p_leeway_seconds` | Fudge factor (in seconds) for comparing "exp" (Expiration Time), "nbf" (Not Before), and "iat" (Issued At) claims. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_jwt.VALIDATE(
        p_token => null,
        p_iss => 'EXAMPLE',
        p_aud => 'EXAMPLE',
        p_leeway_seconds => 1
    );
end;
/
```

