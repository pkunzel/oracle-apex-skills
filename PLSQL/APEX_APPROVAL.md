# APEX_APPROVAL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html)

Status: curated first-pass reference.

## Purpose

`APEX_APPROVAL` is the legacy approval-task package. The local manifest marks the package as deprecated. For new work, prefer [APEX_HUMAN_TASK](APEX_HUMAN_TASK.md), which exposes the modern task API and closely mirrors the approval lifecycle.

This page remains useful when maintaining older applications that still call `APEX_APPROVAL` members.

## When To Use

Use `APEX_APPROVAL` only when:

- Maintaining existing code that already depends on `APEX_APPROVAL`.
- Reading legacy examples or applications created before the move to `APEX_HUMAN_TASK`.
- Comparing old approval APIs to their modern `APEX_HUMAN_TASK` equivalents.

Do not introduce `APEX_APPROVAL` in new applications unless a compatibility requirement forces it.

## API Surface

Most members map conceptually to `APEX_HUMAN_TASK`:

| Legacy need | Members |
| --- | --- |
| Create/list tasks | `CREATE_TASK`, `GET_TASKS`, `GET_TASK_PRIORITIES`, `GET_LOV_*` |
| Act on tasks | `CLAIM_TASK`, `APPROVE_TASK`, `REJECT_TASK`, `COMPLETE_TASK`, `CANCEL_TASK`, `RELEASE_TASK`, `RENEW_TASK` |
| Collaborate | `ADD_TASK_COMMENT`, `REQUEST_MORE_INFORMATION`, `SUBMIT_INFORMATION`, `DELEGATE_TASK` |
| Task parameters | `GET_TASK_PARAMETER_VALUE`, `GET_TASK_PARAMETER_OLD_VALUE`, `SET_TASK_PARAMETER_VALUES`, `HAS_TASK_PARAM_CHANGED` |
| Owners/admins | `ADD_TASK_POTENTIAL_OWNER`, `REMOVE_POTENTIAL_OWNER`, `IS_BUSINESS_ADMIN`, `IS_OF_PARTICIPANT_TYPE` |

## Legacy Create Task

For new code, use `APEX_HUMAN_TASK.CREATE_TASK`. Legacy pattern:

```sql
declare
    l_task_id number;
begin
    l_task_id := apex_approval.create_task(
        p_application_id         => :APP_ID,
        p_task_def_static_id     => 'EXPENSE_APPROVAL',
        p_subject                => 'Approve expense ' || :P10_EXPENSE_ID,
        p_parameters             => apex_approval.c_empty_task_parameters,
        p_priority               => 3,
        p_initiator              => :APP_USER,
        p_initiator_can_complete => false,
        p_detail_pk              => :P10_EXPENSE_ID);
end;
/
```

## Legacy Approve/Reject

```sql
begin
    apex_approval.approve_task(
        p_task_id   => :P20_TASK_ID,
        p_autoclaim => true);
end;
/
```

```sql
begin
    apex_approval.reject_task(
        p_task_id   => :P20_TASK_ID,
        p_autoclaim => true);
end;
/
```

## Legacy Task List SQL

```sql
select task_id,
       subject,
       state,
       priority,
       due_on
  from table(apex_approval.get_tasks(
           p_application_id => :APP_ID))
 order by due_on nulls last;
```

## Migration Notes

