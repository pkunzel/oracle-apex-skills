# APEX_AUTHENTICATION.IS_PUBLIC_USER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_PUBLIC_USER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This function checks if the user is not authenticated in the session. Returns FALSE if the user is already logged in or TRUE if the user is not authenticated.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.IS_PUBLIC_USER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.IS_PUBLIC_USER
    RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_authentication.IS_PUBLIC_USER;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

