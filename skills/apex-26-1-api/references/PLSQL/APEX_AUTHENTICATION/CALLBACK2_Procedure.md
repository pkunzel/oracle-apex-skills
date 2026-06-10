# APEX_AUTHENTICATION.CALLBACK2 Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK2-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure is an alternative to CALLBACK Procedure .

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.CALLBACK2` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.CALLBACK2 (
    --
    -- Custom callback parameters
    --
    p_session_id        IN NUMBER   DEFAULT NULL,
    p_app_id            IN NUMBER   DEFAULT NULL,
    p_ajax_identifier   IN VARCHAR2 DEFAULT NULL,
    p_page_id           IN NUMBER   DEFAULT NULL,
    p_x01               IN VARCHAR2 DEFAULT NULL,
    p_x02               IN VARCHAR2 DEFAULT NULL,
    p_x03               IN VARCHAR2 DEFAULT NULL,
    p_x04               IN VARCHAR2 DEFAULT NULL,
    p_x05               IN VARCHAR2 DEFAULT NULL,
    p_x06               IN VARCHAR2 DEFAULT NULL,
    p_x07               IN VARCHAR2 DEFAULT NULL,
    p_x08               IN VARCHAR2 DEFAULT NULL,
    p_x09               IN VARCHAR2 DEFAULT NULL,
    p_x10               IN VARCHAR2 DEFAULT NULL,
    --
    -- OAuth2-related parameters
    --
    state               IN VARCHAR2 DEFAULT NULL,
    code                IN VARCHAR2 DEFAULT NULL,
    error               IN VARCHAR2 DEFAULT NULL,
    error_description   IN VARCHAR2 DEFAULT NULL,
    error_uri           IN VARCHAR2 DEFAULT NULL,
    error_reason        IN VARCHAR2 DEFAULT NULL,
    error_code          IN VARCHAR2 DEFAULT NULL,
    error_message       IN VARCHAR2 DEFAULT NULL,
    authuser            IN VARCHAR2 DEFAULT NULL,
    session_state       IN VARCHAR2 DEFAULT NULL,
    prompt              IN VARCHAR2 DEFAULT NULL,
    hd                  IN VARCHAR2 DEFAULT NULL,
    scope               IN VARCHAR2 DEFAULT NULL,
    realmID             IN VARCHAR2 DEFAULT NULL )
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.callback2(
        p_session_id      => :APP_SESSION,
        p_app_id          => :APP_ID,
        p_page_id         => :APP_PAGE_ID,
        p_x01             => :APP_SESSION,
        p_x02             => :P101_RETURN_URL,
        state             => :REQUEST_STATE,
        code              => :REQUEST_CODE,
        error             => :REQUEST_ERROR,
        error_description => :REQUEST_ERROR_DESCRIPTION
    );
end;
/
```
