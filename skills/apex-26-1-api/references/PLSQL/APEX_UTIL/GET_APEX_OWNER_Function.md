# APEX_UTIL.GET_APEX_OWNER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.GET_APEX_OWNER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the name of the schema containing the Oracle APEX engine.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_APEX_OWNER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_APEX_OWNER RETURN VARCHAR2;
```

## Returns

The schema name which contains the APEX engine.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the parsing schema that owns the installed APEX engine.

```sql
declare
    l_apex_owner varchar2(128);
begin
    l_apex_owner := apex_util.get_apex_owner;
end;
/
```

