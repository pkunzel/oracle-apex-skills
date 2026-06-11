# APEX_DATA_EXPORT.EXPORT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-EXPORT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This function exports the query context in the specified format.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.EXPORT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION EXPORT (
  p_context                 IN apex_exec.t_context,
  p_format                  IN t_format,
  p_as_clob                 IN BOOLEAN          DEFAULT false,
  p_columns                 IN t_columns        DEFAULT c_empty_columns,
  p_column_groups           IN t_column_groups  DEFAULT c_empty_column_groups,
  p_aggregates              IN t_aggregates     DEFAULT c_empty_aggregates,
  p_highlights              IN t_highlights     DEFAULT c_empty_highlights,
  --          
  p_file_name               IN VARCHAR2         DEFAULT NULL,
  p_print_config            IN t_print_config   DEFAULT c_empty_print_config,
  p_page_header             IN VARCHAR2         DEFAULT NULL,
  p_page_footer             IN VARCHAR2         DEFAULT NULL,
  p_supplemental_text       IN VARCHAR2         DEFAULT NULL,
  --          
  p_csv_enclosed_by         IN VARCHAR2         DEFAULT NULL,
  p_csv_separator           IN VARCHAR2         DEFAULT NULL,
  --          
  p_pdf_accessible          IN BOOLEAN          DEFAULT NULL,
  --
  p_xml_include_declaration IN BOOLEAN          DEFAULT false ) 
  RETURN t_export
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object from the EXEC infrastructure. |
| `p_format` | Export format. Valid values are: XLSX, PDF, HTML, CSV, XML and JSON. |
| `p_as_clob` | Exports as a CLOB instead of BLOB (default FALSE). |
| `p_columns` | Collection of column attributes beginning with column breaks, then in the order of display. |
| `p_column_groups` | Collection of column group attributes in the order of levels and display. |
| `p_aggregates` | Collection of report aggregates. |
| `p_highlights` | Collection of report highlights. |
| `p_file_name` | Defines the filename of the export. |
| `p_print_config` | Used for EXCEL and PDF to set the print attributes. |
| `p_page_header` | Text to appear in the header section of the document. Overrides the page header from p_print_config . |
| `p_page_footer` | Text to appear in the footer section of the document. Overrides the page footer from p_print_config . |
| `p_supplemental_text` | Text at the top of all download formats. |
| `p_csv_enclosed_by` | Used for CSV to enclose the output. |
| `p_csv_separator` | Used for CSV to separate the column values. |
| `p_pdf_accessible` | Used for PDF to create an accessible PDF. |
| `p_xml_include_declaration` | Used for XML to generate the XML declaration as the first line. |

## Returns

This function returns: the export file as object which includes the contents, MIME type, and file name.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_context      apex_exec.t_context;
    l_context_open boolean := false;
    l_export       apex_data_export.t_export;
begin
    l_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => q'[select order_id, customer_name, order_total, status from orders]'
    );
    l_context_open := true;

    l_export := apex_data_export.export(
        p_context     => l_context,
        p_format      => apex_data_export.c_format_csv,
        p_as_clob     => true,
        p_file_name   => 'orders',
        p_page_header => 'Open Orders'
    );

    apex_exec.close(l_context);
    l_context_open := false;
    apex_debug.info('Created export %s as %s.', l_export.file_name, l_export.format);
exception
    when others then
        if l_context_open then
            apex_exec.close(l_context);
        end if;
        raise;
end;
/
```

