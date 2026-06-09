# APEX_INSTANCE_ADMIN.REVOKE_EXTENSION_WORKSPACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REVOKE_EXTENSION_WORKSPACE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure revokes an existing grant from an extension workspace.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REVOKE_EXTENSION_WORKSPACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REVOKE_EXTENSION_WORKSPACE (
    p_from_workspace      IN VARCHAR2,
    p_to_workspace        IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_from_workspace` | Name of workspace granting access. |
| `p_to_workspace` | Name of extension workspace. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.REVOKE_EXTENSION_WORKSPACE(
        p_from_workspace => 'EXAMPLE',
        p_to_workspace => 'EXAMPLE'
    );
end;
/
```

