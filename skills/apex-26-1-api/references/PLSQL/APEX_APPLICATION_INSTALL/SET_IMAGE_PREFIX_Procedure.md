# APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the image prefix of the import application. Most Oracle APEX instances use the default image prefix of /i/.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX(
    p_image_prefix  IN VARCHAR2);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_image_prefix` | The image prefix. It can be a fully qualified domain, like a CDN or another web server, or just a path. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_IMAGE_PREFIX(
        p_image_prefix => 'EXAMPLE'
    );
end;
/
```

