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
    l_is_allowed boolean;
begin
    l_is_allowed := apex_approval.is_allowed(
        p_task_id         => :P20_TASK_ID,
        p_operation       => apex_approval.c_task_op_delegate,
        p_user            => :APP_USER,
        p_new_participant => :P20_NEW_OWNER
    );

    if l_is_allowed then
        apex_approval.delegate_task(
            p_task_id => :P20_TASK_ID,
            p_to_user => :P20_NEW_OWNER);
    end if;
end;
/
```
