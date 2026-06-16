# APEX_PRINT.Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

The APEX_PRINT package uses the following constants.

## When To Use

Use this page when code needs the `APEX_PRINT.Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the template and output constants to make document-generation calls self-describing.

```sql
declare
    l_document blob;
    l_template blob;
begin
    select template_blob
      into l_template
      from print_templates
     where static_id = 'ORDER_CONFIRMATION';

    l_document := apex_print.generate_document(
        p_data          => json_object(
        'order_id' value :P42_ORDER_ID,
        'status'   value 'Ready',
        'customer' value :P42_CUSTOMER_NAME
        returning clob),
        p_template      => l_template,
        p_template_type => apex_print.c_template_docx,
        p_output_type   => apex_print.c_output_pdf);
end;
/
```
