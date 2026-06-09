# APEX_HUMAN_TASK.REJECT_TASK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REJECT_TASK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure rejects the task. Only a potential owner or the actual owner of the task can invoke this procedure.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.REJECT_TASK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.REJECT_TASK (
    p_task_id                IN NUMBER,
    p_autoclaim              IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
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
    apex_human_task.REJECT_TASK(
        p_task_id => 1,
        p_autoclaim => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_human_task.REJECT_TASK(
            p_task_id => 1,
            p_autoclaim => true
        );
end;
/
```

