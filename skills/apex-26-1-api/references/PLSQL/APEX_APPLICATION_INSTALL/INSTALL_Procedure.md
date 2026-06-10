# APEX_APPLICATION_INSTALL.INSTALL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSTALL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure installs an application. Use the APEX_APPLICATION_INSTALL.SET% procedures to configure installation parameters.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.INSTALL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE INSTALL (
    p_source             IN apex_t_export_files    DEFAULT NULL,
    p_overwrite_existing IN BOOLEAN                DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source` | The source code, a table of (name, contents) with a single record for normal Oracle APEX applications or multiple records for applications that were split when exporting. Passing multiple applications is not supported. If null (default), imports the source that was previously passed to GET_INFO . |
| `p_overwrite_existing` | If FALSE (default), raises an error instead of overwriting an existing application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.install(
        p_overwrite_existing => true
    );
end;
/
```
