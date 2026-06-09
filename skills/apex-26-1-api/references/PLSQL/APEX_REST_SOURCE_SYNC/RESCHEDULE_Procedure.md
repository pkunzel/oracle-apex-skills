# APEX_REST_SOURCE_SYNC.RESCHEDULE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-RESCHEDULE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This procedure sets the next scheduled execution timestamp of the synchronization.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.RESCHEDULE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.RESCHEDULE (
    p_application_id    IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_module_static_id  IN VARCHAR2,
    p_next_run_at       IN timestamp with time zone DEFAULT systimestamp );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | (Optional): The application ID. |
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_next_run_at` | Timestamp to execute the next synchronization. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_rest_source_sync.RESCHEDULE(
        p_application_id => 1,
        p_module_static_id => 'EXAMPLE_STATIC_ID',
        p_next_run_at => sysdate
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_rest_source_sync.RESCHEDULE(
            p_application_id => 1,
            p_module_static_id => 'EXAMPLE_STATIC_ID',
            p_next_run_at => sysdate
        );
end;
/
```

