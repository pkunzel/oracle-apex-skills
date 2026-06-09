# APEX_REST_SOURCE_SYNC.DYNAMIC_SYNCHRONIZE_DATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DYNAMIC_SYNCHRONIZE_DATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This procedure executes a dynamic data synchronization to the local table based on the provided parameters. The predefined synchronization steps are not executed.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.DYNAMIC_SYNCHRONIZE_DATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.DYNAMIC_SYNCHRONIZE_DATA (
    p_module_static_id          IN VARCHAR2,
    --
    p_sync_static_id            IN VARCHAR2,
    p_sync_external_filter_expr IN VARCHAR2               DEFAULT NULL,
    p_sync_parameters           IN apex_exec.t_parameters DEFAULT apex_exec.c_empty_parameters,
    --
    p_application_id            IN NUMBER                 DEFAULT apex_application.g_flow_id );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_sync_static_id` | Static ID for this dynamic synchronization. |
| `p_sync_external_filter_expr` | External filter expression to use for this synchronization. |
| `p_sync_parameters` | REST Data Source parameters to use for this synchronization. |
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
    apex_rest_source_sync.DYNAMIC_SYNCHRONIZE_DATA(
        p_module_static_id => 'EXAMPLE_STATIC_ID',
        p_sync_static_id => 'EXAMPLE_STATIC_ID',
        p_sync_external_filter_expr => 'EXAMPLE',
        p_sync_parameters => null,
        p_application_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_rest_source_sync.DYNAMIC_SYNCHRONIZE_DATA(
            p_module_static_id => 'EXAMPLE_STATIC_ID',
            p_sync_static_id => 'EXAMPLE_STATIC_ID',
            p_sync_external_filter_expr => 'EXAMPLE',
            p_sync_parameters => null,
            p_application_id => 1
        );
end;
/
```

