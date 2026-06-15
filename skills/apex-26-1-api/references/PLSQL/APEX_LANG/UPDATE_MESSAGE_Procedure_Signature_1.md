# APEX_LANG.UPDATE_MESSAGE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.UPDATE_MESSAGE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This procedure updates a translatable text message for the specified application.

## When To Use

Use this page when code needs the `APEX_LANG.UPDATE_MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.UPDATE_MESSAGE (
  p_id             IN NUMBER,
  p_message_text   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_id` | The ID of the text message. |
| `p_message_text` | The new text for the translatable text message. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Update only the text for an existing text message by ID.

```sql
begin
    apex_lang.update_message(
        p_id           => 456789,
        p_message_text => 'Order %ORDER_ID is now %STATUS'
    );
end;
/
```
