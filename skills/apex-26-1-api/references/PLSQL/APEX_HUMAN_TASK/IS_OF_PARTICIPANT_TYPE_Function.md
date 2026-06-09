# APEX_HUMAN_TASK.IS_OF_PARTICIPANT_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.IS_OF_PARTICIPANT_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function checks whether the given user is of a certain participant type for a Task.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.IS_OF_PARTICIPANT_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.IS_OF_PARTICIPANT_TYPE (
    p_task_id                IN NUMBER,
    p_participant_type       IN t_task_participant_type
                                DEFAULT c_task_potential_owner,
    p_user                   IN VARCHAR2
                                DEFAULT wwv_flow_security.g_user)
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_participant_type` | The participant type. Can be set to POTENTIAL_OWNER (default) or BUSINESS_ADMIN . |
| `p_user` | The user to check for. Default is logged-in user. |

## Returns

TRUE if the user given by p_user is a participant of given participant type for a given task, FALSE otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_human_task.IS_OF_PARTICIPANT_TYPE(
        p_task_id => 1,
        p_participant_type => null,
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

    l_result := apex_human_task.IS_OF_PARTICIPANT_TYPE(
            p_task_id => 1,
            p_participant_type => null,
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

