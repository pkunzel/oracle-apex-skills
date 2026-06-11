# APEX_DATA_EXPORT.GET_PRINT_CONFIG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-GET_PRINT_CONFIG-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This function prepares the print config to style the data export.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.GET_PRINT_CONFIG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION GET_PRINT_CONFIG(
    p_units                       IN t_unit         DEFAULT c_unit_inches,
    p_paper_size                  IN t_size         DEFAULT c_size_letter,
    p_width_units                 IN t_width_unit   DEFAULT c_width_unit_percentage,
    p_width                       IN NUMBER         DEFAULT 11,
    p_height                      IN NUMBER         DEFAULT 8.5,
    p_orientation                 IN t_orientation  DEFAULT c_orientation_landscape,
    --
    p_page_header                 IN VARCHAR2       DEFAULT NULL,
    p_page_header_font_color      IN t_color        DEFAULT '#000000',
    p_page_header_font_family     IN t_font_family  DEFAULT c_font_family_helvetica,
    p_page_header_font_weight     IN t_font_weight  DEFAULT c_font_weight_normal,
    p_page_header_font_size       IN NUMBER         DEFAULT 12,
    p_page_header_alignment       IN t_alignment    DEFAULT c_align_center,
    --
    p_page_footer                 IN VARCHAR2       DEFAULT NULL,
    p_page_footer_font_color      IN t_color        DEFAULT '#000000',
    p_page_footer_font_family     IN t_font_family  DEFAULT c_font_family_helvetica,
    p_page_footer_font_weight     IN t_font_weight  DEFAULT c_font_weight_normal,
    p_page_footer_font_size       IN NUMBER         DEFAULT 12,
    p_page_footer_alignment       IN t_alignment    DEFAULT c_align_center,
    --
    p_header_bg_color             IN t_color        DEFAULT '#EEEEEE',
    p_header_font_color           IN t_color        DEFAULT '#000000',
    p_header_font_family          IN t_font_family  DEFAULT c_font_family_helvetica,
    p_header_font_weight          IN t_font_weight  DEFAULT c_font_weight_bold,
    p_header_font_size            IN NUMBER         DEFAULT 10,
    --
    p_body_bg_color               IN t_color        DEFAULT '#FFFFFF',
    p_body_font_color             IN t_color        DEFAULT '#000000',
    p_body_font_family            IN t_font_family  DEFAULT c_font_family_helvetica,
    p_body_font_weight            IN t_font_weight  DEFAULT c_font_weight_normal,
    p_body_font_size              IN NUMBER         DEFAULT 10,
    --
    p_border_width                IN NUMBER         DEFAULT .5,
    p_border_color                IN t_color        DEFAULT '#666666' )
RETURN t_print_config;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_units` | Select the units used to specify page width and height. Valid values are: Inches, Millimeters, Centimeters, Points |
| `p_paper_size` | PDF only. Select the report page size. To type in your own page width and height, select Custom. Available options include: Letter, Legal, Tabloid, A4, A3, Custom |
| `p_width_units` | PDF only. Select the units used to specify column widths. Valid values are: Percentage, Points, Pixels |
| `p_width` | PDF only. The width of the page. |
| `p_height` | PDF only. The height of the page. |
| `p_orientation` | The orientation for the page. PDF only. Available options include: Vertical (Portrait), Horizontal (Landscape) |
| `p_page_header` | Text to appear in the header section of the document. |
| `p_page_header_font_color` | The page header font color. |
| `p_page_header_font_family` | The page header font family. |
| `p_page_header_font_weight` | The page header font weight. |
| `p_page_header_font_size` | The page header font size. |
| `p_page_header_alignment` | The page header text alignment. |
| `p_page_footer` | Text to appear in the footer section of the document. |
| `p_page_footer_font_color` | The page footer font color. |
| `p_page_footer_font_family` | The page footer font family. |
| `p_page_footer_font_weight` | The page footer font weight. |
| `p_page_footer_font_size` | The page footer font size. |
| `p_page_footer_alignment` | The page footer text aligment. |
| `p_header_bg_color` | The table header background color. |
| `p_header_font_color` | The table header font color. |
| `p_header_font_family` | The table header font family. |
| `p_header_font_weight` | The table header font weight. |
| `p_header_font_size` | The table header font size. |
| `p_body_bg_color` | The table body background color. |
| `p_body_font_color` | The table body font color. |
| `p_body_font_family` | The table body font family. |
| `p_body_font_weight` | The table body font weight. |
| `p_body_font_size` | The table body font size. |
| `p_border_width` | The width of the borders. |
| `p_border_color` | The color of the borders. |

## Returns

The print config to style the data export.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_print_config apex_data_export.t_print_config;
begin
    l_print_config := apex_data_export.get_print_config(
        p_units                  => apex_data_export.c_unit_inches,
        p_paper_size             => apex_data_export.c_size_A4,
        p_orientation            => apex_data_export.c_orientation_landscape,
        p_page_header            => 'Open Orders',
        p_page_header_alignment  => apex_data_export.c_align_center,
        p_page_footer            => 'Generated by Oracle APEX',
        p_header_bg_color        => '#F3F4F6',
        p_header_font_weight     => apex_data_export.c_font_weight_bold,
        p_body_font_family       => apex_data_export.c_font_family_helvetica,
        p_border_color           => '#D0D5DD'
    );
end;
/
```

