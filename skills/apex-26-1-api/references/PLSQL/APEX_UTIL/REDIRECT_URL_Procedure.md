# APEX_UTIL.REDIRECT_URL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REDIRECT_URL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure calls owa_util.redirect_url to tell the browser to redirect to a new URL. Afterwards, it automatically calls apex_application.stop_apex_engine to cancel further processing of the Oracle APEX application.

## When To Use

Use this page when code needs the `APEX_UTIL.REDIRECT_URL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.REDIRECT_URL (
    p_url               IN VARCHAR2,
    p_reset_htp_buffer  IN BOOLEAN  DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_url` | The URL the browser requests. |
| `p_reset_htp_buffer` | Set to TRUE to reset the HTP buffer to make sure the browser understands the redirect to the new URL and is not confused by data that is already written to the HTP buffer. Set to FALSE if the application has its own cookie to use in the response. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.REDIRECT_URL(
        p_url => 'EXAMPLE',
        p_reset_htp_buffer => true
    );
end;
/
```

