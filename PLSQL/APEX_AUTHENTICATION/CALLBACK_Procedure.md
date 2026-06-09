# APEX_AUTHENTICATION.CALLBACK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure is the landing resource for external login pages. Call this procedure directly from the browser.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.CALLBACK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.CALLBACK (
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

## Parameters

| Parameter | Description |
| --- | --- |
| `p_session_id` | The Oracle APEX session identifier. |
| `p_app_id` | The database application identifier. |
| `p_page_id` | Optional page identifier. |
| `p_ajax_identifier` | The system generated Ajax identifier. See GET_AJAX_IDENTIFIER Function . |
| `p_x01 through p_x10` | Optional parameters that the external login passes to the authentication plugin. |
| `state` | OAuth2. |
| `code` | OAuth2. |
| `error` | OAuth2. |
| `error_description` | OAuth2. |
| `error_uri` | OAuth2. |
| `error_reason` | OAuth2. |
| `error_code` | OAuth2. |
| `error_message` | OAuth2. |
| `authuser` | OAuth2. |
| `session_state` | OAuth2. |
| `prompt` | OAuth2. |
| `hd` | OAuth2. |
| `scope` | OAuth2. |
| `realmID` | OAuth2. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.CALLBACK(
        p_session_id => 1,
        p_app_id => 1,
        p_ajax_identifier => 'EXAMPLE',
        p_page_id => 1,
        p_x01 => 'EXAMPLE',
        p_x02 => 'EXAMPLE',
        p_x03 => 'EXAMPLE',
        p_x04 => 'EXAMPLE',
        p_x05 => 'EXAMPLE',
        p_x06 => 'EXAMPLE',
        p_x07 => 'EXAMPLE',
        p_x08 => 'EXAMPLE',
        p_x09 => 'EXAMPLE',
        p_x10 => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_authentication.CALLBACK(
            p_session_id => 1,
            p_app_id => 1,
            p_ajax_identifier => 'EXAMPLE',
            p_page_id => 1,
            p_x01 => 'EXAMPLE',
            p_x02 => 'EXAMPLE',
            p_x03 => 'EXAMPLE',
            p_x04 => 'EXAMPLE',
            p_x05 => 'EXAMPLE',
            p_x06 => 'EXAMPLE',
            p_x07 => 'EXAMPLE',
            p_x08 => 'EXAMPLE',
            p_x09 => 'EXAMPLE',
            p_x10 => 'EXAMPLE'
        );
end;
/
```

