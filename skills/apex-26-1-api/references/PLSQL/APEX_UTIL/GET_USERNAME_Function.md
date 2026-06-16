# APEX_UTIL.GET_USERNAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USERNAME-Function-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the user name of a user account identified by a numeric ID.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_USERNAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_USERNAME (
    p_userid    IN NUMBER )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_userid` | Identifies the numeric ID of a user account in the workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Resolve a numeric APEX user id back to a username.

```sql
declare
    l_username varchar2(255);
begin
    l_username := apex_util.get_username(
        p_userid => apex_util.get_user_id('JSMITH'));
end;
/
```

