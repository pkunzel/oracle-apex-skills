# APEX_JWT

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JWT.html)

Status: curated first-pass reference.

## Purpose

`APEX_JWT` encodes, decodes, and validates JSON Web Tokens. It supports unsigned tokens and HS256-signed tokens. The decoded token is returned as a record containing header, payload, and signature JSON/base64 components.

Use it for compact claims exchanged between trusted APEX components or integrations where HS256 is sufficient.

## API Surface

| Need | Members |
| --- | --- |
| Create token | `ENCODE` |
| Decode token | `DECODE` |
| Validate claims/timestamps | `VALIDATE` |
| Decoded record | `t_token` |

## Create Signed Token

```sql
declare
    l_token varchar2(32767);
    l_key   raw(32767) := utl_raw.cast_to_raw('replace-with-strong-shared-secret');
begin
    l_token := apex_jwt.encode(
        p_iss           => 'apex-app-100',
        p_sub           => :APP_USER,
        p_aud           => 'orders-api',
        p_exp_sec       => 300,
        p_other_claims  => '{"scope":"orders:read"}',
        p_signature_key => l_key);

    apex_debug.info('JWT generated for %s', :APP_USER);
end;
/
```

Keep signing keys in credentials or protected configuration, not in source code.

## Decode And Validate

```sql
declare
    l_token apex_jwt.t_token;
    l_key   raw(32767) := utl_raw.cast_to_raw('replace-with-strong-shared-secret');
begin
    l_token := apex_jwt.decode(
        p_value         => :P10_TOKEN,
        p_signature_key => l_key);

    apex_jwt.validate(
        p_token          => l_token,
        p_iss            => 'apex-app-100',
        p_aud            => 'orders-api',
        p_leeway_seconds => 30);

    apex_json.parse(l_token.payload);
    apex_debug.info('JWT subject: %s', apex_json.get_varchar2('sub'));
end;
/
```

`VALIDATE` raises an error if required claims or time checks fail.

## Unsigned Decode

```sql
declare
    l_token apex_jwt.t_token;
begin
    l_token := apex_jwt.decode(:P10_UNSIGNED_TOKEN);

    -- Use only for non-trust decisions such as inspecting a local diagnostic token.
    apex_debug.info('JWT payload: %s', l_token.payload);
end;
/
```

Do not authorize access from unsigned or unvalidated token content.

## Safety Notes

- Prefer signed tokens for trust decisions. Unsigned token content is just user input.
- `APEX_JWT` supports HS256 for signatures; use an external JOSE/JWT library or identity service when RSA/ECDSA algorithms are required.
- Keep token lifetimes short with `p_exp_sec`.
- Validate expected issuer and audience.
- Add leeway only for clock skew, not as a long grace period.
- Never log full tokens, signing keys, or sensitive claims.
- Treat `p_other_claims` as raw JSON and construct it with JSON APIs when values are dynamic.

## Related APIs

- [APEX_CREDENTIAL](APEX_CREDENTIAL.md) for secret-backed configuration.
- [APEX_JSON](APEX_JSON.md) for claim parsing and JSON construction.
- [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md) for authentication flows.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| t_token Record | topic | [local](APEX_JWT/t_token_Record.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/T_TOKEN.html) |
| ENCODE Function | function | [local](APEX_JWT/ENCODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENCODE.html) |
| DECODE Function | function | [local](APEX_JWT/DECODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DECODE.html) |
| VALIDATE Procedure | procedure | [local](APEX_JWT/VALIDATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE.html) |

<!-- END GENERATED MEMBER LINKS -->
