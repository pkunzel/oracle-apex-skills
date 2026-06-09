# APEX_HUMAN_TASK.EXCLUDE_POTENTIAL_OWNER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.EXCLUDE_POTENTIAL_OWNER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure excludes a potential owner from a task. Only a Business Administrator for the task can invoke this procedure.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.EXCLUDE_POTENTIAL_OWNER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.EXCLUDE_POTENTIAL_OWNER (
    p_task_id                IN              NUMBER,
    p_potential_owner        IN              VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_potential_owner` | The potential owner. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.EXCLUDE_POTENTIAL_OWNER(
        p_task_id => 1,
        p_potential_owner => 'EXAMPLE'
    );
end;
/
```

