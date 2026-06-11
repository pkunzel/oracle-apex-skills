# APEX_DEBUG.LOG_DBMS_OUTPUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_DBMS_OUTPUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This procedure writes the contents of dbms_output.get_lines to the debug log. Messages of legacy applications which use dbms_output are copied into the debug log. In order to write to the debug log, dbms_output.enable must be performed

## When To Use

Use this page when code needs the `APEX_DEBUG.LOG_DBMS_OUTPUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.LOG_DBMS_OUTPUT;
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
    dbms_output.put_line('Rows prepared: ' || :P10_ROW_COUNT);
    apex_debug.log_dbms_output;
end;
/
```
