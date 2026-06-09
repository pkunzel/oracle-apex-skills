# APEX_LANG.EXPORT_TEXT_MESSAGES Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.EXPORT_TEXT_MESSAGES-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Returns a file containing text messages for translation for the language code supplied.

## When To Use

Use this page when code needs the `APEX_LANG.EXPORT_TEXT_MESSAGES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.EXPORT_TEXT_MESSAGES (
    p_application_id     IN   NUMBER,
    p_lang_code          IN   VARCHAR2,
    p_format             in   t_export_format  DEFAULT c_export_format_xliff )
    RETURN clob;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Application ID of the primary application. |
| `p_lang_code` | The IANA language code for the existing translation mapping (such as en-us , fr-ca , ja , he ). |
| `p_format` | Format for the file ( c_export_format_xliff or c_export_format_csv ). |

## Returns

A clob containing file in the format supplied.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_lang.EXPORT_TEXT_MESSAGES(
        p_application_id => 1,
        p_lang_code => 'EXAMPLE',
        p_format => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

