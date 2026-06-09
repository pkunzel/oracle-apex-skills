# APEX_APPROVAL.IS_ALLOWED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_ALLOWED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.IS_ALLOWED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.IS_ALLOWED (
    p_task_id                IN NUMBER,
    p_operation              IN apex_approval.t_task_operation,
    p_user                   IN VARCHAR2 DEFAULT apex_application.g_user,
    p_new_participant        IN VARCHAR2 DEFAULT NULL )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_operation` | The operation to check (see constants c_task_op_ ### ). |
| `p_user` | The user to check for. Default is logged in user. |
| `p_new_participant` | (Optional) The new assignee in case of Delegate operation. |

## Returns

TRUE if the user given by p_user is permitted to perform the operation given by p_operation , FALSE otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_approval.IS_ALLOWED(
        p_task_id => 1,
        p_operation => null,
        p_user => 'USER',
        p_new_participant => 'EXAMPLE'
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

    l_result := apex_approval.IS_ALLOWED(
            p_task_id => 1,
            p_operation => null,
            p_user => 'USER',
            p_new_participant => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

