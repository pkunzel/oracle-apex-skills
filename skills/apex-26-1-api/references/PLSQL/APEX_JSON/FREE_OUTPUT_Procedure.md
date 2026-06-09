# APEX_JSON.FREE_OUTPUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FREE_OUTPUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

Frees output resources. Call this procedure after process if you are using INITIALIZE_CLOB_OUTPUT to write to a temporary CLOB .

## When To Use

Use this page when code needs the `APEX_JSON.FREE_OUTPUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.FREE_OUTPUT;
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
    apex_json.FREE_OUTPUT;
end;
/
```

