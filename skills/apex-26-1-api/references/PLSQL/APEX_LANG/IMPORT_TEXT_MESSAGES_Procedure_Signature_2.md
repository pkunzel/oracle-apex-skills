# APEX_LANG.IMPORT_TEXT_MESSAGES Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.IMPORT_TEXT_MESSAGES-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Imports text messages for an application for all files contained in the ZIP supplied.

## When To Use

Use this page when code needs the `APEX_LANG.IMPORT_TEXT_MESSAGES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.IMPORT_TEXT_MESSAGES (
    p_application_id     IN   NUMBER,
    p_zip_file           IN   BLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Application ID of the primary application. |
| `p_zip_file` | The zipped blob data to import. |

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
        p_zip_file => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_lang.IMPORT_TEXT_MESSAGES(
            p_application_id => 1,
            p_zip_file => null
        );
end;
/
```

