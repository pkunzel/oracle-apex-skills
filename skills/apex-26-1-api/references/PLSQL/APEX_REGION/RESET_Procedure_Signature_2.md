# APEX_REGION.RESET Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.RESET-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This procedure resets region settings (such as classic report and interactive report pagination, classic report sort, interactive report and interactive grid report settings, and Region Display Selector tab selection) using static ID. Only report regions are supported at this time.

## When To Use

Use this page when code needs the `APEX_REGION.RESET` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.RESET (
    p_application_id  IN  NUMBER   DEFAULT apex_application.g_flow_id,
    p_page_id         IN  NUMBER,
    p_static_id       IN  VARCHAR2,
    p_component_id    IN  NUMBER   DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application where the region is on. |
| `p_page_id` | ID of the page where the region is on. |
| `p_static_id` | Static ID of a specific region. |
| `p_component_id` | Region component ID to use. For interactive reports and interactive grids, this is the saved report ID within the current application page. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_region.RESET(
        p_application_id => 1,
        p_page_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_component_id => 1
    );
end;
/
```

