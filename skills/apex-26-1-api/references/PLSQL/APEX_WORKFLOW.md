# APEX_WORKFLOW

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.html)

Status: curated first-pass reference.

## Purpose

`APEX_WORKFLOW` starts and controls APEX workflow instances. It is the server-side API for launching workflow definitions, listing workflow instances, reading and updating workflow variables, continuing waiting activities, retrying or resuming faulted work, suspending/resuming instances, and terminating or purging workflow data.

Use this package for multi-step business processes. Use `APEX_HUMAN_TASK` for individual human tasks and approvals that may be part of a workflow.

## When To Use

Use `APEX_WORKFLOW` when:

- A page process needs to start a workflow by workflow Static ID.
- Application code must show workflow instances for the current user, an administrator, or a specific workflow.
- A workflow variable must be read or updated after the instance starts.
- An external system completes a waiting workflow activity and APEX must continue the activity.
- Administrators need to suspend, resume, retry, or terminate workflow instances.
- Development instances or faulted workflows need cleanup.

Do not use workflow APIs as a substitute for authorization. Check the user's permission before exposing resume, retry, terminate, or variable-update operations.

## API Surface

| Need | Members |
| --- | --- |
| Start workflow | `START_WORKFLOW` |
| Continue waiting activity | `CONTINUE_ACTIVITY` |
| Read/list workflows | `GET_WORKFLOWS`, `GET_WORKFLOW_STATE`, `GET_VARIABLE_VALUE`, `GET_VARIABLE_CLOB_VALUE` |
| Update workflow data | `UPDATE_VARIABLES`, `SET_ACTIVITY_DUE_DATE`, `SET_LOG_LEVEL` |
| Permissions and participants | `IS_ALLOWED`, `IS_ADMIN`, `IS_OF_PARTICIPANT_TYPE`, `REFRESH_PARTICIPANTS` |
| Lifecycle control | `SUSPEND`, `RESUME`, `RETRY`, `TERMINATE`, `TERMINATE_FAULTED_WORKFLOWS` |
| Cleanup and LOVs | `DELETE_WORKFLOWS`, `REMOVE_DEVELOPMENT_INSTANCES`, `GET_LOV_*`, `GET_NEXT_PURGE_TIMESTAMP` |

## Start A Workflow

Start a workflow from an APEX page process:

```sql
declare
    l_workflow_id number;
begin
    l_workflow_id := apex_workflow.start_workflow(
        p_application_id => :APP_ID,
        p_static_id      => 'ORDER_FULFILLMENT',
        p_parameters     => apex_workflow.c_empty_workflow_parameters,
        p_initiator      => :APP_USER,
        p_detail_pk      => :P10_ORDER_ID);

    :P10_WORKFLOW_ID := l_workflow_id;
end;
/
```

With workflow parameters, use the documented `apex_workflow.t_workflow_parameters` records and typed `apex_session_state.t_value` values:

```sql
declare
    l_workflow_id number;
    l_params      apex_workflow.t_workflow_parameters;
begin
    l_params(1).static_id := 'ORDER_ID';
    l_params(1).value.data_type := apex_session_state.c_data_type_varchar2;
    l_params(1).value.varchar2_value := :P10_ORDER_ID;

    l_workflow_id := apex_workflow.start_workflow(
        p_application_id => :APP_ID,
        p_static_id      => 'AI_REVIEW_WORKFLOW',
        p_parameters     => l_params,
        p_initiator      => :APP_USER,
        p_detail_pk      => :P10_REQUEST_ID);
end;
/
```

## List Workflows

Use the pipelined `GET_WORKFLOWS` function in SQL:

```sql
select workflow_id,
       workflow_def_static_id,
       state,
       title,
       created_on
  from table(apex_workflow.get_workflows(
           p_application_id => :APP_ID))
 order by created_on desc;
```

For a specific workflow instance:

```sql
select workflow_id, state, title
  from table(apex_workflow.get_workflows(
           p_workflow_id    => :P20_WORKFLOW_ID,
           p_application_id => :APP_ID));
```

## Read And Update Variables

```sql
declare
    l_status varchar2(4000);
begin
    l_status := apex_workflow.get_variable_value(
        p_instance_id        => :P20_WORKFLOW_ID,
        p_variable_static_id => 'STATUS');
end;
/
```

Update variables with typed workflow parameter values. This API is restricted by the documented workflow state and administrator rules.

```sql
declare
    l_changed_params apex_workflow.t_workflow_parameters;
begin
    l_changed_params(1).static_id := 'STATUS';
    l_changed_params(1).value.data_type := apex_session_state.c_data_type_varchar2;
    l_changed_params(1).value.varchar2_value := 'REOPENED';

    apex_workflow.update_variables(
        p_instance_id    => :P20_WORKFLOW_ID,
        p_changed_params => l_changed_params);
end;
/
```

## Continue A Waiting Activity

Assuming activity `WAIT_FOR_AI_REVIEW` is waiting and `l_activity_params` is a `wwv_flow_global.vc_map` populated with returned values:

```sql
begin
    apex_workflow.continue_activity(
        p_instance_id     => :P20_WORKFLOW_ID,
        p_static_id       => 'WAIT_FOR_AI_REVIEW',
        p_activity_params => l_activity_params);
end;
/
```

