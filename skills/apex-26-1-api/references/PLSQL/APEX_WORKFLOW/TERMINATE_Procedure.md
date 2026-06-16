# APEX_WORKFLOW.TERMINATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.TERMINATE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure terminates a Workflow. Only Active, Suspended, or Faulted Workflow instances can be terminated.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.TERMINATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.TERMINATE (
    p_instance_id            IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Terminate a workflow only after a server-side permission check.

```sql
begin
    if not apex_workflow.is_allowed(
              p_instance_id => :P30_WORKFLOW_ID,
              p_operation   => apex_workflow.c_workflow$_op_terminate,
              p_user        => :APP_USER)
    then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    apex_workflow.terminate(
        p_instance_id => :P30_WORKFLOW_ID);
end;
/
```

