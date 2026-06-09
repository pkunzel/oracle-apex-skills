# APEX_MAIL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html)

Status: curated first-pass reference.

## Purpose

`APEX_MAIL` queues outbound email from APEX applications. It supports plain text, HTML email, templates, attachments, inline images, and queue pushing.

Emails are queued first. Delivery depends on APEX instance mail configuration and queue processing.

## When To Use

Use `APEX_MAIL` when:

- A page process or background process must send an application email.
- Email content should use an APEX email template.
- A generated report or uploaded file must be attached to a message.
- Code must push queued mail immediately in controlled jobs.

Do not use it for high-volume campaigns without considering queue capacity, deliverability, and unsubscribe/compliance requirements.

## Common Member Groups

| Need | Members |
| --- | --- |
| Send mail | `SEND` function/procedure signatures |
| Attach files | `ADD_ATTACHMENT` signatures |
| Templates | `PREPARE_TEMPLATE` |
| Queue delivery | `PUSH_QUEUE` |
| URLs | `GET_INSTANCE_URL`, `GET_IMAGES_URL` |

## Simple Email

```sql
declare
    l_mail_id number;
begin
    l_mail_id := apex_mail.send(
        p_to   => 'user@example.com',
        p_from => 'noreply@example.com',
        p_subj => 'Order submitted',
        p_body => 'Your order has been submitted.');
end;
/
```

## HTML Email

```sql
declare
    l_mail_id number;
begin
    l_mail_id := apex_mail.send(
        p_to        => :P10_EMAIL,
        p_from      => 'noreply@example.com',
        p_subj      => 'Welcome',
        p_body      => 'Welcome to the application.',
        p_body_html => '<html><body><h1>Welcome</h1><p>Your account is ready.</p></body></html>');
end;
/
```

If both `p_body` and `p_body_html` are used, keep their data types consistent according to the selected overload.

## Attachment Pattern

Assuming table `report_files(file_id, file_name, mime_type, content_blob)`:

```sql
declare
    l_mail_id number;
begin
    l_mail_id := apex_mail.send(
        p_to   => :P20_EMAIL,
        p_from => 'reports@example.com',
        p_subj => 'Requested report',
        p_body => 'The requested report is attached.');

    for rec in (
        select file_name, mime_type, content_blob
          from report_files
         where file_id = :P20_FILE_ID
    ) loop
        apex_mail.add_attachment(
            p_mail_id    => l_mail_id,
            p_attachment => rec.content_blob,
            p_filename   => rec.file_name,
            p_mime_type  => rec.mime_type);
    end loop;
end;
/
```

## Template Pattern

Use APEX email templates for branded messages. Assuming template static ID `ORDER_APPROVED`:

```sql
declare
    l_subject varchar2(4000);
    l_html    clob;
    l_text    clob;
begin
    apex_mail.prepare_template(
        p_static_id    => 'ORDER_APPROVED',
        p_placeholders => '{ "ORDER_ID": "' || apex_escape.json(:P10_ORDER_ID) || '" }',
        p_subject      => l_subject,
        p_html         => l_html,
        p_text         => l_text);

    apex_mail.send(
        p_to        => :P10_EMAIL,
        p_from      => 'orders@example.com',
        p_subj      => l_subject,
        p_body      => l_text,
        p_body_html => l_html);
end;
/
```

Check the generated member page for the exact `PREPARE_TEMPLATE` signature.

## Queue Push

In most apps, let normal APEX mail queue processing deliver messages. In a controlled job, push the queue:

```sql
begin
    apex_mail.push_queue;
end;
/
```

## Safety Guidance

- Validate recipient addresses and prevent header injection.
- Do not log email bodies containing personal data.
- Prefer templates for consistent branding and localization.
- Attach only files the current user is authorized to receive.
- Keep large attachments under instance/provider limits.
- Configure APEX instance mail settings before relying on delivery.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Configuring Oracle APEX to Send Email | topic | [local](APEX_MAIL/Configuring_Oracle_APEX_to_Send_Email.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Configuring-Oracle-Application-Express-to-Send-Email.html) |
| ADD_ATTACHMENT Procedure Signature 1 | procedure | [local](APEX_MAIL/ADD_ATTACHMENT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTACHMENT-Procedure-Signature-1.html) |
| ADD_ATTACHMENT Procedure Signature 2 | procedure | [local](APEX_MAIL/ADD_ATTACHMENT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTACHMENT-Procedure-Signature-2.html) |
| GET_IMAGES_URL Function | function | [local](APEX_MAIL/GET_IMAGES_URL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_IMAGES_URL-Function.html) |
| GET_INSTANCE_URL Function | function | [local](APEX_MAIL/GET_INSTANCE_URL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INSTANCE_URL-Function.html) |
| PREPARE_TEMPLATE Procedure | procedure | [local](APEX_MAIL/PREPARE_TEMPLATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREPARE_TEMPLATE_Procedure.html) |
| PUSH_QUEUE Procedure | procedure | [local](APEX_MAIL/PUSH_QUEUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH_QUEUE-Procedure.html) |
| SEND Function Signature 1 | function | [local](APEX_MAIL/SEND_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Function-Signature-1.html) |
| SEND Function Signature 2 | function | [local](APEX_MAIL/SEND_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Function-Signature-2.html) |
| SEND Procedure Signature 1 | procedure | [local](APEX_MAIL/SEND_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Procedure-Signature-1.html) |
| SEND Procedure Signature 2 | procedure | [local](APEX_MAIL/SEND_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Procedure-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
