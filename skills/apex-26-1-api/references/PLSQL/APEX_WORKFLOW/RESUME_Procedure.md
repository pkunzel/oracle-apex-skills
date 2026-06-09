# APEX_WORKFLOW.RESUME Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.RESUME-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure resumes a Workflow. Only suspended Workflow Instances can be resumed.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.RESUME` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.RESUME (
    p_instance_id            IN NUMBER,
    p_activity_static_id     IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |
| `p_activity_static_id` | Static ID of the Activity to resume the Workflow or NULL if to resume at current activity. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_workflow.RESUME(
        p_instance_id => 1,
        p_activity_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

