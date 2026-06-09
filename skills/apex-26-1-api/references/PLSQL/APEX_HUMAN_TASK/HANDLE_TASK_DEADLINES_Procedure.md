# APEX_HUMAN_TASK.HANDLE_TASK_DEADLINES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.HANDLE_TASK_DEADLINES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure handles Task Deadlines for all Tasks in the current Workspace. A background Job performs this work every hour.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.HANDLE_TASK_DEADLINES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.HANDLE_TASK_DEADLINES
```

## Parameters

| Parameter | Description |
| --- | --- |
| `none` | none |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.HANDLE_TASK_DEADLINES;
end;
/
```

