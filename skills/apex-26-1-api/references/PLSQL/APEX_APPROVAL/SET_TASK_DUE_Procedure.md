# APEX_APPROVAL.SET_TASK_DUE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_DUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.SET_TASK_DUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.SET_TASK_DUE (
    p_task_id                IN NUMBER,
    p_due_date               IN timestamp with time zone )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_due_date` | The new due date of the Task. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_approval.SET_TASK_DUE(
        p_task_id => 1,
        p_due_date => sysdate
    );
end;
/
```

