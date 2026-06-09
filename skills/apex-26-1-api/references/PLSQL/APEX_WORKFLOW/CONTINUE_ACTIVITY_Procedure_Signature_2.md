# APEX_WORKFLOW.CONTINUE_ACTIVITY Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.CONTINUE_ACTIVITY-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure continues the Workflow at the given activity. The activity must be in "WAITING" state.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.CONTINUE_ACTIVITY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.CONTINUE_ACTIVITY (
    p_instance_id            IN NUMBER,
    p_activity_instance_id   IN NUMBER,
    p_activity_params        IN wwv_flow_global.vc_map,
    p_activity_status        IN t_activity_status DEFAULT
                                         c_activity_status_success);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |
| `p_activity_instance_id` | ID of the activity instance. |
| `p_activity_params` | The parameters returned as part of the activity execution. If these parameters correspond to Workflow variables, the values of those variables are updated with what is provided here before the workflow continues to the next activity. |
| `p_activity_status` | The status of the activity. Default SUCCESS . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_workflow.CONTINUE_ACTIVITY(
        p_instance_id => 1,
        p_activity_instance_id => 1,
        p_activity_params => null,
        p_activity_status => null
    );
end;
/
```

