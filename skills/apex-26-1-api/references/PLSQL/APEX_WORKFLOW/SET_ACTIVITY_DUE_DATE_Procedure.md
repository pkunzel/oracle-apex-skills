# APEX_WORKFLOW.SET_ACTIVITY_DUE_DATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.SET_ACTIVITY_DUE_DATE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

Sets the due date of an activity instance. To change the due date of an activity instance, the workflow instance must be in a faulted or suspended state.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.SET_ACTIVITY_DUE_DATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.SET_ACTIVITY_DUE_DATE (
    p_instance_id            IN              NUMBER,
    p_activity_static_id     IN              VARCHAR2,
    p_due_date               IN              TIMESTAMP WITH TIME ZONE);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the workflow instance. |
| `p_activity_static_id` | Static ID of the activity instance. |
| `p_due_date` | The due date value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Move the due date for a waiting activity.

```sql
begin
    apex_workflow.set_activity_due_date(
        p_instance_id        => :P30_WORKFLOW_ID,
        p_activity_static_id => 'WAIT_FOR_REVIEW',
        p_due_date           => systimestamp + interval '2' day);
end;
/
```

