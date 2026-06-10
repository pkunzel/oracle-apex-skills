# APEX_CREDENTIAL.CLEAR_TOKENS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_TOKENS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure clears all acquired tokens for the provided credential.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.CLEAR_TOKENS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE CLEAR_TOKENS( p_credential_static_id IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | The credential static ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.clear_tokens('OAUTH_PROVIDER');
end;
/
```

