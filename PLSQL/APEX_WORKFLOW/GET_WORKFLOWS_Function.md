# APEX_WORKFLOW.GET_WORKFLOWS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_WORKFLOWS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function gets the workflows of a user depending on the given context. Context can be MY_WORKFLOWS , ADMIN_WORKFLOWS , or SINGLE_WORKFLOW .

## When To Use

Use this page when code needs the `APEX_WORKFLOW.GET_WORKFLOWS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.GET_WORKFLOWS (
    p_context            IN VARCHAR2 DEFAULT 
                                   apex_workflow_api.c_context_my_workflows,
    p_user               IN VARCHAR2 DEFAULT apex_security.g_user,
    p_workflow_id        IN NUMBER   DEFAULT NULL,
    p_application_id     IN NUMBER   DEFAULT NULL )
RETURN apex_t_workflow_instances pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | The list context. Default is MY_WORKFLOWS . |
| `p_user` | The user to check for. Default is logged-in user. Needs p_context set to MY_WORKFLOWS , ADMIN_WORKFLOWS or INITIATED_BY_ME . |
| `p_workflow_id` | Filter for a workflow ID instead of a user. Default is NULL . Needs p_context set to SINGLE_WORKFLOW . |
| `p_application_id` | Filter for an application. Default is NULL (all applications). |

## Returns

A table of workflows (type apex_t_workflow_instances ) containing the following columns: badge_css_classes varchar2(255) badge_state varchar2(255) badge_text varchar2(255) created_ago varchar2(255) created_ago_hours number created_by varchar2(255) created_on timestamp with time zone duration_seconds number end_time timestamp with time zone initiator varchar2(255) initiator_lower varchar2(255) is_completed varchar2(1) is_dev_mode varchar2(1) is_terminated varchar2(1) last_updated_by varchar2(255) last_updated_on timestamp with time zone parent_activity_id number parent_id number start_time timestamp with time zone state varchar2(255) state_code varchar2(32) tenant_id varchar2(32) title varchar2(4000) workflow_def_app_id number workflow_def_app_name varchar2(255) workflow_def_id number workflow_def_name varchar2(255) workflow_def_static_id varchar2(255) workflow_id number workflow_version varchar2(255) workflow_version_id number

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_WORKFLOW_INSTANCES;
begin
    l_result := apex_workflow.GET_WORKFLOWS(
        p_context => to_clob('Example text'),
        p_user => 'USER',
        p_workflow_id => 1,
        p_application_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_WORKFLOW_INSTANCES;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_workflow.GET_WORKFLOWS(
            p_context => to_clob('Example text'),
            p_user => 'USER',
            p_workflow_id => 1,
            p_application_id => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

