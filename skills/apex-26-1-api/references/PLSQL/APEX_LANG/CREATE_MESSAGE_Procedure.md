# APEX_LANG.CREATE_MESSAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.CREATE_MESSAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this procedure to create a translatable text message for the specified application.

## When To Use

Use this page when code needs the `APEX_LANG.CREATE_MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.CREATE_MESSAGE (
    p_application_id      IN NUMBER,
    p_name                IN VARCHAR2,
    p_language            IN VARCHAR2,
    p_message_text        IN VARCHAR2,
    p_used_in_javascript  IN BOOLEAN  DEFAULT FALSE,
    p_comment             IN VARCHAR2 DEFAULT NULL,
    p_metadata            IN CLOB     DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application for which you wish to create the translatable text message. This is the ID of the primary language application. |
| `p_name` | The name of the translatable text message. |
| `p_language` | The IANA language code for the mapping. Examples include en-us , fr-ca , ja , or he . |
| `p_message_text` | The text of the translatable text message. |
| `p_used_in_javascript` | Specify if the message needs to be used directly by JavaScript code (use the apex.lang JavaScript API). |
| `p_comment` | Developer comments or notes only visible in the App Builder. |
| `p_metadata` | Additional data stored alongside the message. Note: This data is not used by Oracle APEX . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Create a translated text message that can also be consumed by JavaScript.

```sql
begin
    apex_lang.create_message(
        p_application_id     => 100,
        p_name               => 'ORDER_STATUS',
        p_language           => 'en',
        p_message_text       => 'Order %ORDER_ID is %STATUS',
        p_used_in_javascript => true,
        p_comment            => 'Shown in the order status badge.',
        p_metadata           => '{"owner":"orders"}'
    );
end;
/
```
