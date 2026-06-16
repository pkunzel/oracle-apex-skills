# APEX_REGION.CLEAR Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.CLEAR-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This procedure clears region settings (classic report and interactive report pagination, interactive report report settings) using the region static ID.

## When To Use

Use this page when code needs the `APEX_REGION.CLEAR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.CLEAR (
    p_application_id  IN  NUMBER DEFAULT apex_application.g_flow_id,
    p_page_id         IN  NUMBER,
    p_static_id       IN  VARCHAR2,
    p_component_id    IN  NUMBER DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application that the region is on. |
| `p_page_id` | ID of the page that the region is on. |
| `p_static_id` | Static ID of a specific region. |
| `p_component_id` | Region component ID to use. For interactive reports, this is the saved report ID within the current application page. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the Static ID overload when the region has a stable Static ID.

```sql
begin
    apex_region.clear(
        p_application_id => :APP_ID,
        p_page_id        => 10,
        p_static_id      => 'orders_report');
end;
/
```
