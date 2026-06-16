# APEX_UTIL.GET_CURRENT_USER_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CURRENT_USER_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the numeric user ID of the current user.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_CURRENT_USER_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_CURRENT_USER_ID
RETURN NUMBER;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the numeric APEX user id for the current authenticated user.

```sql
declare
    l_user_id number;
begin
    l_user_id := apex_util.get_current_user_id;
end;
/
```

