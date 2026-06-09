# APEX_HUMAN_TASK.COMPLETE_TASK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.COMPLETE_TASK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure completes a task with an outcome. Only the actual owner or a potential owner of the task can invoke this procedure.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.COMPLETE_TASK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.COMPLETE_TASK (
    p_task_id                IN NUMBER,
    p_outcome                IN t_task_outcome DEFAULT NULL,
    p_autoclaim              IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_outcome` | The outcome of the Task for Approval Tasks. |
| `p_autoclaim` | If Task is in state UNASSIGNED then claim the task implicitly. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.COMPLETE_TASK(
        p_task_id => 1,
        p_outcome => null,
        p_autoclaim => true
    );
end;
/
```

