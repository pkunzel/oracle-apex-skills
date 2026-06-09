# APEX_LANG.IMPORT_TEXT_MESSAGES Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.IMPORT_TEXT_MESSAGES-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This function imports text messages for an application for the language and format supplied.

## When To Use

Use this page when code needs the `APEX_LANG.IMPORT_TEXT_MESSAGES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.IMPORT_TEXT_MESSAGES (
    p_application_id     IN   NUMBER,
    p_file               IN   CLOB,
    p_format             IN   t_export_format  DEFAULT c_export_format_xliff );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Application ID of the primary application. |
| `p_file` | The clob data to import. |
| `p_format` | Format of the clob data ( c_export_format_xliff or c_export_format_csv ). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.IMPORT_TEXT_MESSAGES(
        p_application_id => 1,
        p_file => to_clob('Example text'),
        p_format => null
    );
end;
/
```

