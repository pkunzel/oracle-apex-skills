# APEX_IG.CHANGE_REPORT_OWNER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CHANGE_REPORT_OWNER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IG](../APEX_IG.md)

## Purpose

This procedure changes the owner of a saved interactive grid report using a report ID. This procedure cannot change the owner of default interactive grid report.

## When To Use

Use this page when code needs the `APEX_IG.CHANGE_REPORT_OWNER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IG.CHANGE_REPORT_OWNER (
    p_application_id IN NUMBER DEFAULT apex_application.g_flow_id,
    p_report_id      IN NUMBER,
    p_old_owner      IN VARCHAR2,
    p_new_owner      IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID containing the interactive grid. If p_application_id is NULL, it defaults to the application ID in apex_application.g_flow_id . |
| `p_report_id` | The saved report ID within the current application page. |
| `p_old_owner` | The previous owner name to change from (case-sensitive). The owner needs to be a valid login user accessing the report. |
| `p_new_owner` | The new owner name to change to (case-sensitive). The owner must be a valid login user accessing the report. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ig.CHANGE_REPORT_OWNER(
        p_application_id => 1,
        p_report_id => 1,
        p_old_owner => 'EXAMPLE',
        p_new_owner => 'EXAMPLE'
    );
end;
/
```

