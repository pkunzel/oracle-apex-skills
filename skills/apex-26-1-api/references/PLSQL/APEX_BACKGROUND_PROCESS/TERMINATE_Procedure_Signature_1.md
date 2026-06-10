# APEX_BACKGROUND_PROCESS.TERMINATE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.TERMINATE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BACKGROUND_PROCESS](../APEX_BACKGROUND_PROCESS.md)

## Purpose

This procedure terminates all executions of an execution chain.

## When To Use

Use this page when code needs the `APEX_BACKGROUND_PROCESS.TERMINATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BACKGROUND_PROCESS.TERMINATE (
    p_application_id    IN NUMBER DEFAULT apex_application.g_flow_id,
    p_process_id        IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application containing the process. |
| `p_process_id` | ID of the execution chain containing the executions to terminate. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_background_process.terminate(
        p_application_id => apex_application.g_flow_id,
        p_process_id     => :P50_PROCESS_ID
    );
end;
/
```

