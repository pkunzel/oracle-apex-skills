# APEX_APPLICATION_ADMIN.SET_IMAGE_PREFIX Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_IMAGE_PREFIX-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the application image prefix.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_IMAGE_PREFIX` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_IMAGE_PREFIX (
    p_application_id IN NUMBER,
    p_image_prefix   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_image_prefix` | The image prefix. Cannot be longer than 255 characters. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.set_image_prefix(
        p_application_id => 100,
        p_image_prefix => '/i/'
    );
end;
/
```
