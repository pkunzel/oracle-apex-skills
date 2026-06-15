# APEX_HUMAN_TASK.REFRESH_BUSINESS_ADMINS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REFRESH_BUSINESS_ADMINS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

Updates the business administrator of the task. This API cannot be invoked for tasks that are in EXPIRED , ERRORED , COMPLETED or CANCELLED state.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.REFRESH_BUSINESS_ADMINS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.REFRESH_BUSINESS_ADMINS (
    p_task_id            IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.refresh_business_admins(
        p_task_id => :P30_TASK_ID
    );
end;
/
```
