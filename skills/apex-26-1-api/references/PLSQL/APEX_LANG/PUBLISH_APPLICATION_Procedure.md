# APEX_LANG.PUBLISH_APPLICATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUBLISH_APPLICATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this procedure to publish the translated version of an application. This procedure creates an underlying, hidden replica of the primary application and merges the strings from the translation repository in this new application. Perform a seed and publish process each time you want to update the translated version of your application and synchronize it with the primary application.

## When To Use

Use this page when code needs the `APEX_LANG.PUBLISH_APPLICATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.PUBLISH_APPLICATION (
    p_application_id           IN NUMBER,
    p_language                 IN VARCHAR2,
    p_new_trans_application_id IN NUMBER DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application for which you want to publish and create the translated version. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing translation mapping. Examples include en-us , fr-ca , ja , he . |
| `p_new_trans_application_id` | (Optional) Specifies a new application ID for the language being published. When provided, it updates the existing language-mapping with the new application ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Publish a translated application after seeding and applying translated strings.

```sql
begin
    apex_lang.publish_application(
        p_application_id => 100,
        p_language       => 'de'
    );
end;
/
```
