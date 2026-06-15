# APEX_HUMAN_TASK.SET_TASK_PRIORITY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SET_TASK_PRIORITY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure sets the priority of a task.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.SET_TASK_PRIORITY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.SET_TASK_PRIORITY (
    p_task_id                IN NUMBER,
    p_priority               IN INTEGER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_priority` | The task priority (between 1 and 5, 1 being the highest). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.set_task_priority(
        p_task_id  => :P30_TASK_ID,
        p_priority => apex_human_task.c_task_priority_urgent
    );
end;
/
```
