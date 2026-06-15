# APEX_LANG.CREATE_LANGUAGE_MAPPING Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_LANGUAGE_MAPPING-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this procedure to create the language mapping for the translation of an application. Translated applications are published as new applications, but are not directly editable in the App Builder .

## When To Use

Use this page when code needs the `APEX_LANG.CREATE_LANGUAGE_MAPPING` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.CREATE_LANGUAGE_MAPPING (
    p_application_id                IN NUMBER,
    p_language                      IN VARCHAR2,
    p_translation_application_id    IN NUMBER,
    p_direction_right_to_left       IN BOOLEAN  DEFAULT FALSE,
    p_image_directory               IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application for which you want to create the language mapping. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the mapping. Examples include en-us , fr-ca , ja , he . |
| `p_translation_application_id` | Unique integer value for the ID of the underlying translated application. This number cannot end in 0. |
| `p_direction_right_to_left` | Specify document direction: TRUE - right-to-left FALSE - left-to-right NULL - default direction of the language |
| `p_image_directory` | Specify the directory where images are stored. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Create a translation mapping from the primary application to a translated application.

```sql
begin
    apex_lang.create_language_mapping(
        p_application_id             => 100,
        p_language                   => 'de',
        p_translation_application_id => 1100,
        p_direction_right_to_left    => false,
        p_image_directory            => '#APP_FILES#de/'
    );
end;
/
```
