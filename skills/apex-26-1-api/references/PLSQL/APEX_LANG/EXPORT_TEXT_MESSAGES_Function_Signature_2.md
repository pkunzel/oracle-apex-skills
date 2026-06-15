# APEX_LANG.EXPORT_TEXT_MESSAGES Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.EXPORT_TEXT_MESSAGES-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This function returns a ZIP file containing translation files for each translation mapping in the format supplied.

## When To Use

Use this page when code needs the `APEX_LANG.EXPORT_TEXT_MESSAGES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.EXPORT_TEXT_MESSAGES  (
    p_application_id     IN   NUMBER,
    p_format             IN   t_export_format  DEFAULT c_export_format_xliff )
    RETURN blob;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Application ID of the primary application. |
| `p_format` | Format for internal zipped files ( c_export_format_xliff or c_export_format_csv ). |

## Returns

Blob containing a ZIP file.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Export all translation mappings for an application into a ZIP BLOB.

```sql
declare
    l_zip blob;
begin
    l_zip := apex_lang.export_text_messages(
        p_application_id => 100,
        p_format         => apex_lang.c_export_format_xliff
    );

    insert into translation_zip_exports(application_id, export_blob)
    values (100, l_zip);
end;
/
```
