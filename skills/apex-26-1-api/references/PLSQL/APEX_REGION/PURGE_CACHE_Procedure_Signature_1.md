# APEX_REGION.PURGE_CACHE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.PURGE_CACHE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This procedure purges the region cache of the specified application, page, and region.

## When To Use

Use this page when code needs the `APEX_REGION.PURGE_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.PURGE_CACHE (
    p_application_id       IN NUMBER DEFAULT apex.g_flow_id,
    p_page_id              IN NUMBER DEFAULT NULL,
    p_region_id            IN NUMBER DEFAULT NULL,
    p_current_session_only IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application where the region caches should be purged. Defaults to the current application. |
| `p_page_id` | ID of the page where the region caches should be purged. If no value is specified (default), all regions of the application are purged. |
| `p_region_id` | ID of a specific region on a page. If no value is specified, all regions of the specified page are purged. |
| `p_current_session_only` | Specify true if you only want to purge entries that where saved for the current session. Defaults to FALSE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Purge a specific cached region by numeric region ID after changing data that feeds it.

```sql
declare
    l_region_id number;
begin
    update orders
       set status = :P10_STATUS
     where order_id = :P10_ORDER_ID;

    l_region_id := apex_region.get_id(
        p_application_id => :APP_ID,
        p_page_id        => 10,
        p_dom_static_id  => 'orders_report');

    apex_region.purge_cache(
        p_application_id       => :APP_ID,
        p_page_id              => 10,
        p_region_id            => l_region_id,
        p_current_session_only => true);
end;
/
```
