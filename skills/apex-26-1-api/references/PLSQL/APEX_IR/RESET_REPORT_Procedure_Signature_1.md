# APEX_IR.RESET_REPORT Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure resets report settings to the developer defined default settings using the report ID.

## When To Use

Use this page when code needs the `APEX_IR.RESET_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.RESET_REPORT (
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region ID. |
| `p_report_id` | The saved report ID within the current application page. If p_report_id is NULL, it resets the last viewed report settings. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ir.RESET_REPORT(
        p_page_id => 1,
        p_region_id => 1,
        p_report_id => 1
    );
end;
/
```

