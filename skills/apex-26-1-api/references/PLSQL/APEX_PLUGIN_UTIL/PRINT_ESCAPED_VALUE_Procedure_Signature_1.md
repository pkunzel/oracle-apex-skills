# APEX_PLUGIN_UTIL.PRINT_ESCAPED_VALUE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_ESCAPED_VALUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs the value in an escaped form and chunks big strings into smaller outputs.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_ESCAPED_VALUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_ESCAPED_VALUE (
    p_value   IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Text which should be escaped and then printed to the HTTP buffer. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Print user-visible text through PRINT_ESCAPED_VALUE when writing directly to the HTTP buffer.

```sql
begin
    sys.htp.p('<span class="status-text">');
    apex_plugin_util.print_escaped_value(:P10_STATUS_LABEL);
    sys.htp.p('</span>');
end;
/
```
