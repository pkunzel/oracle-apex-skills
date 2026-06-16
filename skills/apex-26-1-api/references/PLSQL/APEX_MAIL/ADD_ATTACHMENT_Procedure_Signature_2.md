# APEX_MAIL.ADD_ATTACHMENT Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTACHMENT-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This procedure adds an attachment of type CLOB to an outbound email message. To add multiple attachments to a single email, APEX_MAIL.ADD_ATTACHMENT can be called repeatedly for a single email message.

## When To Use

Use this page when code needs the `APEX_MAIL.ADD_ATTACHMENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.ADD_ATTACHMENT (
    p_mail_id                   IN    NUMBER,
    p_attachment                IN    CLOB,
    p_filename                  IN    VARCHAR2,
    p_mime_type                 IN    VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_mail_id` | The numeric ID associated with the email. This is the numeric identifier returned from the call to APEX_MAIL.SEND to compose the email body. |
| `p_attachment` | A CLOB variable containing the text content to be attached to the email message. |
| `p_filename` | The filename associated with the email attachment. |
| `p_mime_type` | A valid MIME type (or Internet media type) to associate with the email attachment. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the CLOB overload for generated text files such as CSV exports.

```sql
declare
    l_mail_id number;
    l_csv     clob;
begin
    l_csv := 'ORDER_ID,STATUS' || chr(10) ||
             :P42_ORDER_ID || ',Ready';

    l_mail_id := apex_mail.send(
        p_to   => :P42_RECIPIENT_EMAIL,
        p_from => 'reports@example.com',
        p_subj => 'Order status export',
        p_body => 'The CSV export is attached.');

    apex_mail.add_attachment(
        p_mail_id    => l_mail_id,
        p_attachment => l_csv,
        p_filename   => 'order-status.csv',
        p_mime_type  => 'text/csv');
end;
/
```
