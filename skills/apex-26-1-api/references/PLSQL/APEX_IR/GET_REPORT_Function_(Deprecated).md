# APEX_IR.GET_REPORT Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REPORT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_IR.GET_REPORT` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_IR.GET_REPORT(
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER   DEFAULT NULL,
    p_view      IN VARCHAR2 DEFAULT c_view_report )
    RETURN t_report;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region ID. |
| `p_report_id` | The saved report ID within the current application page. If p_report_id is NULL, retrieves last viewed report query. |
| `p_view` | The view type available for the report. The values can be APEX_IR.C_VIEW_REPORT , APEX_IR.C_VIEW_GROUPBY , or APEX_IR.C_VIEW_PIVOT . If p_view is NULL, retrieves the view currently used by the report. If the p_view passed does not exist for the current report, an error raises. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy code can still request the runtime query metadata, but new code should prefer supported report APIs where possible.

```sql
declare
    l_report apex_ir.t_report;
begin
    l_report := apex_ir.get_report(
        p_page_id   => 10,
        p_region_id => 123456789,
        p_report_id => 987654321,
        p_view      => apex_ir.c_view_report
    );
end;
/
```
