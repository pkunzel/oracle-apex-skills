# APEX_INSTANCE_ADMIN.FREE_WORKSPACE_APP_IDS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FREE_WORKSPACE_APP_IDS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure removes the reservation of application IDs for a given workspace ID. Use this procedure to undo a reservation, when the reservation is not necessary anymore because it happened by mistake or the workspace no longer exists. To reserve application IDs for a given workspace, see RESERVE_WORKSPACE_APP_IDS Procedure .

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.FREE_WORKSPACE_APP_IDS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.FREE_WORKSPACE_APP_IDS (
    p_workspace_id IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace_id` | The unique ID of the workspace. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.free_workspace_app_ids(
        p_workspace_id => 123456789
    );
end;
/
```
