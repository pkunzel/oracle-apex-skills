# APEX_HUMAN_TASK.GET_TASK_PARAMETER_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_PARAMETER_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function gets the value of a Task parameter. This function can be used in SQL or PL/SQL to get the value of a Task parameter for a given task.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_TASK_PARAMETER_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_TASK_PARAMETER_VALUE (
    p_task_id                IN NUMBER,
    p_param_static_id        IN VARCHAR2,
    p_ignore_not_found       IN BOOLEAN DEFAULT FALSE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static ID of the parameter. |
| `p_ignore_not_found` | If set to FALSE (default) and no data is found, a no_data_found exception raises. If set to TRUE and no data is found, returns NULL . |

## Returns

The task parameter value for the given static ID or null.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_human_task.GET_TASK_PARAMETER_VALUE(
        p_task_id => 1,
        p_param_static_id => 'EXAMPLE_STATIC_ID',
        p_ignore_not_found => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_human_task.GET_TASK_PARAMETER_VALUE(
            p_task_id => 1,
            p_param_static_id => 'EXAMPLE_STATIC_ID',
            p_ignore_not_found => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

