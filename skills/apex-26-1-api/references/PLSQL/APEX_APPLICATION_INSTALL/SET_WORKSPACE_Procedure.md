# APEX_APPLICATION_INSTALL.SET_WORKSPACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_WORKSPACE_Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the workspace ID for an application to be imported.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_WORKSPACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_WORKSPACE (
   p_workspace IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The workspace name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.set_workspace(
        p_workspace => 'SALES_WS'
    );
end;
/
```
