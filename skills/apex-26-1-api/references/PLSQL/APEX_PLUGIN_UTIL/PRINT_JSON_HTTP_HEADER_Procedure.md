# APEX_PLUGIN_UTIL.PRINT_JSON_HTTP_HEADER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_JSON_HTTP_HEADER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs a standard HTTP header for a JSON output.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_JSON_HTTP_HEADER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_JSON_HTTP_HEADER;
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
    apex_plugin_util.PRINT_JSON_HTTP_HEADER;
end;
/
```

