# APEX_MAIL.SEND Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This procedure sends an outbound email message from an application. Although you can use this procedure to pass in either a VARCHAR2 or a CLOB to p_body and p_body_html , the data types must be the same. In other words, you cannot pass a CLOB to P_BODY and a VARCHAR2 to p_body_html .

## When To Use

Use this page when code needs the `APEX_MAIL.SEND` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.SEND (
    p_to                IN    VARCHAR2,
    p_from              IN    VARCHAR2,
    p_body              IN  [ VARCHAR2 | CLOB ],
    p_body_html         IN  [ VARCHAR2 | CLOB ] DEFAULT NULL,
    p_subj              IN    VARCHAR2 DEFAULT NULL,
    p_cc                IN    VARCHAR2 DEFAULT NULL,
    p_bcc               IN    VARCHAR2 DEFAULT NULL,
    p_replyto           IN    VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_to` | Valid email address to which the email is sent (required). For multiple email addresses, use a comma-separated list. |
| `p_from` | Email address from which the email is sent (required). This email address must be a valid address. Otherwise, the message is not sent. If an instance administrator has already defined a "Default Email From Address" on the instance level, this address is always used as the "from" address. |
| `p_body` | Body of the email in plain text, not HTML (required). If a value is passed to p_body_html , then this is the only text the recipient sees. If a value is not passed to p_body_html , then this text only displays for email clients that do not support HTML or have HTML disabled. A carriage return or line feed (CRLF) must be included every 1000 characters. |
| `p_body_html` | Body of the email in HTML format. This must be a full HTML document including the and tags. A single line cannot exceed 1000 characters without a carriage return or line feed (CRLF) |
| `p_subj` | Subject of the email. |
| `p_cc` | Valid email addresses to which the email is copied. For multiple email addresses, use a comma-separated list. |
| `p_bcc` | Valid email addresses to which the email is blind copied. For multiple email addresses, use a comma-separated list. |
| `p_replyto` | Specify a valid email address to instruct recipient's email client to send human-generated replies to this address rather than the address specified in p_from . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_mail.SEND(
        p_to => 'EXAMPLE',
        p_from => 'EXAMPLE',
        p_body => to_clob('Example text'),
        p_body_html => to_clob('Example text'),
        p_subj => 'EXAMPLE',
        p_cc => 'EXAMPLE',
        p_bcc => 'EXAMPLE',
        p_replyto => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_mail.SEND(
            p_to => 'EXAMPLE',
            p_from => 'EXAMPLE',
            p_body => to_clob('Example text'),
            p_body_html => to_clob('Example text'),
            p_subj => 'EXAMPLE',
            p_cc => 'EXAMPLE',
            p_bcc => 'EXAMPLE',
            p_replyto => 'EXAMPLE'
        );
end;
/
```

