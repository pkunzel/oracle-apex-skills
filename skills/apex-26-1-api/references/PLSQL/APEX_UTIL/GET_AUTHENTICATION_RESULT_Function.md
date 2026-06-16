# APEX_UTIL.GET_AUTHENTICATION_RESULT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AUTHENTICATION_RESULT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Use this function to retrieve the authentication result of the current session. Any authenticated user can call this function in a page request context.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_AUTHENTICATION_RESULT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_AUTHENTICATION_RESULT
RETURN NUMBER;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the custom authentication result code stored for the current session.

```sql
declare
    l_auth_result number;
begin
    l_auth_result := apex_util.get_authentication_result;

    apex_util.set_session_state('P1_AUTH_RESULT', l_auth_result);
end;
/
```

