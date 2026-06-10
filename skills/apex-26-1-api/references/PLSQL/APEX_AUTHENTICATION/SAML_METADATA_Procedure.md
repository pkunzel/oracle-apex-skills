# APEX_AUTHENTICATION.SAML_METADATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAML_METADATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure emits the SAML metadata for the given application or for the Oracle APEX instance.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.SAML_METADATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.SAML_METADATA (
    p_app_id    IN NUMBER   DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_app_id` | The ID of the application for which service provider metadata should be generated. If NULL or if the application's SAML authentication is configured to use instance mode, generate metadata using the SAML instance attributes. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.saml_metadata(
        p_app_id => :APP_ID
    );
end;
/
```
