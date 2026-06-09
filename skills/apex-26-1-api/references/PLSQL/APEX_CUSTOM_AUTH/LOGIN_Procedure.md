# APEX_CUSTOM_AUTH.LOGIN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

Also referred to as the Login API, this procedure performs authentication and session registration.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.LOGIN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.LOGIN (
    p_uname         IN  VARCHAR2  DEFAULT NULL,
    p_password      IN  VARCHAR2  DEFAULT NULL,
    p_session_id    IN  VARCHAR2  DEFAULT NULL,
    p_app_page      IN  VARCHAR2  DEFAULT NULL,
    p_entry_point   IN  VARCHAR2  DEFAULT NULL,
    p_preserve_case IN  BOOLEAN   DEFAULT FALSE )
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
    apex_custom_auth.LOGIN(
        p_uname => 'EXAMPLE',
        p_password => 'EXAMPLE',
        p_session_id => 'EXAMPLE',
        p_app_page => 'EXAMPLE',
        p_entry_point => 'EXAMPLE',
        p_preserve_case => true
    );
end;
/
```

