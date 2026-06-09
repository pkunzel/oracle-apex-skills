# APEX_HUMAN_TASK.SUBMIT_INFORMATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SUBMIT_INFORMATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure submits information for a task. The initiator of a task can submit additional information regarding a Task for which information has been requested. For example, a travel approver might need airline details from the initiator. The initiator can submit this information to the travel approver using this API.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.SUBMIT_INFORMATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.SUBMIT_INFORMATION (
    p_task_id                IN NUMBER,
    p_text                   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_text` | Text containing the information submitted. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.SUBMIT_INFORMATION(
        p_task_id => 1,
        p_text => to_clob('Example text')
    );
end;
/
```

