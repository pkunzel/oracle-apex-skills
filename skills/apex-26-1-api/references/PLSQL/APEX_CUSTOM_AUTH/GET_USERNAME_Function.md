# APEX_CUSTOM_AUTH.GET_USERNAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USERNAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function returns user name registered with the current Oracle APEX session in the internal sessions table. This user name is usually the same as the authenticated user running the current page.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.GET_USERNAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.GET_USERNAME
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_custom_auth.GET_USERNAME;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

