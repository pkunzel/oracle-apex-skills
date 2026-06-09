# APEX_UTIL.END_USER_ACCOUNT_DAYS_LEFT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/END_USER_ACCOUNT_DAYS_LEFT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the number of days remaining before an end user account password expires. This function may be run in a page request context by any authenticated user.

## When To Use

Use this page when code needs the `APEX_UTIL.END_USER_ACCOUNT_DAYS_LEFT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.END_USER_ACCOUNT_DAYS_LEFT (
    p_user_name     IN VARCHAR2 );
RETURN NUMBER
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
    l_result NUMBER;
begin
    l_result := apex_util.END_USER_ACCOUNT_DAYS_LEFT(
        p_user_name => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result NUMBER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.END_USER_ACCOUNT_DAYS_LEFT(
            p_user_name => 'USER'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

