# APEX_HUMAN_TASK.RENEW_TASK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.RENEW_TASK-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function reactivates Expired or Errored Tasks. Tasks that have been transitioned to state EXPIRED or ERRORED can be renewed by a Business Administrator.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.RENEW_TASK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.RENEW_TASK (
    p_task_id       IN NUMBER,
    p_priority      IN INTEGER  DEFAULT NULL,
    p_due_date      IN timestamp with time zone )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_priority` | The priority of the renewed Task. |
| `p_due_date` | The due date for the renewed Task. |

## Returns

This function returns the ID of the renewed task.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_renewed_task_id number;
begin
    l_renewed_task_id := apex_human_task.renew_task(
        p_task_id  => :P30_TASK_ID,
        p_priority => apex_human_task.c_task_priority_high,
        p_due_date => systimestamp + interval '3' day
    );

    :P30_RENEWED_TASK_ID := l_renewed_task_id;
end;
/
```
