# APEX_MAIL.GET_IMAGES_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_IMAGES_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This function gets the image prefixed URL if the email includes Oracle APEX instance images.

## When To Use

Use this page when code needs the `APEX_MAIL.GET_IMAGES_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.GET_IMAGES_URL return VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the image URL prefix when composing HTML mail that references APEX instance images.

```sql
declare
    l_body_html clob;
    l_mail_id   number;
begin
    l_body_html :=
        '<html><body>' ||
        '<img src="' || apex_escape.html_attribute(apex_mail.get_images_url || 'logo.png') || '" alt="Logo">' ||
        '<p>Your order is ready.</p>' ||
        '</body></html>';

    l_mail_id := apex_mail.send(
        p_to        => :P30_CUSTOMER_EMAIL,
        p_from      => 'orders@example.com',
        p_subj      => 'Order ready',
        p_body      => 'Your order is ready.',
        p_body_html => l_body_html);
end;
/
```
