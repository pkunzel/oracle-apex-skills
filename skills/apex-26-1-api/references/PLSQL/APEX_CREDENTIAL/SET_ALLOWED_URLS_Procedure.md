# APEX_CREDENTIAL.SET_ALLOWED_URLS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_ALLOWED_URLS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure sets a list of URLs that can be used for this credential.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_ALLOWED_URLS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE SET_ALLOWED_URLS (
    p_credential_static_id  IN VARCHAR2,
    p_allowed_urls          IN apex_t_varchar2,
    p_client_secret         IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | The credential static ID. |
| `p_allowed_urls` | List of URLs (as APEX_T_VARCHAR2 ) that these credentials can access. |
| `p_client_secret` | Client Secret. If allowed URLs are changed, this must be provided again. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.SET_ALLOWED_URLS(
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_allowed_urls => 'EXAMPLE',
        p_client_secret => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_credential.SET_ALLOWED_URLS(
            p_credential_static_id => 'EXAMPLE_STATIC_ID',
            p_allowed_urls => 'EXAMPLE',
            p_client_secret => 'EXAMPLE'
        );
end;
/
```

