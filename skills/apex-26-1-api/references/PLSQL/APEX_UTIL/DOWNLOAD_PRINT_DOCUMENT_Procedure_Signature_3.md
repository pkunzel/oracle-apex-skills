# APEX_UTIL.DOWNLOAD_PRINT_DOCUMENT Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOWNLOAD_PRINT_DOCUMENT-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure initiates the download of a print document using pre-defined report query and pre-defined report layout.

## When To Use

Use this page when code needs the `APEX_UTIL.DOWNLOAD_PRINT_DOCUMENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.DOWNLOAD_PRINT_DOCUMENT (
    p_file_name           IN VARCHAR,
    p_content_disposition IN VARCHAR  DEFAULT 'attachment',
    p_application_id      IN NUMBER,
    p_report_query_name   IN VARCHAR2,
    p_report_layout_name  IN VARCHAR2,
    p_report_layout_type  IN VARCHAR2 DEFAULT 'xsl-fo',
    p_document_format     IN VARCHAR2 DEFAULT 'pdf',
    p_print_server        IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_file_name` | Defines the filename of the print document. |
| `p_content_disposition` | Specifies whether to download the print document or display inline ("attachment", "inline"). |
| `p_application_id` | Defines the application ID of the report query. |
| `p_report_query_name` | Name of the report query (stored under application's Shared Components). |
| `p_report_layout_name` | Name of the report layout (stored under application's Shared Components). |
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

Download output from a named report query and a shared report layout.

```sql
begin
    apex_util.download_print_document(
        p_file_name           => 'open-orders.pdf',
        p_content_disposition => 'attachment',
        p_application_id      => :APP_ID,
        p_report_query_name   => 'OPEN_ORDERS',
        p_report_layout_name  => 'OPEN_ORDERS_RTF',
        p_report_layout_type  => 'rtf',
        p_document_format     => 'pdf');
end;
/
```

