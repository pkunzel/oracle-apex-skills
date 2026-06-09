# APEX_HUMAN_TASK

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html)

Status: curated first-pass reference.

## Purpose

`APEX_HUMAN_TASK` creates, lists, claims, completes, approves, rejects, delegates, comments on, and administers APEX human tasks. It is the modern task API for approvals and other user-driven work items, whether standalone or used inside workflows.

Prefer `APEX_HUMAN_TASK` for new applications. `APEX_APPROVAL` is legacy/deprecated in the manifest and mirrors much of this older approval-task surface.

## When To Use

Use `APEX_HUMAN_TASK` when:

- A process must create a task from a task definition Static ID.
- A task list page needs a SQL source for current-user, admin, initiated-by-me, or single-task contexts.
- A user action claims, approves, rejects, completes, delegates, releases, or renews a task.
- A page needs task comments, history, priority, due date, or parameter values.
- Task potential owners or business administrators must be refreshed or adjusted.
- Deadline handling or purge scheduling is part of the task lifecycle.

Do not let users act on arbitrary task IDs. Check task permissions with `IS_ALLOWED`, `IS_BUSINESS_ADMIN`, or declarative authorization before mutating task state.

## API Surface

| Need | Members |
| --- | --- |
| Create/list tasks | `CREATE_TASK`, `GET_TASKS`, `GET_TASK_PRIORITIES`, `GET_LOV_*` |
| Act on tasks | `CLAIM_TASK`, `APPROVE_TASK`, `REJECT_TASK`, `COMPLETE_TASK`, `CANCEL_TASK`, `RELEASE_TASK`, `RENEW_TASK` |
| Collaborate | `ADD_TASK_COMMENT`, `REQUEST_MORE_INFORMATION`, `SUBMIT_INFORMATION`, `DELEGATE_TASK` |
| Task parameters | `GET_TASK_PARAMETER_VALUE`, `GET_TASK_PARAMETER_OLD_VALUE`, `SET_TASK_PARAMETER_VALUES`, `HAS_TASK_PARAM_CHANGED` |
| Owners/admins | `ADD_TASK_POTENTIAL_OWNER`, `REMOVE_POTENTIAL_OWNER`, `EXCLUDE_POTENTIAL_OWNER`, `REFRESH_BUSINESS_ADMINS` |
| Metadata/history | `GET_TASK_HISTORY`, `GET_TASK_DELEGATES`, `ADD_TO_HISTORY` |
| Permissions and cleanup | `IS_ALLOWED`, `IS_BUSINESS_ADMIN`, `IS_OF_PARTICIPANT_TYPE`, `DELETE_TASKS`, `HANDLE_TASK_DEADLINES` |

## Create A Task

```sql
declare
    l_task_id number;
begin
    l_task_id := apex_human_task.create_task(
        p_application_id         => :APP_ID,
        p_task_def_static_id     => 'AI_RESPONSE_REVIEW',
        p_subject                => 'Review AI response for request ' || :P10_REQUEST_ID,
        p_parameters             => apex_human_task.c_empty_task_parameters,
        p_priority               => 3,
        p_initiator              => :APP_USER,
        p_initiator_can_complete => false,
        p_detail_pk              => :P10_REQUEST_ID,
        p_due_date               => systimestamp + interval '2' day);

    :P10_TASK_ID := l_task_id;
end;
/
```

Assuming task parameters are populated in `l_params` of type `apex_human_task.t_task_parameters`:

```sql
declare
    l_task_id number;
    l_params  apex_human_task.t_task_parameters;
begin
    -- Populate l_params with documented task parameter records.
    l_task_id := apex_human_task.create_task(
        p_application_id     => :APP_ID,
        p_task_def_static_id => 'EXPENSE_APPROVAL',
        p_subject            => 'Approve expense ' || :P10_EXPENSE_ID,
        p_parameters         => l_params,
        p_initiator          => :APP_USER,
        p_detail_pk          => :P10_EXPENSE_ID);
end;
/
```

## Task List SQL

Use the pipelined `GET_TASKS` function in report SQL:

```sql
select task_id,
       subject,
       state,
       priority,
       due_on,
       actual_owner
  from table(apex_human_task.get_tasks(
           p_application_id => :APP_ID))
 order by due_on nulls last, priority desc;
```

