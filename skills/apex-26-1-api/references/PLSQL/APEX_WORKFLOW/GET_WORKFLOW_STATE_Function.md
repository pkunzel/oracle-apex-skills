# APEX_WORKFLOW.GET_WORKFLOW_STATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_WORKFLOW_STATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function gets the current state of the workflow.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.GET_WORKFLOW_STATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.GET_WORKFLOW_STATE (
    p_instance_id            IN NUMBER )
RETURN t_workflow_state;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |

## Returns

t_workflow_state

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Branch on the current workflow state using the documented constants.

```sql
declare
    l_state apex_workflow.t_workflow_state;
begin
    l_state := apex_workflow.get_workflow_state(
        p_instance_id => :P20_WORKFLOW_ID);

    if l_state = apex_workflow.c_state_faulted then
        :P20_CAN_RETRY := 'Y';
    end if;
end;
/
```

