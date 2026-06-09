# APEX_IG.DELETE_REPORT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-DELETE_REPORT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IG](../APEX_IG.md)

## Purpose

This procedure deletes a saved interactive grid report. It deletes a specific saved report in the current logged in workspace and application.

## When To Use

Use this page when code needs the `APEX_IG.DELETE_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IG.DELETE_REPORT (
    p_application_id IN NUMBER DEFAULT apex_application.g_flow_id,    
    p_report_id      IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID containing the interactive grid. If p_application_id is NULL, it defaults to the application ID in apex_application.g_flow_id . |
| `p_report_id` | Report ID to delete within the current Oracle APEX application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ig.DELETE_REPORT(
        p_application_id => 1,
        p_report_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ig.DELETE_REPORT(
            p_application_id => 1,
            p_report_id => 1
        );
end;
/
```

