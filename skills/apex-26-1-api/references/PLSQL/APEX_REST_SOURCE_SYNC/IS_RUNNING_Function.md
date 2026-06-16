# APEX_REST_SOURCE_SYNC.IS_RUNNING Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-IS_RUNNING-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This function determines whether synchronization for the given REST data source is currently running.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.IS_RUNNING` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.IS_RUNNING (
    p_application_id    IN  NUMBER DEFAULT apex_application.g_flow_id,
    p_module_static_id  IN  VARCHAR2 )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_module_static_id` | Static ID of the automation to disable. |

## Returns

TRUE if synchronization is currently running. FALSE otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Avoid starting a second synchronization while one is already running.

```sql
begin
    if not apex_rest_source_sync.is_running(
        p_module_static_id => 'ORDERS_API',
        p_application_id   => :APP_ID)
    then
        apex_rest_source_sync.synchronize_data(
            p_module_static_id  => 'ORDERS_API',
            p_run_in_background => true,
            p_application_id    => :APP_ID);
    end if;
end;
/
```
