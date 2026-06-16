# APEX_UTIL.CHANGE_PASSWORD_ON_FIRST_USE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_PASSWORD_ON_FIRST_USE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function enables a developer to check whether this property is enabled or disabled for an end user account.

## When To Use

Use this page when code needs the `APEX_UTIL.CHANGE_PASSWORD_ON_FIRST_USE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CHANGE_PASSWORD_ON_FIRST_USE (
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

Check whether an APEX account must change its password on the next sign-in.

```sql
declare
    l_required boolean;
begin
    l_required := apex_util.change_password_on_first_use(
        p_user_name => 'JSMITH');

    if l_required then
        apex_util.set_session_state('P10_PASSWORD_ACTION', 'CHANGE_REQUIRED');
    end if;
end;
/
```

