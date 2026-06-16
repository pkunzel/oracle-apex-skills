# APEX_UTIL.GET_GROUP_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GROUP_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the numeric ID of a named group in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_GROUP_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_GROUP_ID (
    p_group_name IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_group_name` | Identifies the name of a group in the workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Resolve an APEX group name to its group id.

```sql
declare
    l_group_id varchar2(255);
begin
    l_group_id := apex_util.get_group_id(
        p_group_name => 'APP_MANAGERS');
end;
/
```