Single-task lookup:

```sql
select task_id, subject, state, outcome
  from table(apex_human_task.get_tasks(
           p_task_id        => :P20_TASK_ID,
           p_application_id => :APP_ID));
```

## Claim And Complete

Claim an unassigned task:

```sql
begin
    apex_human_task.claim_task(
        p_task_id => :P20_TASK_ID);
end;
/
```

Approve with implicit claim when allowed:

```sql
begin
    apex_human_task.approve_task(
        p_task_id   => :P20_TASK_ID,
        p_autoclaim => true);
end;
/
```

Reject:

```sql
begin
    apex_human_task.reject_task(
        p_task_id   => :P20_TASK_ID,
        p_autoclaim => true);
end;
/
```

## Comments, Parameters, And Due Dates

```sql
begin
    apex_human_task.add_task_comment(
        p_task_id => :P20_TASK_ID,
        p_text    => :P20_COMMENT);
end;
/
```

Assuming `l_params` is an `apex_human_task.t_task_parameters` collection with only updatable parameters:

```sql
begin
    apex_human_task.set_task_parameter_values(
        p_task_id     => :P20_TASK_ID,
        p_parameters  => l_params,
        p_raise_error => true);
end;
/
```

```sql
begin
    apex_human_task.set_task_due(
        p_task_id  => :P20_TASK_ID,
        p_due_date => systimestamp + interval '1' day);
end;
/
```

## Safety Guidance

