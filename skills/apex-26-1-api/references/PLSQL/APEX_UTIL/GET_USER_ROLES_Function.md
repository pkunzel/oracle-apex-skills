# APEX_UTIL.GET_USER_ROLES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_ROLES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the DEVELOPER_ROLE field stored in the named user account record.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_USER_ROLES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_USER_ROLES (
    p_username  IN  VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Identifies a user name in the account. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the developer role string for a workspace user.

```sql
declare
    l_roles varchar2(4000);
begin
    l_roles := apex_util.get_user_roles(
        p_username => 'JSMITH');
end;
/
```

