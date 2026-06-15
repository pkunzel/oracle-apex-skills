# APEX_IR.RESET_REPORT Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure resets report settings to the developer-defined default settings using the report Static ID.

## When To Use

Use this page when code needs the `APEX_IR.RESET_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.RESET_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_static_id` | The interactive report region Static ID. |
| `p_report_static_id` | The saved report Static ID within the current application page. If p_report_static_id is NULL, it resets the last viewed report settings. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Reset a saved report by region and report static ID.

```sql
begin
    apex_ir.reset_report(
        p_page_id          => 10,
        p_region_static_id => 'orders_ir',
        p_report_static_id => 'primary'
    );
end;
/
```
