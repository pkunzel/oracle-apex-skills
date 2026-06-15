# APEX_JWT.t_token Record

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/T_TOKEN.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JWT](../APEX_JWT.md)

## Purpose

A t_token record contains the decoded parts of a JSON Web Token.

## When To Use

Use this page when code needs the `APEX_JWT.t_token Record` topic. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
type t_token is record (
    header      VARCHAR2(32767),
    payload     VARCHAR2(32767),
    signature   VARCHAR2(32767) );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `header` | The Javascript Object Signing and Encryption (JOSE) header contains cryptographic parameters. |
| `payload` | The claims which the token asserts. |
| `signature` | The signature of header and payload. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

The record returned by DECODE stores the JOSE header, claims payload, and signature as text.

```sql
declare
    l_key   raw(32) := hextoraw('00112233445566778899AABBCCDDEEFF');
    l_token apex_jwt.t_token;
begin
    l_token := apex_jwt.decode(
        p_value         => :P0_ID_TOKEN,
        p_signature_key => l_key
    );

    apex_debug.info('JWT header: %s', l_token.header);
    apex_debug.info('JWT claims: %s', l_token.payload);
end;
/
```
