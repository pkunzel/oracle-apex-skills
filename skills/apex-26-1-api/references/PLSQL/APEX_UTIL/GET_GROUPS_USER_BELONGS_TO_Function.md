# APEX_UTIL.GET_GROUPS_USER_BELONGS_TO Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GROUPS_USER_BELONGS_TO-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns a comma then a space separated list of group names to which the named user is a member.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_GROUPS_USER_BELONGS_TO` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_GROUPS_USER_BELONGS_TO (
   p_username IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Identifies the user name in the account. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the colon-delimited APEX groups assigned to a workspace user.

```sql
declare
    l_groups varchar2(4000);
begin
    l_groups := apex_util.get_groups_user_belongs_to(
        p_username => 'JSMITH');
end;
/
```

