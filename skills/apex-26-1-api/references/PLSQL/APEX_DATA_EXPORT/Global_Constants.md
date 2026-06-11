# APEX_DATA_EXPORT.Global Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-Global-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

The APEX_DATA_EXPORT package uses the following constants.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.Global Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the package constants instead of string literals when selecting formats, alignment, disposition, and print options.

```sql
-- Export formats
apex_data_export.c_format_csv
apex_data_export.c_format_html
apex_data_export.c_format_pdf
apex_data_export.c_format_xlsx
apex_data_export.c_format_xml
apex_data_export.c_format_pxml
apex_data_export.c_format_json
apex_data_export.c_format_pjson

-- Alignment and download disposition
apex_data_export.c_align_start
apex_data_export.c_align_center
apex_data_export.c_align_end
apex_data_export.c_attachment
apex_data_export.c_inline

-- Print units, paper sizes, orientation, and font options
apex_data_export.c_unit_inches
apex_data_export.c_unit_millimeters
apex_data_export.c_unit_centimeters
apex_data_export.c_unit_points
apex_data_export.c_size_letter
apex_data_export.c_size_legal
apex_data_export.c_size_tabloid
apex_data_export.c_size_A4
apex_data_export.c_size_A3
apex_data_export.c_size_custom
apex_data_export.c_width_unit_percentage
apex_data_export.c_width_unit_points
apex_data_export.c_width_unit_pixels
apex_data_export.c_orientation_portrait
apex_data_export.c_orientation_landscape
apex_data_export.c_font_family_helvetica
apex_data_export.c_font_family_times
apex_data_export.c_font_family_courier
apex_data_export.c_font_weight_normal
apex_data_export.c_font_weight_bold
```

```sql
l_export := apex_data_export.export(
    p_context   => l_context,
    p_format    => apex_data_export.c_format_xlsx,
    p_file_name => 'orders'
);
```
