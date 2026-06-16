# APEX_PRINT.GENERATE_DOCUMENT Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

This function generates a document based on data and a template and returns the contents.

## When To Use

Use this page when code needs the `APEX_PRINT.GENERATE_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.GENERATE_DOCUMENT (
    p_data               IN CLOB,
    p_template           IN BLOB,
    p_template_type      IN t_template_type  DEFAULT c_template_docx,
    p_output_type        IN t_output_type    DEFAULT c_output_pdf,
    p_output_password    IN VARCHAR2         DEFAULT NULL )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_data` | Data for the document. Currently JSON format only. |
| `p_template` | Contents of the template. |
| `p_template_type` | Type of the template. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

## Returns

A BLOB containing the generated document.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Generate a document from JSON data and a template BLOB stored by the application.

```sql
declare
    l_template blob;
    l_pdf      blob;
begin
    select template_blob
      into l_template
      from print_templates
     where static_id = 'ORDER_CONFIRMATION';

    l_pdf := apex_print.generate_document(
        p_data          => json_object(
        'order_id' value :P42_ORDER_ID,
        'status'   value 'Ready',
        'customer' value :P42_CUSTOMER_NAME
        returning clob),
        p_template      => l_template,
        p_template_type => apex_print.c_template_docx,
        p_output_type   => apex_print.c_output_pdf);

    apex_http.download(
        p_blob         => l_pdf,
        p_content_type => 'application/pdf',
        p_filename     => 'order-' || :P42_ORDER_ID || '.pdf');
end;
/
```
