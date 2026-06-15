# APEX_HUMAN_TASK.HAS_TASK_PARAM_CHANGED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.HAS_TASK_PARAM_CHANGED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function checks if the value of this task parameter has been modified in the current session. Returns NULL when the parameter does not exist.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.HAS_TASK_PARAM_CHANGED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.HAS_TASK_PARAM_CHANGED (
             p_task_id                IN NUMBER,
             p_param_static_id        IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static ID of the parameter. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_human_task.has_task_param_changed(
           p_task_id         => :P30_TASK_ID,
           p_param_static_id => 'ORDER_TOTAL'
       )
    then
        apex_human_task.add_task_comment(
            p_task_id => :P30_TASK_ID,
            p_text    => 'Order total changed since this task was created.'
        );
    end if;
end;
/
```
