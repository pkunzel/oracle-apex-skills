# APEX_INSTANCE_ADMIN.SET_WORKSPACE_PARAMETER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_PARAMETER.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure sets the designated workspace parameter.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.SET_WORKSPACE_PARAMETER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.SET_WORKSPACE_PARAMETER (
    p_workspace     IN VARCHAR2,
    p_parameter     IN VARCHAR2,
    p_value         IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace to which you are setting the workspace parameter. |
| `p_parameter` | The parameter name which overrides the instance parameter value of the same name for this workspace. See "Instance and Workspace Parameters" and "Workspace Parameters" in Available Parameter Values . |
| `p_value` | The parameter value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.SET_WORKSPACE_PARAMETER(
        p_workspace => 'EXAMPLE',
        p_parameter => 'EXAMPLE',
        p_value => 'EXAMPLE'
    );
end;
/
```

