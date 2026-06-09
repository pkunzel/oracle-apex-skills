# APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SAVED_REPORT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

The REMOVE_SAVED_REPORT procedure removes a specific user's saved interactive report settings for a particular application.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORT (
    p_application_id     IN NUMBER,
    p_report_id          IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application for which to remove user saved interactive report information. |
| `p_report_id` | The ID of the saved user interactive report to be removed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.REMOVE_SAVED_REPORT(
        p_application_id => 1,
        p_report_id => 1
    );
end;
/
```

