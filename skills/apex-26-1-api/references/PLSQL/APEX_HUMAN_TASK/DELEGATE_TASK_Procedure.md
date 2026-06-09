# APEX_HUMAN_TASK.DELEGATE_TASK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.DELEGATE_TASK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure assigns the task to one potential owner and sets the task state to Assigned . Either the current owner of the task (the user to whom the task is currently assigned) or the Business Administrator of the task can perform this operation.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.DELEGATE_TASK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.DELEGATE_TASK (
    p_task_id                IN NUMBER,
    p_to_user                IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_to_user` | A (user) participant. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.DELEGATE_TASK(
        p_task_id => 1,
        p_to_user => 'USER'
    );
end;
/
```

