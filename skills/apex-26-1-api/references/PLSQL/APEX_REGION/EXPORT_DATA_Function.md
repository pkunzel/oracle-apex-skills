# APEX_REGION.EXPORT_DATA Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-EXPORT_DATA-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This function exports current region data.

## When To Use

Use this page when code needs the `APEX_REGION.EXPORT_DATA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.EXPORT_DATA (
    p_format                    IN apex_data_export.t_format,
    --
    p_page_id                   IN NUMBER,
    p_region_id                 IN NUMBER,
    p_component_id              IN NUMBER                           DEFAULT NULL,
    p_view_mode                 IN VARCHAR2                         DEFAULT NULL,
    --
    p_additional_filters        IN apex_exec.t_filters              DEFAULT apex_exec.c_empty_filters,
    --
    p_max_rows                  IN NUMBER                           DEFAULT NULL,
    p_parent_column_values      IN apex_exec.t_parameters           DEFAULT apex_exec.c_empty_parameters,
    --
    p_as_clob                   IN BOOLEAN                          DEFAULT FALSE,
    --
    p_file_name                 IN VARCHAR2                         DEFAULT NULL,
    p_page_size                 IN apex_data_export.t_size          DEFAULT apex_data_export.c_size_letter,
    p_orientation               IN apex_data_export.t_orientation   DEFAULT apex_data_export.c_orientation_portrait,
    p_data_only                 IN BOOLEAN                          DEFAULT FALSE,
    --
    p_pdf_accessible            IN BOOLEAN                          DEFAULT FALSE,
    --
    p_xml_include_declaration   IN BOOLEAN                          DEFAULT TRUE ) 
    RETURN apex_data_export.t_export;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_format` | Export format. Use constants apex_data_export.c_format_* |
| `p_page_id` | ID of the page where the region is on. |
| `p_region_id` | Open the query context for this specific region ID. |
| `p_component_id` | Region component ID to use. For Interactive Reports and Interactive Grids, this is the saved report ID within the current application page. For JET charts, use the chart series ID. |
| `p_view_mode` | The view type available for the report. The values can be: APEX_IR.C_VIEW_REPORT APEX_IR.C_VIEW_GROUPBY APEX_IR.C_VIEW_PIVOT If p_view is null , it gets the view currently used by the report. If p_view passed which doesn't exist for the current report, an error raises. |
| `p_additional_filters` | Additional filters to apply to the context. |
| `p_max_rows` | Maximum amount of rows to get. Default unlimited. |
| `p_parent_column_values` | For the detail grid in an Interactive Grid Master-Detail relationship. Use this parameter to pass in values for the master-detail parent column(s). |
| `p_as_clob` | Returns the export contents as a CLOB. Does not work with binary export formats such as PDF and XLSX. Default to false . |
| `p_file_name` | Defines the filename of the export. |
| `p_page_size` | Page size of the report. Use constants apex_data_export.c_size_* |
| `p_orientation` | Orientation of the report page. Use constants apex_data_export.c_orientation_* |
| `p_data_only` | Whether to include column groups, control breaks, aggregates, and highlights. |
| `p_pdf_accessible` | Whether to include accessibility tags in the PDF. Defaults to false . |
| `p_xml_include_declaration` | Whether to include the XML declaration. Defaults to true . |

## Returns

The export file contents, mime_type, and optionally the report layout.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_DATA_EXPORT.T_EXPORT;
begin
    l_result := apex_region.EXPORT_DATA(
        p_format => null,
        p_page_id => 1,
        p_region_id => 1,
        p_component_id => 1,
        p_view_mode => 'EXAMPLE',
        p_additional_filters => null,
        p_max_rows => 1,
        p_parent_column_values => null,
        p_as_clob => true,
        p_file_name => 'EXAMPLE',
        p_page_size => null,
        p_orientation => null,
        p_data_only => true,
        p_pdf_accessible => true,
        p_xml_include_declaration => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

