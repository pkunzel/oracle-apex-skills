# APEX_UTIL.FIND_SECURITY_GROUP_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_SECURITY_GROUP_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the numeric security group ID of the named workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.FIND_SECURITY_GROUP_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.FIND_SECURITY_GROUP_ID (
    p_workspace    IN VARCHAR2 )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Resolve a workspace name to the security group id required by low-level APEX APIs.

```sql
declare
    l_security_group_id number;
begin
    l_security_group_id := apex_util.find_security_group_id(
        p_workspace => 'MY_WORKSPACE');

    apex_util.set_security_group_id(
        p_security_group_id => l_security_group_id);
end;
/
```

