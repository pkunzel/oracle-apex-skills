# APEX_LANG.UPDATE_MESSAGE Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.UPDATE_MESSAGE-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This procedure updates a translatable text message and its attributes for the specified application.

## When To Use

Use this page when code needs the `APEX_LANG.UPDATE_MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.UPDATE_MESSAGE (
    p_id                 IN NUMBER,
    p_name               IN VARCHAR2,
    p_language           IN VARCHAR2,
    p_message_text       IN VARCHAR2,
    p_used_in_javascript IN BOOLEAN,
    p_comment            IN VARCHAR2,
    p_metadata           IN CLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_id` | The ID of the text message to be updated. |
| `p_name` | The name of the translatable text message. |
| `p_language` | The IANA language code for the mapping. Examples include en-us , fr-ca , ja , or he . |
| `p_message_text` | The text of the translatable text message. |
| `p_used_in_javascript` | Specify if the message needs to be used directly by JavaScript code (use the apex.lang JavaScript API). |
| `p_comment` | Developer comments or notes only visible in the App Builder. |
| `p_metadata` | Additional data stored alongside with the message. Note: This data is not used by Oracle APEX . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.UPDATE_MESSAGE(
        p_id => 1,
        p_name => 'EXAMPLE',
        p_language => 'EXAMPLE',
        p_message_text => to_clob('Example text'),
        p_used_in_javascript => true,
        p_comment => 'EXAMPLE',
        p_metadata => to_clob('Example text')
    );
end;
/
```

