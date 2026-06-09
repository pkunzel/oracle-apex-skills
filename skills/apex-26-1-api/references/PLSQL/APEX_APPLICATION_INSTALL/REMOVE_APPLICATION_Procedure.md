# APEX_APPLICATION_INSTALL.REMOVE_APPLICATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.REMOVE_APPLICATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure removes an application from a workspace. Use the APEX_APPLICATION_INSTALL.SET_% procedures to configure parameters.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.REMOVE_APPLICATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.REMOVE_APPLICATION (
    p_application_id IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.REMOVE_APPLICATION(
        p_application_id => 1
    );
end;
/
```

