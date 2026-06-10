# APEX_APPLICATION_INSTALL.SET_WORKSPACE_ID Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to set the workspace ID for the application to be imported.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_WORKSPACE_ID` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_WORKSPACE_ID (
    p_workspace_id  IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace_id` | The workspace ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.set_workspace_id(
        p_workspace_id => apex_util.find_security_group_id('SALES_WS')
    );
end;
/
```
