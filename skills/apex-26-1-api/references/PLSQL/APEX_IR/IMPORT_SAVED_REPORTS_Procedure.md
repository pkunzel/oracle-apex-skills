# APEX_IR.IMPORT_SAVED_REPORTS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IMPORT_SAVED_REPORTS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure imports saved reports into an app in the current workspace. Supports importing default or user-saved reports.

## When To Use

Use this page when code needs the `APEX_IR.IMPORT_SAVED_REPORTS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.IMPORT_SAVED_REPORTS (
    p_export_content       IN CLOB,
    p_credential_static_id IN VARCHAR2,
    p_replace_report       IN BOOLEAN  DEFAULT TRUE,
    p_new_owner            IN VARCHAR2 DEFAULT apex_application.g_user,
    p_new_application_id   IN NUMBER   DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_export_content` | The signed and base64-encoded report export JSON. |
| `p_credential_static_id` | The Key Pair authentication credential static ID. The same credential used to sign the export content is used to verify. |
| `p_replace_report` | If TRUE (default), report is replaced if exists. |
| `p_new_owner` | The case-sensitive new owner of the reports. Only non-default reports can be overwritten with p_new_owner . |
| `p_new_application_id` | The new application ID of the reports. The reports are imported to the application containing valid interactive report regions. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ir.IMPORT_SAVED_REPORTS(
        p_export_content => to_clob('Example text'),
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_replace_report => true,
        p_new_owner => 'EXAMPLE',
        p_new_application_id => 1
    );
end;
/
```

