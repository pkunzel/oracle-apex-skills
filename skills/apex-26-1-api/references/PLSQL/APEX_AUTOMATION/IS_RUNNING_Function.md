# APEX_AUTOMATION.IS_RUNNING Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_IS_RUNNING-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This function determines whether a given automation is currently running.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.IS_RUNNING` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.IS_RUNNING (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation. |

## Returns

If TRUE , the automation is currently running.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_running boolean;
begin
    l_running := apex_automation.is_running(
        p_application_id => apex_application.g_flow_id,
        p_static_id      => 'SYNC_ORDERS'
    );

    if l_running then
        apex_debug.info('SYNC_ORDERS is already running.');
    end if;
end;
/
```

