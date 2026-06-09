# APEX_JWT.DECODE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DECODE.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JWT](../APEX_JWT.md)

## Purpose

This function decodes a raw token value.

## When To Use

Use this page when code needs the `APEX_JWT.DECODE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JWT.DECODE (
    p_value         IN VARCHAR2,
    p_signature_key IN RAW      DEFAULT NULL )
RETURN t_token;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | A raw token value contains 3 base64-encoded parts, which are separated by '.' . The parts are header, payload and signature. |
| `p_signature_key` | If not null, validate p_value 's signature using this key and the algorithm specified in header. The algorithms 'HS256' and 'none' are supported, but 'HS256' requires 12c or higher. |

## Returns

A t_token .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_TOKEN;
begin
    l_result := apex_jwt.DECODE(
        p_value => 'EXAMPLE',
        p_signature_key => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

