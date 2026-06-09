# APEX_MAIL.ADD_ATTACHMENT Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTACHMENT-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This procedure adds an attachment of type BLOB to an outbound email message. To add multiple attachments to a single email, APEX_MAIL.ADD_ATTACHMENT can be called repeatedly for a single email message.

## When To Use

Use this page when code needs the `APEX_MAIL.ADD_ATTACHMENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.ADD_ATTACHMENT (
    p_mail_id           IN NUMBER,
    p_attachment        IN BLOB,
    p_filename          IN VARCHAR2,
    p_mime_type         IN VARCHAR2
    p_content_id        IN VARCHAR2    DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_mail_id` | The numeric ID associated with the email. This is the numeric identifier returned from the call to APEX_MAIL.SEND to compose the email body. |
| `p_attachment` | A BLOB variable containing the binary content to be attached to the email message. |
| `p_filename` | The filename associated with the email attachment. |
| `p_mime_type` | A valid MIME type (or Internet media type) to associate with the email attachment. |
| `p_content_id` | An optional identifier for the attachment. If non-null, then the file attaches inline. That attachment may then be referenced in the HTML of the email body by using the cid . Note: Be aware that automatic displaying of inlined images may not be supported by all e-mail clients. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_mail.ADD_ATTACHMENT(
        p_mail_id => 1,
        p_attachment => null,
        p_filename => 'EXAMPLE',
        p_mime_type => 'EXAMPLE',
        p_content_id => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_mail.ADD_ATTACHMENT(
            p_mail_id => 1,
            p_attachment => null,
            p_filename => 'EXAMPLE',
            p_mime_type => 'EXAMPLE',
            p_content_id => to_clob('Example text')
        );
end;
/
```

