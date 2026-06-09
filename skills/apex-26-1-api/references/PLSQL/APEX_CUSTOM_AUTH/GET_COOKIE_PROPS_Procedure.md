# APEX_CUSTOM_AUTH.GET_COOKIE_PROPS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_COOKIE_PROPS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This procedure obtains the properties of the session cookie used in the current authentication scheme for the specified application. These properties can be viewed directly in the App Builder by viewing the authentication scheme cookie attributes.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.GET_COOKIE_PROPS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.GET_COOKIE_PROPS (
    p_app_id                       IN  NUMBER,
    p_cookie_name                  OUT VARCHAR2,
    p_cookie_path                  OUT VARCHAR2,
    p_cookie_domain                OUT VARCHAR2
    p_secure		         OUT BOOLEAN )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_app_id` | An application ID in the current workspace. |
| `p_cookie_name` | The cookie name. |
| `p_cookie_path` | The cookie path. |
| `p_cookie_domain` | The cookie domain. |
| `p_secure` | Flag to set secure property of cookie. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_custom_auth.GET_COOKIE_PROPS(
        p_app_id => 1,
        p_cookie_name => 'EXAMPLE',
        p_cookie_path => 'EXAMPLE',
        p_cookie_domain => 'EXAMPLE',
        p_secure => true
    );
end;
/
```

