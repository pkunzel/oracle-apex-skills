# APEX_MAIL.PREPARE_TEMPLATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREPARE_TEMPLATE_Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

Procedure to return a formatted mail based on an e-mail template where the placeholders specified as JSON string are substituted.

## When To Use

Use this page when code needs the `APEX_MAIL.PREPARE_TEMPLATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.PREPARE_TEMPLATE (
    p_static_id         IN  VARCHAR2,
    p_placeholders      IN  CLOB,
    p_application_id    IN  NUMBER   DEFAULT apex_application.g_flow_id, 
    p_subject           OUT VARCHAR2,
    p_html              OUT CLOB,
    p_text              OUT CLOB,
    p_language_override IN  VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | The identifier which was specified when the template was created in the Oracle APEX Builder. |
| `p_placeholders` | A JSON formatted string containing name/value pairs specifying values for the placeholders to be replaced in the email template. |
| `p_application_id` | Application ID where the email template is defined. Defaults to the current application (if called from within an application). |
| `p_subject` | The subject line generated from the template, after any placeholders and substitutions have been made. |
| `p_html` | The HTML code for the email, after placeholders have been replaced. |
| `p_text` | The plain text of the email, with substitutions made. |
| `p_language_override` | Language of a translated template to use. Use a language code like "en" , "fr" or "de-at" here. An application translation for this language must exist, otherwise the argument is ignored. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Render a shared-component email template into subject, HTML, and text before queueing it manually.

```sql
declare
    l_subject varchar2(4000);
    l_html    clob;
    l_text    clob;
    l_mail_id number;
begin
    apex_mail.prepare_template(
        p_static_id    => 'ORDER_APPROVED',
        p_placeholders => json_object(
            'ORDER_ID'      value :P42_ORDER_ID,
            'CUSTOMER_NAME' value :P42_CUSTOMER_NAME
            returning clob),
        p_subject => l_subject,
        p_html    => l_html,
        p_text    => l_text);

    l_mail_id := apex_mail.send(
        p_to        => :P42_CUSTOMER_EMAIL,
        p_from      => 'orders@example.com',
        p_subj      => l_subject,
        p_body      => l_text,
        p_body_html => l_html);
end;
/
```
