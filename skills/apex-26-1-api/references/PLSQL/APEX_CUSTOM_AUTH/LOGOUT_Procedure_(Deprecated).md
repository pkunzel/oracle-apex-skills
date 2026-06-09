# APEX_CUSTOM_AUTH.LOGOUT Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGOUT-Procedure-DEPRECATED.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.LOGOUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_CUSTOM_AUTH.LOGOUT (
    p_this_app              IN VARCHAR2 DEFAULT NULL,
    p_next_app_page_sess    IN VARCHAR2 DEFAULT NULL,
    p_next_url              IN VARCHAR2 DEFAULT NULL )
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
    apex_custom_auth.LOGOUT(
        p_this_app => 'EXAMPLE',
        p_next_app_page_sess => 'EXAMPLE',
        p_next_url => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_custom_auth.LOGOUT(
            p_this_app => 'EXAMPLE',
            p_next_app_page_sess => 'EXAMPLE',
            p_next_url => 'EXAMPLE'
        );
end;
/
```

