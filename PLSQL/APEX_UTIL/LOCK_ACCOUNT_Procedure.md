# APEX_UTIL.LOCK_ACCOUNT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOCK_ACCOUNT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets a user account status to locked. Must be run by an authenticated workspace administrator in the context of a page request.

## When To Use

Use this page when code needs the `APEX_UTIL.LOCK_ACCOUNT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.LOCK_ACCOUNT (
     p_user_name IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user name of the user account. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.LOCK_ACCOUNT(
        p_user_name => 'USER'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.LOCK_ACCOUNT(
            p_user_name => 'USER'
        );
end;
/
```

