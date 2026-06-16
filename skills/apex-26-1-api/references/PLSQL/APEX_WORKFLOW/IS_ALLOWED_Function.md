# APEX_WORKFLOW.IS_ALLOWED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.IS_ALLOWED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function checks whether the given user is allowed to perform a certain operation on a Workflow.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.IS_ALLOWED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.IS_ALLOWED (
    p_instance_id            IN NUMBER,
    p_operation              IN wwv_flow_workflow_api.t_workflow_operation,
    p_user                   IN VARCHAR2 DEFAULT wwv_flow_security.g_user )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | The Workflow ID. |
| `p_operation` | The operation to check. |
| `p_user` | The user to check for. Default is logged-in user. |

## Returns

TRUE if the user given by p_user is allowed to perform the operation given by p_operation . Otherwise FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Check operation permission before terminating a workflow.

```sql
begin
    if not apex_workflow.is_allowed(
              p_instance_id => :P30_WORKFLOW_ID,
              p_operation   => apex_workflow.c_workflow$_op_terminate,
              p_user        => :APP_USER)
    then
        raise_application_error(-20000, 'Not authorized to terminate this workflow.');
    end if;
end;
/
```

