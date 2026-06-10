# APEX_APPROVAL.CREATE_TASK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_TASK-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.CREATE_TASK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.CREATE_TASK (
    p_application_id         IN NUMBER                   DEFAULT apex_application.g_flow_id,
    p_task_def_static_id     IN VARCHAR2,
    p_subject                IN VARCHAR2                 DEFAULT NULL,
    p_parameters             IN t_task_parameters        DEFAULT c_empty_task_parameters,
    p_priority               IN INTEGER                  DEFAULT NULL,
    p_initiator              IN VARCHAR2                 DEFAULT NULL,
    p_initiator_can_complete IN BOOLEAN                  DEFAULT NULL,
    p_detail_pk              IN VARCHAR2                 DEFAULT NULL,
    p_due_date               IN TIMESTAMP WITH TIME ZONE DEFAULT NULL )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID that creates the Task. |
| `p_task_def_static_id` | The Task Definition static ID. |
| `p_subject` | The subject (expression of the Task). |
| `p_parameters` | The task parameters. |
| `p_priority` | (Optional) A task priority, default is NULL. If no priority is provided, uses the priority set in the corresponding task definition. |
| `p_initiator` | (Optional) An initiator information for the task. |
| `p_initiator_can_complete` | (Optional) Enables the initiator of a task to complete the task (default NULL). If this parameter is not specified, the value of the corresponding task definition is used. |
| `p_detail_pk` | (Optional) A primary key value for the task details. |
| `p_due_date` | (Optional) Page Item representing the Due Date of the Task. When specified, this value overrides the Due Date provided in the Task Definition this Task is based on. |

## Returns

Returns the ID of the newly created task.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_task_id number;
begin
    l_task_id := apex_approval.create_task(
        p_application_id         => apex_application.g_flow_id,
        p_task_def_static_id     => 'EXPENSE_APPROVAL',
        p_subject                => 'Approve expense ' || :P10_EXPENSE_ID,
        p_parameters             => apex_approval.c_empty_task_parameters,
        p_priority               => 3,
        p_initiator              => :APP_USER,
        p_initiator_can_complete => false,
        p_detail_pk              => :P10_EXPENSE_ID,
        p_due_date               => systimestamp + interval '3' day
    );

    apex_debug.info('Created approval task %s', l_task_id);
end;
/
```
