# APEX_INSTANCE_ADMIN.REMOVE_WORKSPACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_WORKSPACE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure removes a workspace from an Oracle APEX instance.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_WORKSPACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_WORKSPACE (
    p_workspace         IN VARCHAR2,
    p_drop_users        IN VARCHAR2 DEFAULT 'N',
    p_drop_tablespaces  IN VARCHAR2 DEFAULT 'N' )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace to be removed. |
| `p_drop_users` | Y to drop the database user associated with the workspace. The default is N . |
| `p_drop_tablespaces` | Y to drop the tablespace associated with the database user associated with the workspace. The default is N . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.REMOVE_WORKSPACE(
        p_workspace => 'EXAMPLE',
        p_drop_users => 'USER',
        p_drop_tablespaces => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_instance_admin.REMOVE_WORKSPACE(
            p_workspace => 'EXAMPLE',
            p_drop_users => 'USER',
            p_drop_tablespaces => 'EXAMPLE'
        );
end;
/
```

