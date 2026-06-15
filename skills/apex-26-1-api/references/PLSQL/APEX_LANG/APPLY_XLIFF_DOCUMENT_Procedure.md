# APEX_LANG.APPLY_XLIFF_DOCUMENT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPLY_XLIFF_DOCUMENT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This procedure applies the specified XLIFF document for the specified language to the translation repository.

## When To Use

Use this page when code needs the `APEX_LANG.APPLY_XLIFF_DOCUMENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.APPLY_XLIFF_DOCUMENT (
    p_application_id    IN NUMBER,
    p_language          IN VARCHAR2,
    p_document          IN CLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Application ID of the primary application. |
| `p_language` | The IANA language code for the existing translation mapping (such as en-us , fr-ca , ja , he ). |
| `p_document` | The XLIFF document containing the translation. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Apply an edited XLIFF document for an existing translation mapping.

```sql
declare
    l_xliff clob := q'[
<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2"><file source-language="en" target-language="de"><body/></file></xliff>
]';
begin
    apex_lang.apply_xliff_document(
        p_application_id => 100,
        p_language       => 'de',
        p_document       => l_xliff
    );
end;
/
```
