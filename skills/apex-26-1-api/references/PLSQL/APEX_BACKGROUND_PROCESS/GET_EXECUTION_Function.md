# APEX_BACKGROUND_PROCESS.GET_EXECUTION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_EXECUTION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BACKGROUND_PROCESS](../APEX_BACKGROUND_PROCESS.md)

## Purpose

This function returns the current status of a specific execution ID.

## When To Use

Use this page when code needs the `APEX_BACKGROUND_PROCESS.GET_EXECUTION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BACKGROUND_PROCESS.GET_EXECUTION (
    p_application_id     IN NUMBER DEFAULT apex_application.g_flow_id,
    p_execution_id       IN NUMBER )
    RETURN t_execution;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application containing the process. |
| `p_execution_id` | ID of the execution to get status for. |

## Returns

This function returns t_execution record with current status information for this execution.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_EXECUTION;
begin
    l_result := apex_background_process.GET_EXECUTION(
        p_application_id => 1,
        p_execution_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

