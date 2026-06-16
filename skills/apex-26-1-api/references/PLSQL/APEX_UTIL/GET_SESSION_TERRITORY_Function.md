# APEX_UTIL.GET_SESSION_TERRITORY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_TERRITORY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the territory setting for the current user in the current Oracle APEX session.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_SESSION_TERRITORY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_SESSION_TERRITORY
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the territory currently associated with the APEX session.

```sql
declare
    l_territory varchar2(255);
begin
    l_territory := apex_util.get_session_territory;
end;
/
```

