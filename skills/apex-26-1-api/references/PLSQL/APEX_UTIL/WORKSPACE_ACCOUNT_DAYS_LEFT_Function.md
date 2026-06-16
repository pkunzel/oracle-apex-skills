# APEX_UTIL.WORKSPACE_ACCOUNT_DAYS_LEFT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WORKSPACE_ACCOUNT_DAYS_LEFT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the number of days remaining before the developer or workspace administrator account password expires. Any authenticated user can run this function in a page request context.

## When To Use

Use this page when code needs the `APEX_UTIL.WORKSPACE_ACCOUNT_DAYS_LEFT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.WORKSPACE_ACCOUNT_DAYS_LEFT (
    p_user_name IN VARCHAR2 )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user name of the user account. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Show how many days remain before a workspace account expires.

```sql
declare
    l_days_left number;
begin
    l_days_left := apex_util.workspace_account_days_left(
        p_user_name => 'JSMITH');
end;
/
```

