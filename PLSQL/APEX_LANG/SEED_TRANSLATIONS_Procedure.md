# APEX_LANG.SEED_TRANSLATIONS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEED_TRANSLATIONS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This procedure seeds the translation repository for the specified application and language. This procedure populates the translation repository with all of the new, updated, and removed translatable strings from your application. Perform a seed and publish process each time you want to update the translated version of your application and synchronize it with the primary application.

## When To Use

Use this page when code needs the `APEX_LANG.SEED_TRANSLATIONS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.SEED_TRANSLATIONS (
    p_application_id    IN NUMBER,
    p_language          IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application for which you want to update the translation repository. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing translation mapping. Examples include en-us , fr-ca , ja , he . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.SEED_TRANSLATIONS(
        p_application_id => 1,
        p_language => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_lang.SEED_TRANSLATIONS(
            p_application_id => 1,
            p_language => 'EXAMPLE'
        );
end;
/
```

