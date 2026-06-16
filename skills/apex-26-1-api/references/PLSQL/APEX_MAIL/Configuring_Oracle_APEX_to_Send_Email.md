# APEX_MAIL.Configuring Oracle APEX to Send Email

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Configuring-Oracle-Application-Express-to-Send-Email.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

Before you can send email from an App Builder application, you must:

## When To Use

Use this page when code needs the `APEX_MAIL.Configuring Oracle APEX to Send Email` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

When sending mail outside an active APEX request, establish the workspace context before queuing mail.

```sql
declare
    l_mail_id number;
begin
    apex_util.set_workspace(p_workspace => 'SALES_WS');

    l_mail_id := apex_mail.send(
        p_to   => 'ops@example.com',
        p_from => 'apex@example.com',
        p_subj => 'Nightly job completed',
        p_body => 'The nightly order summary finished successfully.');

    apex_mail.push_queue;
end;
/
```