Use this pattern for callbacks from external systems. Validate the callback, correlate it to the expected workflow instance, and reject duplicate or stale callbacks.

## Administrative Control

Terminate a workflow only after a server-side permission check:

```sql
begin
    if not apex_authorization.has_access('CAN_ADMIN_WORKFLOWS') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    apex_workflow.terminate(
        p_instance_id => :P30_WORKFLOW_ID);
end;
/
```

Use `RETRY` for faulted workflow instances when the underlying cause is fixed. Use `SUSPEND` and `RESUME` for planned pauses.

## Safety Guidance

- Prefer workflow and activity Static IDs in generated code.
- Do not expose lifecycle controls without server-side authorization.
- Treat workflow variables as business data; validate values before updates.
- Use `APEX_SESSION` when scripts need APEX context outside a browser request.
- Use local member pages below for exact type details and operation constants.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_WORKFLOW/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.Constants-and-Data-Types.html) |
| CONTINUE_ACTIVITY Procedure Signature 1 | procedure | [local](APEX_WORKFLOW/CONTINUE_ACTIVITY_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.CONTINUE_ACTIVITY-Procedure-Signature-1.html) |
| CONTINUE_ACTIVITY Procedure Signature 2 | procedure | [local](APEX_WORKFLOW/CONTINUE_ACTIVITY_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.CONTINUE_ACTIVITY-Procedure-Signature-2.html) |
| DELETE_WORKFLOWS Procedure | procedure | [local](APEX_WORKFLOW/DELETE_WORKFLOWS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.DELETE_WORKFLOWS-Procedure.html) |
| GET_LOV_ACTIVITY_STATE Function | function | [local](APEX_WORKFLOW/GET_LOV_ACTIVITY_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_LOV_ACTIVITY_STATE-Function.html) |
| GET_LOV_WORKFLOW_STATE Function | function | [local](APEX_WORKFLOW/GET_LOV_WORKFLOW_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_LOV_WORKFLOW_STATE-Function.html) |
| GET_NEXT_PURGE_TIMESTAMP Function | function | [local](APEX_WORKFLOW/GET_NEXT_PURGE_TIMESTAMP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_NEXT_PURGE_TIMESTAMP-Function.html) |
| GET_VARIABLE_CLOB_VALUE Function | function | [local](APEX_WORKFLOW/GET_VARIABLE_CLOB_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_VARIABLE_CLOB_VALUE-Function.html) |
| GET_VARIABLE_VALUE Function | function | [local](APEX_WORKFLOW/GET_VARIABLE_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_VARIABLE_VALUE-Function.html) |
| GET_WORKFLOW_STATE Function | function | [local](APEX_WORKFLOW/GET_WORKFLOW_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_WORKFLOW_STATE-Function.html) |
| GET_WORKFLOWS Function | function | [local](APEX_WORKFLOW/GET_WORKFLOWS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_WORKFLOWS-Function.html) |
| IS_ADMIN Function | function | [local](APEX_WORKFLOW/IS_ADMIN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.IS_ADMIN-Function.html) |
| IS_ALLOWED Function | function | [local](APEX_WORKFLOW/IS_ALLOWED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.IS_ALLOWED-Function.html) |
| IS_OF_PARTICIPANT_TYPE Function | function | [local](APEX_WORKFLOW/IS_OF_PARTICIPANT_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.IS_OF_PARTICIPANT_TYPE-Function.html) |
| REFRESH_PARTICIPANTS Procedure | procedure | [local](APEX_WORKFLOW/REFRESH_PARTICIPANTS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.REFRESH_PARTICIPANTS-Procedure.html) |
| REMOVE_DEVELOPMENT_INSTANCES Procedure | procedure | [local](APEX_WORKFLOW/REMOVE_DEVELOPMENT_INSTANCES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.REMOVE_DEVELOPMENT_INSTANCES-Procedure.html) |
| RESUME Procedure | procedure | [local](APEX_WORKFLOW/RESUME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.RESUME-Procedure.html) |
| RETRY Procedure | procedure | [local](APEX_WORKFLOW/RETRY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.RETRY-Procedure.html) |
| SET_ACTIVITY_DUE_DATE Procedure | procedure | [local](APEX_WORKFLOW/SET_ACTIVITY_DUE_DATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.SET_ACTIVITY_DUE_DATE-Procedure.html) |
| SET_LOG_LEVEL Procedure | procedure | [local](APEX_WORKFLOW/SET_LOG_LEVEL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.SET_LOG_LEVEL-Procedure.html) |
| START_WORKFLOW Function | function | [local](APEX_WORKFLOW/START_WORKFLOW_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.START_WORKFLOW-Function.html) |
| SUSPEND Procedure | procedure | [local](APEX_WORKFLOW/SUSPEND_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.SUSPEND-Procedure.html) |
| TERMINATE Procedure | procedure | [local](APEX_WORKFLOW/TERMINATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.TERMINATE-Procedure.html) |
| TERMINATE_FAULTED_WORKFLOWS Procedure | procedure | [local](APEX_WORKFLOW/TERMINATE_FAULTED_WORKFLOWS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.TERMINATE_FAULTED_WORKFLOWS-Procedure.html) |
| UPDATE_VARIABLES Procedure | procedure | [local](APEX_WORKFLOW/UPDATE_VARIABLES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.UPDATE_VARIABLES-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
