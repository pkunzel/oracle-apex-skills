# APEX_INSTANCE_ADMIN.RESERVE_WORKSPACE_APP_IDS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESERVE_WORKSPACE_APP_IDS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure permanently reserves the IDs of websheet and database applications in a given workspace. Even if the workspace and its applications get removed, developers can not create other applications with one of these IDs.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.RESERVE_WORKSPACE_APP_IDS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.RESERVE_WORKSPACE_APP_IDS (
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
    apex_instance_admin.RESERVE_WORKSPACE_APP_IDS(
        p_workspace_id => 1
    );
end;
/
```

