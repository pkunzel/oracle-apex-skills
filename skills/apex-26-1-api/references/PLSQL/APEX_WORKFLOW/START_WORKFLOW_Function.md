# APEX_WORKFLOW.START_WORKFLOW Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.START_WORKFLOW-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function starts a new Workflow given the Workflow definition ID.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.START_WORKFLOW` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.START_WORKFLOW (
    p_application_id         IN NUMBER
                                  DEFAULT apex_application.g_flow_id,
    p_static_id              IN VARCHAR2,
    p_parameters             IN t_workflow_parameters
                                  DEFAULT c_empty_workflow_parameters,
    p_initiator              IN VARCHAR2                     DEFAULT NULL,
    p_detail_pk              IN VARCHAR2                     DEFAULT NULL,
    p_debug_level            IN apex_debug_api.t_log_level   DEFAULT NULL )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID that creates the Workflow. |
| `p_static_id` | Static ID of the Workflow definition. |
| `p_parameters` | Optional workflow parameters. |
| `p_initiator` | (Optional) Initiator information for the workflow. |
| `p_detail_pk` | (Optional) Detail Primary Key. |
| `p_debug_level` | (Optional) Debug log level for the Workflow instance being started. |

## Returns

The ID of the newly started workflow.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Start a workflow with typed workflow parameters.

```sql
declare
    l_params      apex_workflow.t_workflow_parameters;
    l_workflow_id number;
begin
    l_params(1).static_id := 'ORDER_ID';
    l_params(1).value.data_type := apex_session_state.c_data_type_varchar2;
    l_params(1).value.varchar2_value := :P10_ORDER_ID;

    l_workflow_id := apex_workflow.start_workflow(
        p_application_id => :APP_ID,
        p_static_id      => 'ORDER_FULFILLMENT',
        p_parameters     => l_params,
        p_initiator      => :APP_USER,
        p_detail_pk      => :P10_ORDER_ID,
        p_debug_level    => apex_debug_api.c_log_level_info);

    :P10_WORKFLOW_ID := l_workflow_id;
end;
/
```

