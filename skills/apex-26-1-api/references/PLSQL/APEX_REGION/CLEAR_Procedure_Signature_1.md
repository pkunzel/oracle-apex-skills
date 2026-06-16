# APEX_REGION.CLEAR Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.CLEAR-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This procedure clears region settings (classic report and interactive report pagination, interactive report report settings).

## When To Use

Use this page when code needs the `APEX_REGION.CLEAR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.CLEAR (
    p_application_id  IN  NUMBER DEFAULT apex_application.g_flow_id,
    p_page_id         IN  NUMBER,
    p_region_id       IN  NUMBER,
    p_component_id    IN  NUMBER DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application where the region is on. |
| `p_page_id` | ID of the page where the region is on. |
| `p_region_id` | ID of a specific region. |
| `p_component_id` | Region component ID to use. For interactive reports, this is the saved report ID within the current application page. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Resolve the region ID once, then clear pagination/report settings for that region.

```sql
declare
    l_region_id number;
begin
    l_region_id := apex_region.get_id(
        p_application_id => :APP_ID,
        p_page_id        => 10,
        p_dom_static_id  => 'orders_report');

    apex_region.clear(
        p_application_id => :APP_ID,
        p_page_id        => 10,
        p_region_id      => l_region_id);
end;
/
```
