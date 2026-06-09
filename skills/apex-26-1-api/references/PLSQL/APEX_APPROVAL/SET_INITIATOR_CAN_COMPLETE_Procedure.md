# APEX_APPROVAL.SET_INITIATOR_CAN_COMPLETE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_INITIATOR_CAN_COMPLETE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.SET_INITIATOR_CAN_COMPLETE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.SET_INITIATOR_CAN_COMPLETE (
    p_task_id                   IN NUMBER,
    p_initiator_can_complete    IN BOOLEAN )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The task ID. |
| `p_initiator_can_complete` | TRUE if the initiator is permitted to also approve or reject the task. Otherwise, FALSE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_approval.SET_INITIATOR_CAN_COMPLETE(
        p_task_id => 1,
        p_initiator_can_complete => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_approval.SET_INITIATOR_CAN_COMPLETE(
            p_task_id => 1,
            p_initiator_can_complete => true
        );
end;
/
```

