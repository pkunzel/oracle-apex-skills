# APEX_WEB_SERVICE.OAUTH_SET_TOKEN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_SET_TOKEN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure sets the OAuth access token to be used in subsequent MAKE_REST_REQUEST calls. This procedure can be used to set a token which was obtained by different means than with OAUTH_AUTHENTICATE (such as custom code).

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.OAUTH_SET_TOKEN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.OAUTH_SET_TOKEN (
    p_token   IN VARCHAR2,
    p_expires IN DATE DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_token` | The OAuth access token to be used by MAKE_REST_REQUEST calls. |
| `p_expires` | (Optional) The token expiry date. If NULL, no expiration date is set. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_web_service.OAUTH_SET_TOKEN(
        p_token => 'EXAMPLE',
        p_expires => sysdate
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_web_service.OAUTH_SET_TOKEN(
            p_token => 'EXAMPLE',
            p_expires => sysdate
        );
end;
/
```

