# APEX_PRINT.GENERATE_DOCUMENT Function Signature 5

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-5.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

Generates a document using an custom template stored in an OCI Object Storage Bucket and return the contents.

## When To Use

Use this page when code needs the `APEX_PRINT.GENERATE_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.GENERATE_DOCUMENT (
    p_data                   IN              CLOB,
    p_template_type          IN              t_template_type,
    p_template_bucket        IN              VARCHAR2,
    p_template_namespace     IN              VARCHAR2,
    p_template_object        IN              VARCHAR2,
    p_output_type            IN              t_output_type DEFAULT c_output_pdf,
    p_output_password        IN              VARCHAR2      DEFAULT NULL)
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_data` | Data for the document. Currently JSON format only. |
| `p_template_type` | Type of the template. |
| `p_template_bucket` | Name of the Object Storage bucket. |
| `p_template_namespace` | Object Storage namespace. |
| `p_template_object` | Name of the Template Object in Object Storage. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the OCI Object Storage template overload when the custom template lives in a bucket.

```sql
declare
    l_pdf blob;
begin
    l_pdf := apex_print.generate_document(
        p_data               => json_object(
        'order_id' value :P42_ORDER_ID,
        'status'   value 'Ready',
        'customer' value :P42_CUSTOMER_NAME
        returning clob),
        p_template_type      => apex_print.c_template_docx,
        p_template_bucket    => 'apex-print-templates',
        p_template_namespace => 'tenantnamespace',
        p_template_object    => 'orders/order-confirmation.docx',
        p_output_type        => apex_print.c_output_pdf);
end;
/
```
