# APEX_JWT.ENCODE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENCODE.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JWT](../APEX_JWT.md)

## Purpose

This function encodes and optionally encrypts payload.

## When To Use

Use this page when code needs the `APEX_JWT.ENCODE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION ENCODE (
     p_iss           IN VARCHAR2                 DEFAULT NULL,
     p_sub           IN VARCHAR2                 DEFAULT NULL,
     p_aud           IN VARCHAR2                 DEFAULT NULL,
     p_nbf_ts        IN timestamp with time zone DEFAULT NULL,
     p_iat_ts        IN timestamp with time zone DEFAULT SYSTIMESTAMP,
     p_exp_sec       IN PLS_INTEGER              DEFAULT NULL,
     p_jti           IN VARCHAR2                 DEFAULT NULL,
     p_other_claims  IN VARCHAR2                 DEFAULT NULL,
     p_signature_key IN RAW                      DEFAULT NULL )
     RETURN VARCHAR2
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_iss` | Optional "iss" (Issuer) claim. |
| `p_sub` | Optional "sub" (Subject) claim. |
| `p_aud` | Optional "aud" (Audience) claim. |
| `p_nbf_ts` | Optional "nbf" (Not Before) claim. |
| `p_iat_ts` | Optional "iat" (Issued At) claim (default systimestamp). |
| `p_exp_sec` | Optional "exp" (Expiration Time) claim, in seconds. The start time is taken from "nbf" , "iat" or current time. |
| `p_jti` | Optional "jti" (JWT ID) Claim. |
| `p_other_claims` | Optional raw JSON with additional claims. |
| `p_signature_key` | Optional MAC key for the signature. If not null, a 'HS256' signature is added. This requires Oracle Database 12c or higher. Other signature algorithms are not supported. |

## Returns

A VARCHAR2, the encoded token value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_jwt.ENCODE(
        p_iss => 'EXAMPLE',
        p_sub => 'EXAMPLE',
        p_aud => 'EXAMPLE',
        p_nbf_ts => sysdate,
        p_iat_ts => sysdate,
        p_exp_sec => 1,
        p_jti => 'EXAMPLE',
        p_other_claims => 'EXAMPLE',
        p_signature_key => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_jwt.ENCODE(
            p_iss => 'EXAMPLE',
            p_sub => 'EXAMPLE',
            p_aud => 'EXAMPLE',
            p_nbf_ts => sysdate,
            p_iat_ts => sysdate,
            p_exp_sec => 1,
            p_jti => 'EXAMPLE',
            p_other_claims => 'EXAMPLE',
            p_signature_key => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

