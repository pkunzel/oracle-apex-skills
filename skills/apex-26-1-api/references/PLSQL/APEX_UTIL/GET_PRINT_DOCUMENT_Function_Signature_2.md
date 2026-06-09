# APEX_UTIL.GET_PRINT_DOCUMENT Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PRINT_DOCUMENT-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns a document as BLOB using pre-defined report query and pre-defined report layout.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_PRINT_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_PRINT_DOCUMENT (
    p_application_id      IN NUMBER,
    p_report_query_name   IN VARCHAR2,
    p_report_layout_name  IN VARCHAR2 DEFAULT NULL,
    p_report_layout_type  IN VARCHAR2 DEFAULT 'xsl-fo',
    p_document_format     IN VARCHAR2 DEFAULT 'pdf',
    p_print_server        IN VARCHAR2 DEFAULT NULL )
RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Defines the application ID of the report query. |
| `p_report_query_name` | Name of the report query (stored under application's Shared Components). |
| `p_report_layout_name` | Name of the report layout (stored under application's Shared Components). |
| `p_report_layout_type` | Defines the report layout type, that is "xsl-fo" or "rtf". |
| `p_document_format` | Defines the document format, that is "pdf", "rtf", "xls", "htm", or "xml". |
| `p_print_server` | URL of the print server. If not specified, the print server is derived from preferences. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BLOB;
begin
    l_result := apex_util.GET_PRINT_DOCUMENT(
        p_application_id => 1,
        p_report_query_name => to_clob('Example text'),
        p_report_layout_name => 'EXAMPLE',
        p_report_layout_type => 'EXAMPLE',
        p_document_format => 'EXAMPLE',
        p_print_server => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

