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
declare
    l_result BOOLEAN;
begin
    l_result := apex_human_task.HAS_TASK_PARAM_CHANGED(
        p_task_id => 1,
        p_param_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

