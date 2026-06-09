# APEX_IG.RESET_REPORT Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IG](../APEX_IG.md)

## Purpose

This procedure resets report settings to the developer defined default settings using the report Static ID.

## When To Use

Use this page when code needs the `APEX_IG.RESET_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IG.RESET_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_static_id` | The interactive grid region Static ID. |
| `p_report_static_id` | The saved interactive grid report Static ID within the current application page. If p_report_static_id is NULL, it resets the last viewed report's settings. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ig.RESET_REPORT(
        p_page_id => 1,
        p_region_static_id => 'EXAMPLE_STATIC_ID',
        p_report_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

