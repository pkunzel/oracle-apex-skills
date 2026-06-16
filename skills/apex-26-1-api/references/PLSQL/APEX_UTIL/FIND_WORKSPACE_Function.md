# APEX_UTIL.FIND_WORKSPACE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_WORKSPACE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the workspace name associated with a security group ID.

## When To Use

Use this page when code needs the `APEX_UTIL.FIND_WORKSPACE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.FIND_WORKSPACE (
    p_security_group_id    IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_security_group_id` | The security group ID of a workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Resolve a security group id back to a workspace name.

```sql
declare
    l_workspace varchar2(255);
begin
    l_workspace := apex_util.find_workspace(
        p_security_group_id => apex_util.find_security_group_id('MY_WORKSPACE'));
end;
/
```

