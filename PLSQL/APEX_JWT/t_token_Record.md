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

## Example

This member is a topic, constants section, data type section, or conceptual page. Use the documented definitions from the source link directly in the calling API examples.

