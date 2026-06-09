# APEX_UTIL.GET_SESSION_LANG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_LANG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the language setting for the current user in the current Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_SESSION_LANG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_SESSION_LANG
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
    l_result := apex_util.GET_SESSION_LANG;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

