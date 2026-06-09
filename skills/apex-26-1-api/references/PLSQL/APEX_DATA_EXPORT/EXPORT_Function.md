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
    l_result T_EXPORT;
begin
    l_result := apex_data_export.EXPORT(
        p_context => to_clob('Example text'),
        p_format => null,
        p_as_clob => true,
        p_columns => null,
        p_column_groups => null,
        p_aggregates => null,
        p_highlights => null,
        p_file_name => 'EXAMPLE',
        p_print_config => null,
        p_page_header => 'EXAMPLE',
        p_page_footer => 'EXAMPLE',
        p_supplemental_text => to_clob('Example text'),
        p_csv_enclosed_by => 'EXAMPLE',
        p_csv_separator => 'EXAMPLE',
        p_pdf_accessible => true,
        p_xml_include_declaration => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result T_EXPORT;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_data_export.EXPORT(
            p_context => to_clob('Example text'),
            p_format => null,
            p_as_clob => true,
            p_columns => null,
            p_column_groups => null,
            p_aggregates => null,
            p_highlights => null,
            p_file_name => 'EXAMPLE',
            p_print_config => null,
            p_page_header => 'EXAMPLE',
            p_page_footer => 'EXAMPLE',
            p_supplemental_text => to_clob('Example text'),
            p_csv_enclosed_by => 'EXAMPLE',
            p_csv_separator => 'EXAMPLE',
            p_pdf_accessible => true,
            p_xml_include_declaration => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

