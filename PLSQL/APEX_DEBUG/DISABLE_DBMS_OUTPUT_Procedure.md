# APEX_DEBUG.DISABLE_DBMS_OUTPUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_DBMS_OUTPUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure stops writing all debug logs with dbms_output .

## When To Use

Use this page when code needs the `APEX_DEBUG.DISABLE_DBMS_OUTPUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
DISABLE_DBMS_OUTPUT;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_debug.DISABLE_DBMS_OUTPUT;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_debug.DISABLE_DBMS_OUTPUT;
end;
/
```

