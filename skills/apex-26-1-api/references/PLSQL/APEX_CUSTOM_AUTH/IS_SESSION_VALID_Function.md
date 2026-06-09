# APEX_CUSTOM_AUTH.IS_SESSION_VALID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SESSION_VALID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function is a Boolean result obtained from executing the current application's authentication scheme to determine if a valid session exists. This function returns the Boolean result of the authentication scheme's page sentry.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.IS_SESSION_VALID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.IS_SESSION_VALID
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
    l_result := apex_custom_auth.IS_SESSION_VALID;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

