# APEX_WORKFLOW.UPDATE_VARIABLES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.UPDATE_VARIABLES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure updates workflow variables of the workflow instance. If the Workflow variable has a format mask set, the same mask is applied to the value being passed here.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.UPDATE_VARIABLES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.UPDATE_VARIABLES (
    p_instance_id            IN NUMBER,
    p_changed_params         IN t_workflow_parameters );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |
| `p_changed_params` | Table of Workflow variables to be updated. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Update workflow variables while the instance is suspended or faulted.

```sql
declare
    l_params apex_workflow.t_workflow_parameters;
begin
    l_params(1).static_id := 'STATUS';
    l_params(1).value.data_type := apex_session_state.c_data_type_varchar2;
    l_params(1).value.varchar2_value := 'REOPENED';

    apex_workflow.update_variables(
        p_instance_id    => :P30_WORKFLOW_ID,
        p_changed_params => l_params);
end;
/
```

