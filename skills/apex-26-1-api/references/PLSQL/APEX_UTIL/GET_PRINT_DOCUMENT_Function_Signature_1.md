# APEX_UTIL.GET_PRINT_DOCUMENT Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PRINT_DOCUMENT-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns a document as BLOB using XML based report data and RTF or XSL-FO based report layout.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_PRINT_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_PRINT_DOCUMENT (
    p_report_data         IN BLOB,
    p_report_layout       IN CLOB,
    p_report_layout_type  IN VARCHAR2 default 'xsl-fo',
    p_document_format     IN VARCHAR2 default 'pdf',
    p_print_server        IN VARCHAR2 default NULL )
RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_report_data` | XML based report data. |
| `p_report_layout` | Report layout in XSL-FO or RTF format. |
| `p_report_layout_type` | Defines the report layout type, that is "xsl-fo" or "rtf". |
| `p_document_format` | Defines the document format, that is "pdf", "rtf", "xls", "htm", or "xml". |
| `p_print_server` | URL of the print server. If not specified, the print server is derived from preferences. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Create a PDF BLOB from XML report data and an inline layout.

```sql
declare
    l_report_data   blob;
    l_report_layout clob;
    l_pdf           blob;
begin
    select report_xml, layout_clob
      into l_report_data, l_report_layout
      from report_requests
     where request_id = :P40_REQUEST_ID;

    l_pdf := apex_util.get_print_document(
        p_report_data        => l_report_data,
        p_report_layout      => l_report_layout,
        p_report_layout_type => 'xsl-fo',
        p_document_format    => 'pdf');

    insert into generated_documents(request_id, mime_type, document_blob)
    values (:P40_REQUEST_ID, 'application/pdf', l_pdf);
end;
/
```

