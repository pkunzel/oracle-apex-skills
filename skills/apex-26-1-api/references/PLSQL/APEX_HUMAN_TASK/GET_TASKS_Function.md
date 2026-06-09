# APEX_HUMAN_TASK.GET_TASKS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASKS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function gets the tasks of a user depending on the given context.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_TASKS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_TASKS (
    p_context            IN VARCHAR2 DEFAULT apex_human_task.c_context_my_tasks,
    p_user               IN VARCHAR2 DEFAULT apex_application.g_user,
    p_task_id            IN NUMBER   DEFAULT NULL,
    p_application_id     IN NUMBER   DEFAULT NULL,
    p_show_expired_tasks IN VARCHAR2 DEFAULT 'N' )
RETURN apex_t_approval_tasks pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | The list context. Default is MY_TASKS . |
| `p_user` | The user to check for. Default is logged-in user. Requires p_context set to MY_TASKS , ADMIN_TASKS or INITIATED_BY_ME . |
| `p_task_id` | Filter for a task ID instead of a user. Default is null. Requires p_context set to SINGLE_TASK . |
| `p_application_id` | Filter for an application. Default is null (all applications). |
| `p_show_expired_tasks` | If set to Y the tasks returned include tasks which are in Expired state. |

## Returns

A table of tasks (type apex_t_approval_tasks ) containing the following columns: actual_owner varchar2(255) actual_owner_lower varchar2(255) app_id number badge_css_classes varchar2(255) badge_text varchar2(255) created_ago varchar2(255) created_ago_hours number created_by varchar2(255) created_on timestamp with time zone detail_pk details_app_id number details_app_name varchar2(255) details_link_target varchar2(4000) due_code varchar2(32) due_in varchar2(255) due_in_hours number due_on timestamp with time zone initiator varchar2(255) initiator_can_complete varchar2(1) initiator_lower varchar2(255) is_completed varchar2(1) last_updated_by varchar2(255) last_updated_on timestamp with time zone outcome varchar2(255) outcome_code varchar2(32) priority number(1) priority_level varchar2(255) state varchar2(255) state_code varchar2(32) subject varchar2(1000) task_def_id number task_def_name varchar2(255) task_def_static_id varchar2(255) task_id number task_type varchar2(8) tenant_id varchar2(32)

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_APPROVAL_TASKS;
begin
    l_result := apex_human_task.GET_TASKS(
        p_context => to_clob('Example text'),
        p_user => 'USER',
        p_task_id => 1,
        p_application_id => 1,
        p_show_expired_tasks => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_APPROVAL_TASKS;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_human_task.GET_TASKS(
            p_context => to_clob('Example text'),
            p_user => 'USER',
            p_task_id => 1,
            p_application_id => 1,
            p_show_expired_tasks => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

