# APEX_INSTANCE_ADMIN.SET_WORKSPACE_CONSUMER_GROUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_CONSUMER_GROUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Sets a Resource Manager Consumer Group to a workspace.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.SET_WORKSPACE_CONSUMER_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
SET_WORKSPACE_CONSUMER_GROUP (
    p_workspace IN VARCHAR2,
    p_rm_consumer_group IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | This is the name of the workspace for which the resource consumer group is to be set. |
| `p_rm_consumer_group` | The parameter P_RM_CONSUMER_GROUP is the Oracle Database Resource Manager Consumer Group name. The consumer group does not have to exist at the time this procedure is invoked. But if the Resource Manager Consumer Group is set for a workspace and the consumer group does not exist, then an error will be raised when anyone attempts to login to this workspace or execute any application in the workspace. If the value of P_RM_CONSUMER_GROUP is null, then the Resource Manager consumer group associated with the specified workspace is cleared. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.SET_WORKSPACE_CONSUMER_GROUP(
        p_workspace => 'EXAMPLE',
        p_rm_consumer_group => 'EXAMPLE'
    );
end;
/
```

