# APEX_AUTOMATION.GET_LAST_RUN_TIMESTAMP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_LAST_RUN_TIMESTAMP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This function retrieves information about the latest automation run.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.GET_LAST_RUN_TIMESTAMP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.GET_LAST_RUN_TIMESTAMP (
    p_application_id         IN NUMBER   DEFAULT {current application id},
    p_static_id              IN VARCHAR2 )
    RETURN timestamp with time zone;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation to execute. |

## Returns

Return Description * Timestamp of the last successful automation run.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_last_run_at timestamp with time zone;
begin
    l_last_run_at := apex_automation.get_last_run_timestamp(
        p_application_id => apex_application.g_flow_id,
        p_static_id      => 'SYNC_ORDERS'
    );

    apex_debug.info('SYNC_ORDERS last ran at %s', l_last_run_at);
end;
/
```

