# APEX_MAIL.GET_INSTANCE_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INSTANCE_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This function gets the instance URL if an email includes a link to an Oracle APEX instance.

## When To Use

Use this page when code needs the `APEX_MAIL.GET_INSTANCE_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.GET_INSTANCE_URL return VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Build absolute APEX links for email by combining the instance URL with an application URL.

```sql
declare
    l_order_url varchar2(4000);
    l_mail_id   number;
begin
    l_order_url := apex_mail.get_instance_url ||
        apex_page.get_url(
            p_application => :APP_ID,
            p_page        => 42,
            p_items       => 'P42_ORDER_ID',
            p_values      => :P42_ORDER_ID);

    l_mail_id := apex_mail.send(
        p_to   => :P42_CUSTOMER_EMAIL,
        p_from => 'orders@example.com',
        p_subj => 'Order ' || :P42_ORDER_ID,
        p_body => 'View your order: ' || l_order_url);
end;
/
```
