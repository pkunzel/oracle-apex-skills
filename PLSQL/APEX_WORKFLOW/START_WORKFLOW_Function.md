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

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_workflow.START_WORKFLOW(
        p_application_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_parameters => null,
        p_initiator => 'EXAMPLE',
        p_detail_pk => 'EXAMPLE',
        p_debug_level => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result NUMBER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_workflow.START_WORKFLOW(
            p_application_id => 1,
            p_static_id => 'EXAMPLE_STATIC_ID',
            p_parameters => null,
            p_initiator => 'EXAMPLE',
            p_detail_pk => 'EXAMPLE',
            p_debug_level => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

