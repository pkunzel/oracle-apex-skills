# APEX_WORKFLOW.IS_OF_PARTICIPANT_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.IS_OF_PARTICIPANT_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function checks whether the given user is of a certain participant type for a Workflow.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.IS_OF_PARTICIPANT_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.IS_OF_PARTICIPANT_TYPE (
    p_instance_id            IN NUMBER,
    p_participant_type       IN t_workflow_participant_type,
    p_user                   IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | The Workflow ID. |
| `p_participant_type` | The participant type. |
| `p_user` | The user to check for. |

## Returns

TRUE if the user given by p_user is a participant of given participant type for a given workflow. Otherwise FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_workflow.IS_OF_PARTICIPANT_TYPE(
        p_instance_id => 1,
        p_participant_type => null,
        p_user => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

