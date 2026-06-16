# APEX_UTIL.GET_DEFAULT_SCHEMA Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DEFAULT_SCHEMA-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the default schema name associated with the current user.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_DEFAULT_SCHEMA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_DEFAULT_SCHEMA
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the default parsing schema for the current APEX context.

```sql
declare
    l_schema varchar2(128);
begin
    l_schema := apex_util.get_default_schema;
end;
/
```