- Prefer `APEX_HUMAN_TASK` names in new examples and generated code.
- When migrating, compare member signatures against the corresponding local `APEX_HUMAN_TASK` page.
- Re-test authorization behavior; do not assume UI-level permission checks cover PL/SQL calls.
- Keep this page for legacy maintenance and source compatibility.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_APPROVAL/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.Constants-and-Data-Types.html) |
| ADD_TASK_COMMENT Procedure | procedure | [local](APEX_APPROVAL/ADD_TASK_COMMENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TASK_COMMENT-Procedure.html) |
| ADD_TASK_POTENTIAL_OWNER Procedure | procedure | [local](APEX_APPROVAL/ADD_TASK_POTENTIAL_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TASK_POTENTIAL_OWNER-Procedure.html) |
| ADD_TO_HISTORY Procedure | procedure | [local](APEX_APPROVAL/ADD_TO_HISTORY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TO_HISTORY-Procedure.html) |
| APPROVE_TASK Procedure | procedure | [local](APEX_APPROVAL/APPROVE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPROVE_TASK-Procedure.html) |
| CANCEL_TASK Procedure | procedure | [local](APEX_APPROVAL/CANCEL_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CANCEL_TASK-Procedure.html) |
| CLAIM_TASK Procedure | procedure | [local](APEX_APPROVAL/CLAIM_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLAIM_TASK-Procedure.html) |
| COMPLETE_TASK Procedure | procedure | [local](APEX_APPROVAL/COMPLETE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COMPLETE_TASK-Procedure.html) |
| CREATE_TASK Function | function | [local](APEX_APPROVAL/CREATE_TASK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_TASK-Function.html) |
| DELEGATE_TASK Procedure | procedure | [local](APEX_APPROVAL/DELEGATE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELEGATE_TASK-Procedure.html) |
| GET_LOV_PRIORITY Function | function | [local](APEX_APPROVAL/GET_LOV_PRIORITY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOV_PRIORITY-Function.html) |
| GET_LOV_STATE Function | function | [local](APEX_APPROVAL/GET_LOV_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOV_STATE-Function.html) |
| GET_NEXT_PURGE_TIMESTAMP Function | function | [local](APEX_APPROVAL/GET_NEXT_PURGE_TIMESTAMP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.GET_NEXT_PURGE_TIMESTAMP-Function.html) |
| GET_TASK_DELEGATES Function | function | [local](APEX_APPROVAL/GET_TASK_DELEGATES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_DELEGATES-Function.html) |
| GET_TASK_HISTORY Function | function | [local](APEX_APPROVAL/GET_TASK_HISTORY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_HISTORY-Function.html) |
| GET_TASK_PARAMETER_OLD_VALUE Function | function | [local](APEX_APPROVAL/GET_TASK_PARAMETER_OLD_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PARAMETER_OLD_VALUE-Function.html) |
| GET_TASK_PARAMETER_VALUE Function | function | [local](APEX_APPROVAL/GET_TASK_PARAMETER_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PARAMETER_VALUE-Function.html) |
| GET_TASK_PRIORITIES Function | function | [local](APEX_APPROVAL/GET_TASK_PRIORITIES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PRIORITIES-Function.html) |
| GET_TASKS Function | function | [local](APEX_APPROVAL/GET_TASKS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASKS-Function.html) |
| HANDLE_TASK_DEADLINES Procedure | procedure | [local](APEX_APPROVAL/HANDLE_TASK_DEADLINES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HANDLE_TASK_DEADLINES-Procedure.html) |
| HAS_TASK_PARAM_CHANGED Function | function | [local](APEX_APPROVAL/HAS_TASK_PARAM_CHANGED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_TASK_PARAM_CHANGED-Function.html) |
| IS_ALLOWED Function | function | [local](APEX_APPROVAL/IS_ALLOWED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_ALLOWED-Function.html) |
| IS_BUSINESS_ADMIN Function | function | [local](APEX_APPROVAL/IS_BUSINESS_ADMIN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_BUSINESS_ADMIN-Function.html) |
| IS_OF_PARTICIPANT_TYPE Function | function | [local](APEX_APPROVAL/IS_OF_PARTICIPANT_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_OF_PARTICIPANT_TYPE-Function.html) |
| REJECT_TASK Procedure | procedure | [local](APEX_APPROVAL/REJECT_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REJECT_TASK-Procedure.html) |
| RELEASE_TASK Procedure | procedure | [local](APEX_APPROVAL/RELEASE_TASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RELEASE_TASK-Procedure.html) |
| REMOVE_POTENTIAL_OWNER Procedure | procedure | [local](APEX_APPROVAL/REMOVE_POTENTIAL_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_POTENTIAL_OWNER-Procedure.html) |
| RENEW_TASK Function | function | [local](APEX_APPROVAL/RENEW_TASK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RENEW_TASK-Function.html) |
| REQUEST_MORE_INFORMATION Procedure | procedure | [local](APEX_APPROVAL/REQUEST_MORE_INFORMATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REQUEST_MORE_INFORMATION-Procedure.html) |
| SET_INITIATOR_CAN_COMPLETE Procedure | procedure | [local](APEX_APPROVAL/SET_INITIATOR_CAN_COMPLETE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_INITIATOR_CAN_COMPLETE-Procedure.html) |
| SET_TASK_DUE Procedure | procedure | [local](APEX_APPROVAL/SET_TASK_DUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_DUE-Procedure.html) |
| SET_TASK_PARAMETER_VALUES Procedure | procedure | [local](APEX_APPROVAL/SET_TASK_PARAMETER_VALUES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_PARAMETER_VALUES-Procedure.html) |
| SET_TASK_PRIORITY Procedure | procedure | [local](APEX_APPROVAL/SET_TASK_PRIORITY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_PRIORITY-Procedure.html) |
| SUBMIT_INFORMATION Procedure | procedure | [local](APEX_APPROVAL/SUBMIT_INFORMATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUBMIT_INFORMATION-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
