# APEX_APPROVAL.RENEW_TASK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RENEW_TASK-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.RENEW_TASK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.RENEW_TASK (
    p_task_id       IN NUMBER,
    p_priority      IN INTEGER  DEFAULT NULL,
    p_due_date      IN timestamp with time zone )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_priority` | The priority of the renewed Task. |
| `p_due_date` | The due date for the renewed Task. |

## Returns

This function returns the ID of the renewed task.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_approval.RENEW_TASK(
        p_task_id => 1,
        p_priority => 1,
        p_due_date => sysdate
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

