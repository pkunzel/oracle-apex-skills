# APEX_UTIL.GET_GROUP_NAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GROUP_NAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the name of a group identified by a numeric ID.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_GROUP_NAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_GROUP_NAME (
    p_group_id IN NUMBER )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_group_id` | Identifies a numeric ID of a group in the workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Resolve an APEX group id back to its group name.

```sql
declare
    l_group_name varchar2(255);
begin
    l_group_name := apex_util.get_group_name(
        p_group_id => 2042);
end;
/
```

