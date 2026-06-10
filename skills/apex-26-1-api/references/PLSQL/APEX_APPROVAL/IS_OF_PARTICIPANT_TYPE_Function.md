# APEX_APPROVAL.IS_OF_PARTICIPANT_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_OF_PARTICIPANT_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.IS_OF_PARTICIPANT_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.IS_OF_PARTICIPANT_TYPE (
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
    l_is_potential_owner boolean;
begin
    l_is_potential_owner := apex_approval.is_of_participant_type(
        p_task_id          => :P20_TASK_ID,
        p_participant_type => apex_approval.c_task_potential_owner,
        p_user             => :APP_USER
    );

    if l_is_potential_owner then
        apex_approval.claim_task(
            p_task_id => :P20_TASK_ID);
    end if;
end;
/
```
