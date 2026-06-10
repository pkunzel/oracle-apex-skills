# APEX_APPROVAL.ADD_TASK_POTENTIAL_OWNER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TASK_POTENTIAL_OWNER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.ADD_TASK_POTENTIAL_OWNER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.ADD_TASK_POTENTIAL_OWNER (
    p_task_id                IN NUMBER,
    p_potential_owner        IN VARCHAR2,
    p_identity_type          IN t_task_identity_type default c_task_identity_type_user );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_potential_owner` | The potential owner. |
| `p_identity_type` | The identity type of the potential owner. Default is USER . Note: As of this release, the only supported identity type is USER . Additional options will be added in a future release. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_approval.add_task_potential_owner(
        p_task_id         => :P20_TASK_ID,
        p_potential_owner => 'JSMITH',
        p_identity_type   => apex_approval.c_task_identity_type_user
    );
end;
/
```
