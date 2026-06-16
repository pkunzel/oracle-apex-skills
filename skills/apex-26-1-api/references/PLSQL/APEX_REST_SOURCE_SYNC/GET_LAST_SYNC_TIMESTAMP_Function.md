# APEX_REST_SOURCE_SYNC.GET_LAST_SYNC_TIMESTAMP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_SYNC_TIMESTAMP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This function returns the timestamp of the last successful sync operation.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.GET_LAST_SYNC_TIMESTAMP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.GET_LAST_SYNC_TIMESTAMP (
    p_module_static_id  IN VARCHAR2,
    p_application_id    IN NUMBER   DEFAULT {current application id} )
    RETURN timestamp with time zone;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_application_id` | ID of the application containing the REST Data Source. |

## Returns

This function returns the timestamp of the last successful sync operation.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Read the last sync timestamp and decide whether a manual sync should be offered.

```sql
declare
    l_last_sync timestamp with time zone;
begin
    l_last_sync := apex_rest_source_sync.get_last_sync_timestamp(
        p_module_static_id => 'ORDERS_API',
        p_application_id   => :APP_ID);

    if l_last_sync < systimestamp - interval '1' hour then
        apex_debug.warn('ORDERS_API sync is older than one hour.');
    end if;
end;
/
```