- Prefer task definition Static IDs in generated code.
- Check permissions before task mutations; never trust a hidden item containing a task ID.
- Use `p_autoclaim => true` only when the UI intentionally supports one-click approve/reject.
- Use task parameters only as defined by the task definition; not every parameter is updatable.
- For new code, prefer `APEX_HUMAN_TASK` over legacy `APEX_APPROVAL`.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_HUMAN_TASK/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.Constants-and-Data-Types.html) |
| ADD_TASK_COMMENT Procedure | procedure | [local](APEX_HUMAN_TASK/ADD_TASK_COMMENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.ADD_TASK_COMMENT-Procedure.html) |
| ADD_TASK_POTENTIAL_OWNER Procedure | procedure | [local](APEX_HUMAN_TASK/ADD_TASK_POTENTIAL_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.ADD_TASK_POTENTIAL_OWNER-Procedure.html) |
| ADD_TO_HISTORY Procedure | procedure | [local](APEX_HUMAN_TASK/ADD_TO_HISTORY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.ADD_TO_HISTORY-Procedure.html) |
| APPROVE_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/APPROVE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.APPROVE_TASK-Procedure.html) |
| CANCEL_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/CANCEL_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.CANCEL_TASK-Procedure.html) |
| CLAIM_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/CLAIM_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.CLAIM_TASK-Procedure.html) |
| COMPLETE_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/COMPLETE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.COMPLETE_TASK-Procedure.html) |
| CREATE_TASK Function | function | [local](APEX_HUMAN_TASK/CREATE_TASK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.CREATE_TASK-Function.html) |
| DELEGATE_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/DELEGATE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.DELEGATE_TASK-Procedure.html) |
| DELETE_TASKS Procedure | procedure | [local](APEX_HUMAN_TASK/DELETE_TASKS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.DELETE_TASKS-Procedure.html) |
| EXCLUDE_POTENTIAL_OWNER Procedure | procedure | [local](APEX_HUMAN_TASK/EXCLUDE_POTENTIAL_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.EXCLUDE_POTENTIAL_OWNER-Procedure.html) |
| GET_LOV_PRIORITY Function | function | [local](APEX_HUMAN_TASK/GET_LOV_PRIORITY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_LOV_PRIORITY-Function.html) |
| GET_LOV_STATE Function | function | [local](APEX_HUMAN_TASK/GET_LOV_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_LOV_STATE-Function.html) |
| GET_LOV_TYPE Function | function | [local](APEX_HUMAN_TASK/GET_LOV_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_LOV_TYPE-Function.html) |
| GET_NEXT_PURGE_TIMESTAMP Function | function | [local](APEX_HUMAN_TASK/GET_NEXT_PURGE_TIMESTAMP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_NEXT_PURGE_TIMESTAMP-Function.html) |
| GET_TASK_DELEGATES Function | function | [local](APEX_HUMAN_TASK/GET_TASK_DELEGATES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_DELEGATES-Function.html) |
| GET_TASK_HISTORY Function | function | [local](APEX_HUMAN_TASK/GET_TASK_HISTORY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_HISTORY-Function.html) |
| GET_TASK_PARAMETER_OLD_VALUE Function | function | [local](APEX_HUMAN_TASK/GET_TASK_PARAMETER_OLD_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_PARAMETER_OLD_VALUE-Function.html) |
| GET_TASK_PARAMETER_VALUE Function | function | [local](APEX_HUMAN_TASK/GET_TASK_PARAMETER_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_PARAMETER_VALUE-Function.html) |
| GET_TASK_PRIORITIES Function | function | [local](APEX_HUMAN_TASK/GET_TASK_PRIORITIES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_PRIORITIES-Function.html) |
| GET_TASKS Function | function | [local](APEX_HUMAN_TASK/GET_TASKS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASKS-Function.html) |
| HANDLE_TASK_DEADLINES Procedure | procedure | [local](APEX_HUMAN_TASK/HANDLE_TASK_DEADLINES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.HANDLE_TASK_DEADLINES-Procedure.html) |
| HAS_TASK_PARAM_CHANGED Function | function | [local](APEX_HUMAN_TASK/HAS_TASK_PARAM_CHANGED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.HAS_TASK_PARAM_CHANGED-Function.html) |
| IS_ALLOWED Function | function | [local](APEX_HUMAN_TASK/IS_ALLOWED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.IS_ALLOWED-Function.html) |
| IS_BUSINESS_ADMIN Function | function | [local](APEX_HUMAN_TASK/IS_BUSINESS_ADMIN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.IS_BUSINESS_ADMIN-Function.html) |
| IS_OF_PARTICIPANT_TYPE Function | function | [local](APEX_HUMAN_TASK/IS_OF_PARTICIPANT_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.IS_OF_PARTICIPANT_TYPE-Function.html) |
| REFRESH_BUSINESS_ADMINS Procedure | procedure | [local](APEX_HUMAN_TASK/REFRESH_BUSINESS_ADMINS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REFRESH_BUSINESS_ADMINS-Procedure.html) |
| REJECT_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/REJECT_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REJECT_TASK-Procedure.html) |
| RELEASE_TASK Procedure | procedure | [local](APEX_HUMAN_TASK/RELEASE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.RELEASE_TASK-Procedure.html) |
| REMOVE_POTENTIAL_OWNER Procedure | procedure | [local](APEX_HUMAN_TASK/REMOVE_POTENTIAL_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REMOVE_POTENTIAL_OWNER-Procedure.html) |
| RENEW_TASK Function | function | [local](APEX_HUMAN_TASK/RENEW_TASK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.RENEW_TASK-Function.html) |
| REQUEST_MORE_INFORMATION Procedure | procedure | [local](APEX_HUMAN_TASK/REQUEST_MORE_INFORMATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.REQUEST_MORE_INFORMATION-Procedure.html) |
| SET_INITIATOR_CAN_COMPLETE Procedure | procedure | [local](APEX_HUMAN_TASK/SET_INITIATOR_CAN_COMPLETE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SET_INITIATOR_CAN_COMPLETE-Procedure.html) |
| SET_TASK_DUE Procedure | procedure | [local](APEX_HUMAN_TASK/SET_TASK_DUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SET_TASK_DUE-Procedure.html) |
| SET_TASK_PARAMETER_VALUES Procedure | procedure | [local](APEX_HUMAN_TASK/SET_TASK_PARAMETER_VALUES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SET_TASK_PARAMETER_VALUES-Procedure.html) |
| SET_TASK_PRIORITY Procedure | procedure | [local](APEX_HUMAN_TASK/SET_TASK_PRIORITY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SET_TASK_PRIORITY-Procedure.html) |
| SUBMIT_INFORMATION Procedure | procedure | [local](APEX_HUMAN_TASK/SUBMIT_INFORMATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.SUBMIT_INFORMATION-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
