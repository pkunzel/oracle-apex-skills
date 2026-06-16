# APEX_MAIL.SEND Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This procedure adds a mail to the mail queue of Oracle APEX . The mail is based on an email template where the placeholder values specified as JSON string are substituted.

## When To Use

Use this page when code needs the `APEX_MAIL.SEND` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.SEND (
    p_template_static_id IN VARCHAR2,    
    p_placeholders       IN CLOB,
    p_to                 IN VARCHAR2,
    p_cc                 IN VARCHAR2 DEFAULT NULL,
    p_bcc                IN VARCHAR2 DEFAULT NULL,
    p_from               IN VARCHAR2 DEFAULT NULL,
    p_replyto            IN VARCHAR2 DEFAULT NULL,
    p_application_id     IN NUMBER   DEFAULT apex_application.g_flow_id );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_template_static_id` | Static identifier string, used to identify the shared component email template. |
| `p_placeholders` | JSON string representing the placeholder names along with the values, to be substituted. |
| `p_to` | (Required) Valid email address to which the email is sent. For multiple email addresses, use a comma-separated list. |
| `p_cc` | Valid email addresses to which the email is copied. For multiple email addresses, use a comma-separated list. |
| `p_bcc` | Valid email addresses to which the email is blind copied. For multiple email addresses, use a comma-separated list. |
| `p_from` | This must be a valid email address from which the email is sent. If p_from is not provided: the "Application Email From Address" is used (if provided under Application Definition) otherwise, p_replyto is used (if provided) else, p_to is used If p_to or p_replyto contain multiple email addresses, p_from is required. If an instance administrator has already defined a "Default Email From Address" on the instance level, this address is always used as the "from" address, regardless of whether p_from is provided. |
| `p_replyto` | Specify a valid email address to instruct recipient's email client to send human-generated replies to this address rather than the address specified in p_from . You can use this parameter as follows: If you omit the p_replyto parameter, the Reply-To mail header is set to the value specified in the p_from parameter If you include the p_replyto parameter, but provide a NULL value, the Reply-To mail header is set to NULL. This disables automatic email replies. If you include p_replyto parameter, but provide a non-null value (for example, a valid email address), you send these messages, but the automatic replies go to the value specified (for example, the email address) |
| `p_application_id` | Application ID where the email template is defined. Defaults to the current application (if called from within an application). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

The template procedure queues a template-based message without returning a mail id.

```sql
begin
    apex_mail.send(
        p_template_static_id => 'REQUEST_APPROVAL',
        p_placeholders       => json_object(
            'REQUEST_ID' value :P20_REQUEST_ID,
            'REQUESTOR'  value :P20_REQUESTOR
            returning clob),
        p_to             => :P20_MANAGER_EMAIL,
        p_from           => 'workflow@example.com',
        p_application_id => :APP_ID);
end;
/
```
