# APEX_LANG.UPDATE_TRANSLATED_STRING Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_TRANSLATED_STRING-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this procedure to update a translated string in the seeded translation repository.

## When To Use

Use this page when code needs the `APEX_LANG.UPDATE_TRANSLATED_STRING` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.UPDATE_TRANSLATED_STRING (
    p_id        IN NUMBER,
    p_language  IN VARCHAR2
    p_string    IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_id` | The ID of the string in the translation repository. |
| `p_language` | The IANA language code for the existing translation mapping. Examples include en-us , fr-ca , ja , he . The language of the mapping cannot be updated with this procedure, only the new translation application ID. |
| `p_string` | The new value for the string in the translation repository. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.UPDATE_TRANSLATED_STRING(
        p_id => 1,
        p_language => 'EXAMPLE',
        p_string => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_lang.UPDATE_TRANSLATED_STRING(
            p_id => 1,
            p_language => 'EXAMPLE',
            p_string => 'EXAMPLE'
        );
end;
/
```

