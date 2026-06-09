# APEX_HUMAN_TASK.CLAIM_TASK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.CLAIM_TASK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure claims responsibility for a task. A task can be claimed by potential owners of the Task. A Task must be in "Unassigned" state to claim it. Once the task is claimed by a user, the Task transitions to "Assigned" state and the actual owner of the task is set to the user who claimed the task.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.CLAIM_TASK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.CLAIM_TASK (
    p_task_id                IN NUMBER );
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
    apex_human_task.CLAIM_TASK(
        p_task_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_human_task.CLAIM_TASK(
            p_task_id => 1
        );
end;
/
```

