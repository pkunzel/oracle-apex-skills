# APEX_HUMAN_TASK.GET_TASK_HISTORY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_HISTORY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function gets the approval log for a task.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_TASK_HISTORY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_TASK_HISTORY (
    p_task_id        IN NUMBER,
    p_include_all    IN VARCHAR2 DEFAULT 'N' )
RETURN wwv_flow_t_approval_log_table pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The task ID. |
| `p_include_all` | If set to Y , the history of all tasks linked to the task with the given task ID is shown. In 22.2, this includes prior Tasks that have been expired. |

## Returns

A table of approval log entries (type apex_t_approval_log ).

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result WWV_FLOW_T_APPROVAL_LOG_TABLE;
begin
    l_result := apex_human_task.GET_TASK_HISTORY(
        p_task_id => 1,
        p_include_all => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

