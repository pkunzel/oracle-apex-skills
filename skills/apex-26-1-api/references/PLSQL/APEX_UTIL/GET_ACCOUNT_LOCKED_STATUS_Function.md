# APEX_UTIL.GET_ACCOUNT_LOCKED_STATUS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ACCOUNT_LOCKED_STATUS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns TRUE if the account is locked and FALSE if the account is unlocked. Must be run by an authenticated workspace administrator in a page request context.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_ACCOUNT_LOCKED_STATUS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_ACCOUNT_LOCKED_STATUS (
    p_user_name     IN VARCHAR2 )
    RETURN BOOLEAN;
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

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_util.GET_ACCOUNT_LOCKED_STATUS(
        p_user_name => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

