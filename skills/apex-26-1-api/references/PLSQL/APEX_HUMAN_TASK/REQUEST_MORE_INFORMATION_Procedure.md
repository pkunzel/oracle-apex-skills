# APEX_HUMAN_TASK.REQUEST_MORE_INFORMATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REQUEST_MORE_INFORMATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure requests more information for a task. The actual owner of a task can request additional information regarding a Task from the Initiator. In cases where the initiator is unavailable, the task is reassigned to another team member to keep the workflow moving.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.REQUEST_MORE_INFORMATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.REQUEST_MORE_INFORMATION (
    p_task_id                IN NUMBER,
    p_text                   IN VARCHAR2,
    p_to_user                IN VARCHAR2     DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_text` | Text describing the information requested. |
| `p_to_user` | If specified, the task will be assigned to this user, otherwise the task is assigned to the initiator. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.REQUEST_MORE_INFORMATION(
        p_task_id => 1,
        p_text => to_clob('Example text'),
        p_to_user => 'USER'
    );
end;
/
```

