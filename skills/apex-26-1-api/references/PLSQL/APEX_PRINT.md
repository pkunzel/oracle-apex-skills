# APEX_PRINT

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html)

Status: curated first-pass reference.

## Purpose

`APEX_PRINT` generates printable documents from JSON data and templates. It supports document generation from template BLOBs or uploaded template IDs, multiple template/output types, template upload to OCI Object Storage, and template removal.

Use it when a process needs to generate PDF, DOCX, or related output from structured data and a document template.

## API Surface

| Need | Members |
| --- | --- |
| Generate document | `GENERATE_DOCUMENT` signatures |
| Template lifecycle | `UPLOAD_TEMPLATE`, `REMOVE_TEMPLATE` |
| Constants | template and output type constants |

## Generate PDF From Template BLOB

Assuming table `print_templates(static_id varchar2(100), template_blob blob)` stores a DOCX template:

```sql
declare
    l_template blob;
    l_data     clob;
    l_pdf      blob;
begin
    select template_blob
      into l_template
      from print_templates
     where static_id = 'ORDER_CONFIRMATION';

    l_data := json_object(
        'order_id' value 1001,
        'status'   value 'Ready',
        'customer' value 'ACME Corp'
        returning clob);

    l_pdf := apex_print.generate_document(
        p_data          => l_data,
        p_template      => l_template,
        p_template_type => apex_print.c_template_docx,
        p_output_type   => apex_print.c_output_pdf);

    apex_http.download(
        p_blob         => l_pdf,
        p_content_type => 'application/pdf',
        p_filename     => 'order-1001.pdf');

    apex_application.stop_apex_engine;
end;
/
```

The data parameter is JSON. Match JSON property names to placeholders expected by the template.

## Upload And Reuse Template

```sql
declare
    l_template_id number;
begin
    l_template_id := apex_print.upload_template(
        p_template      => :P10_TEMPLATE_BLOB,
        p_template_type => apex_print.c_template_docx);

    insert into print_template_registry(static_id, template_id)
    values ('ORDER_CONFIRMATION', l_template_id);
end;
/
```

Later, use the `GENERATE_DOCUMENT` signature that accepts a template ID. Open the relevant member page for exact signature details.

## Remove Template

```sql
begin
    apex_print.remove_template(
        p_template_id => :P10_TEMPLATE_ID);
end;
/
```

Only remove templates when no active process depends on them.

## Safety Notes

- Keep templates in controlled storage and review them like deployable artifacts.
- Ensure JSON data shape matches the template placeholders.
- Avoid putting secrets or unnecessary personal data into generated documents.
- Use `APEX_HTTP.DOWNLOAD` or `APEX_DATA_EXPORT.DOWNLOAD` to return generated BLOBs to the browser.
- Password-protected PDFs still need secure storage and transport.
- Template upload uses OCI Object Storage; confirm instance/service configuration before relying on upload/remove flows.

## Related APIs

- [APEX_HTTP](APEX_HTTP.md) for downloading generated documents.
- [APEX_DATA_EXPORT](APEX_DATA_EXPORT.md) for report exports.
- [APEX_JSON](APEX_JSON.md) for JSON data construction.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants | constants | [local](APEX_PRINT/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html) |
| GENERATE_DOCUMENT Function Signature 1 | function | [local](APEX_PRINT/GENERATE_DOCUMENT_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-1.html) |
| GENERATE_DOCUMENT Function Signature 2 | function | [local](APEX_PRINT/GENERATE_DOCUMENT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-2.html) |
| GENERATE_DOCUMENT Function Signature 3 | function | [local](APEX_PRINT/GENERATE_DOCUMENT_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-3.html) |
| GENERATE_DOCUMENT Function Signature 4 | function | [local](APEX_PRINT/GENERATE_DOCUMENT_Function_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-4.html) |
| GENERATE_DOCUMENT Function Signature 5 | function | [local](APEX_PRINT/GENERATE_DOCUMENT_Function_Signature_5.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-5.html) |
| GENERATE_DOCUMENT Function Signature 6 | function | [local](APEX_PRINT/GENERATE_DOCUMENT_Function_Signature_6.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-6.html) |
| REMOVE_TEMPLATE Procedure | procedure | [local](APEX_PRINT/REMOVE_TEMPLATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html) |
| UPLOAD_TEMPLATE Function | function | [local](APEX_PRINT/UPLOAD_TEMPLATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
