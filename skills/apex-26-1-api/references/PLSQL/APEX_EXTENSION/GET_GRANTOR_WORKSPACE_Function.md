# APEX_EXTENSION.GET_GRANTOR_WORKSPACE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.GET_GRANTOR_WORKSPACE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXTENSION](../APEX_EXTENSION.md)

## Purpose

This function gets current grantor workspace name.

## When To Use

Use this page when code needs the `APEX_EXTENSION.GET_GRANTOR_WORKSPACE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXTENSION.GET_GRANTOR_WORKSPACE
    RETURN VARCHAR2;
```

## Returns

Workspace name of grantor workspace.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Use this inside an extension app to detect the workspace that granted the extension access.

```sql
declare
    l_grantor_workspace varchar2(255);
begin
    l_grantor_workspace := apex_extension.get_grantor_workspace;

    sys.dbms_output.put_line('Granted by workspace: ' || l_grantor_workspace);
end;
/
```
