# APEX_REST_SOURCE_SYNC.SYNCHRONIZE_DATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCHRONIZE_DATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This procedure executes the configured data synchronization to the local table. The SYNCHRONIZE_DATA procedure requires an APEX session context.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.SYNCHRONIZE_DATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.SYNCHRONIZE_DATA (
    p_module_static_id      IN VARCHAR2,
    p_run_in_background     IN BOOLEAN  DEFAULT FALSE,
    p_application_id        IN NUMBER   DEFAULT {current application id} );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_run_in_background` | If TRUE , synchronization runs in the background as a one-time DBMS_SCHEDULER job. |
| `p_application_id` | ID of the application containing the REST Data Source. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_rest_source_sync.SYNCHRONIZE_DATA(
        p_module_static_id => 'EXAMPLE_STATIC_ID',
        p_run_in_background => true,
        p_application_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_rest_source_sync.SYNCHRONIZE_DATA(
            p_module_static_id => 'EXAMPLE_STATIC_ID',
            p_run_in_background => true,
            p_application_id => 1
        );
end;
/
```

