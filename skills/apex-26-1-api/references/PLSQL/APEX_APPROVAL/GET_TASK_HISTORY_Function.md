# APEX_APPROVAL.GET_TASK_HISTORY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_HISTORY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.GET_TASK_HISTORY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.GET_TASK_HISTORY (
    p_task_id        IN NUMBER,
    p_include_all    IN VARCHAR2 DEFAULT 'N' )
RETURN apex_t_approval_log_table pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The task ID. |
| `p_include_all` | If set to Y , the history of all tasks linked to the task with the given task ID is shown. Since Oracle APEX release 22.2, this includes prior Tasks that have been expired. |

## Returns

A table of approval log entries (type apex_t_approval_log_table ) containing the following columns: display_msg varchar2(4000) event_creator varchar2(255) event_creator_lower varchar2(255) event_timestamp timestamp with time zone event_type varchar2(255) event_type_code varchar2(32) new_actual_owner varchar2(255) new_actual_owner_lower varchar2(255) new_priority number new_priority_level varchar2(255) new_state varchar2(255) new_state_code varchar2(32) old_actual_owner varchar2(255) old_actual_owner_lower varchar2(255) old_priority number old_priority_level varchar2(255) old_state varchar2(255) old_state_code varchar2(32) outcome varchar2(255) outcome_code varchar2(32)

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_APPROVAL_LOG_TABLE;
begin
    l_result := apex_approval.GET_TASK_HISTORY(
        p_task_id => 1,
        p_include_all => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

