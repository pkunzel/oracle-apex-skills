# APEX_UTIL.SET_PARSING_SCHEMA_FOR _REQUEST Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PARSING_SCHEMA_FOR_REQUEST-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure changes the parsing user for the current page view to another workspace schema. You can call this procedure only from within the application's Initialization PL/SQL Code.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_PARSING_SCHEMA_FOR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_PARSING_SCHEMA_FOR_REQUEST (
    p_schema IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_schema` | The new parsing schema. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_PARSING_SCHEMA_FOR(
        p_schema => 'EXAMPLE'
    );
end;
/
```

