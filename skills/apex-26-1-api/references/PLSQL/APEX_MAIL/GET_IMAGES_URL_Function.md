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

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_mail.GET_IMAGES_URL;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

