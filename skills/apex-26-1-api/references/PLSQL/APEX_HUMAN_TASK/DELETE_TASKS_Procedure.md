# APEX_HUMAN_TASK.DELETE_TASKS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.DELETE_TASKS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This procedure removes human task instances for a given application. If p_include_workflow_tasks flag is not set, only those instances that are not created through a workflow will be deleted. If the p_include_workflow_tasks flag is true, all human task instances will be deleted.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.DELETE_TASKS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_human_task.delete_tasks (
    p_application_id             IN   NUMBER               DEFAULT apex_application.g_flow_id,
    p_static_id                  IN   VARCHAR2             DEFAULT NULL,
    p_states                     IN   apex_t_varchar2      DEFAULT NULL,
    p_include_workflow_tasks     IN   BOOLEAN              DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Defaults to the currently running application. |
| `p_static_id` | Static ID of the task definition. If omitted, the deletion applies to task instances for all task definitions in the application |
| `p_states` | (Optional) State(s) of the task instances. If provided, only those task instances which belong to the specified state(s), will be deleted |
| `p_include_workflow_tasks` | If true, those human task instances that are created through workflow will also be deleted. Default is false. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_human_task.delete_tasks(
        p_application_id         => 100,
        p_static_id              => 'ORDER_APPROVAL',
        p_states                 => apex_t_varchar2(
            apex_human_task.c_task_state_completed,
            apex_human_task.c_task_state_cancelled
        ),
        p_include_workflow_tasks => false
    );
end;
/
```
