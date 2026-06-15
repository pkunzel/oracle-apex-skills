# APEX_IR.CLONE_REPORT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLONE_REPORT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function clones a user-saved report and returns a new report ID.

## When To Use

Use this page when code needs the `APEX_IR.CLONE_REPORT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.CLONE_REPORT (
    p_report_id       IN NUMBER,
    p_new_name        IN VARCHAR2,
    p_new_description IN VARCHAR2 DEFAULT NULL,
    p_new_owner       IN VARCHAR2 DEFAULT apex_application.g_user,
    p_new_is_public   IN BOOLEAN  DEFAULT FALSE,
    p_replace_report  IN BOOLEAN  DEFAULT TRUE )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_report_id` | The source report ID to clone. |
| `p_new_name` | The new report name. |
| `p_new_description` | The new report description. |
| `p_new_owner` | The case-sensitive new owner of the report. If not passed, current user is the owner. |
| `p_new_is_public` | If new report is Public. If not passed, clones as Private report. |
| `p_replace_report` | If TRUE (default), report will be replaced if exists. If FALSE , an error raises if a report with the same name and owner already exists. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Clone a saved report and capture the new report ID.

```sql
declare
    l_new_report_id number;
begin
    l_new_report_id := apex_ir.clone_report(
        p_report_id       => 987654321,
        p_new_name        => 'Open Orders - Manager Review',
        p_new_description => 'Filtered report used by the order management team.',
        p_new_owner       => :APP_USER,
        p_new_is_public   => false,
        p_replace_report  => true
    );

    apex_util.set_session_state('P10_CLONED_REPORT_ID', l_new_report_id);
end;
/
```
