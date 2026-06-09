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

```sql
begin
    apex_workflow.UPDATE_VARIABLES(
        p_instance_id => 1,
        p_changed_params => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_workflow.UPDATE_VARIABLES(
            p_instance_id => 1,
            p_changed_params => null
        );
end;
/
```

