# APEX_APPLICATION_ADMIN.SET_AUTHENTICATION_SCHEME Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_AUTHENTICATION_SCHEME-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_AUTHENTICATION_SCHEME` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_AUTHENTICATION_SCHEME (
    p_application_id IN NUMBER,
    p_name           IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_name` | The name of the authentication scheme to be activated. The authentication scheme must exist in the application. If p_name is null, the active authentication scheme remains unchanged. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.SET_AUTHENTICATION_SCHEME(
        p_application_id => 1,
        p_name => 'EXAMPLE'
    );
end;
/
```

