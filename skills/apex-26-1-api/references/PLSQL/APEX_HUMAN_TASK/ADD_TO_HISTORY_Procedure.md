# APEX_HUMAN_TASK.ADD_TO_HISTORY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.ADD_TO_HISTORY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure adds a log entry into the task history and is to be used within task action code.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.ADD_TO_HISTORY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.ADD_TO_HISTORY (
    p_message IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Message to add into to the task history. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.add_to_history(
        p_message => 'Escalated automatically because the due date is within 24 hours.'
    );
end;
/
```
