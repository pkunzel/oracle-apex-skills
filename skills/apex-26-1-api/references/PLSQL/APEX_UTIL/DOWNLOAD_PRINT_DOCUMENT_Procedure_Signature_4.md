# APEX_UTIL.DOWNLOAD_PRINT_DOCUMENT Procedure Signature 4

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOWNLOAD_PRINT_DOCUMENT-Procedure-Signature-4.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure initiates the download of a print document using XML based report data (as a CLOB) and RTF or XSL-FO based report layout.

## When To Use

Use this page when code needs the `APEX_UTIL.DOWNLOAD_PRINT_DOCUMENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.DOWNLOAD_PRINT_DOCUMENT (
    p_file_name           IN VARCHAR,
    p_content_disposition IN VARCHAR,
    p_report_data         IN CLOB,
    p_report_layout       IN CLOB,
    p_report_layout_type  IN VARCHAR2 DEFAULT 'xsl-fo',
    p_document_format     IN VARCHAR2 DEFAULT 'pdf',
    p_print_server        IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_file_name` | Defines the filename of the print document. |
| `p_content_disposition` | Specifies whether to download the print document or display inline ("attachment", "inline"). |
| `p_report_data` | XML based report data, must be encoded in UTF-8. |
| `p_report_layout` | Report layout in XSL-FO or RTF format. |
| `p_report_layout_type` | Defines the report layout type, that is "xsl-fo" or "rtf". |
| `p_document_format` | Defines the document format, that is "pdf", "rtf", "xls", "htm", or "xml". |
| `p_print_server` | URL of the print server. If not specified, the print server is derived from preferences. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate and download a PDF from XML report data already held as a CLOB.

```sql
declare
    l_report_data   clob;
    l_report_layout clob;
begin
    l_report_data := '<ROWSET><ROW><ORDER_ID>' ||
                     apex_escape.html(:P40_ORDER_ID) ||
                     '</ORDER_ID></ROW></ROWSET>';

    select layout_clob
      into l_report_layout
      from report_layouts
     where layout_code = 'ORDER_DETAIL_XSL';

    apex_util.download_print_document(
        p_file_name           => 'order-' || :P40_ORDER_ID || '.pdf',
        p_content_disposition => 'attachment',
        p_report_data         => l_report_data,
        p_report_layout       => l_report_layout,
        p_report_layout_type  => 'xsl-fo',
        p_document_format     => 'pdf');
end;
/
```

