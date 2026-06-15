# APEX_JSON.FLUSH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FLUSH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure flushes pending changes. Note that close procedures automatically flush.

## When To Use

Use this page when code needs the `APEX_JSON.FLUSH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.FLUSH
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Flush JSON written to the HTP buffer while generating a response.

```sql
begin
    apex_json.open_object;
    apex_json.write('status', 'queued');
    apex_json.flush;
    apex_json.write('detail', 'export job accepted');
    apex_json.close_object;
end;
/
```
