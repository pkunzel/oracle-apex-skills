# APEX_LANG.DELETE_LANGUAGE_MAPPING Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_LANGUAGE_MAPPING-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this procedure to delete the language mapping for the translation of an application. This procedure deletes all translated strings in the translation repository for the specified language and mapping. Translated applications are published as new applications, but are not directly editable in the App Builder .

## When To Use

Use this page when code needs the `APEX_LANG.DELETE_LANGUAGE_MAPPING` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.DELETE_LANGUAGE_MAPPING (
    p_application_id    IN NUMBER,
    p_language          IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application for which you want to delete the language mapping. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing mapping. Examples include en-us , fr-ca , ja , he . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.DELETE_LANGUAGE_MAPPING(
        p_application_id => 1,
        p_language => 'EXAMPLE'
    );
end;
/
```

