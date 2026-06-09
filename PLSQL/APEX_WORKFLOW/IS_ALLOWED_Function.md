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

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_workflow.IS_ALLOWED(
        p_instance_id => 1,
        p_operation => null,
        p_user => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_workflow.IS_ALLOWED(
            p_instance_id => 1,
            p_operation => null,
            p_user => 'USER'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

