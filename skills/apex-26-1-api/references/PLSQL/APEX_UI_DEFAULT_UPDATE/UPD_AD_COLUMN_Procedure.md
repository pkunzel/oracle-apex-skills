# APEX_UI_DEFAULT_UPDATE.UPD_AD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_AD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the column name is found within the User Interface Default Attribute Dictionary, the column entry is updated using the provided parameters. If 'null%' is passed in, the value of the associated parameter is set to null.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_AD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_AD_COLUMN (
    p_column_name           IN  VARCHAR2,
    p_new_column_name       IN  VARCHAR2  DEFAULT NULL,
    p_label                 IN  VARCHAR2  DEFAULT NULL,
    p_help_text             IN  VARCHAR2  DEFAULT NULL,
    p_format_mask           IN  VARCHAR2  DEFAULT NULL,
    p_default_value         IN  VARCHAR2  DEFAULT NULL,
    p_form_format_mask      IN  VARCHAR2  DEFAULT NULL,
    p_form_display_width    IN  VARCHAR2  DEFAULT NULL,
    p_form_display_height   IN  VARCHAR2  DEFAULT NULL,
    p_form_data_type        IN  VARCHAR2  DEFAULT NULL,
    p_report_format_mask    IN  VARCHAR2  DEFAULT NULL,
    p_report_col_alignment  IN  VARCHAR2  DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_column_name` | Name of column to be updated |
| `p_new_column_name` | New name for column, if column is being renamed |
| `p_label` | Used for item label and report column heading |
| `p_help_text` | Used for help text for items and interactive report columns |
| `p_format_mask` | Used as the format mask for items and report columns. Can be overwritten by report for form specific format masks. |
| `p_default_value` | Used as the default value for items. |
| `p_form_format_mask` | If provided, used as the format mask for items, overriding any value for the general format mask. |
| `p_form_display_width` | Used as the width of any items using this Attribute Definition. |
| `p_form_display_height` | Used as the height of any items using this Attribute Definition (only used by item types such as text areas and shuttles). |
| `p_form_data_type` | Used as the data type for items (results in an automatic validation). Valid values are VARCHAR , NUMBER and DATE . |
| `p_report_format_mask` | If provided, used as the format mask for report columns, overriding any value for the general format mask. |
| `p_report_col_alignment` | Used as the alignment for report column data (for example, number are usually right justified). Valid values are LEFT, CENTER, and RIGHT. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_AD_COLUMN(
        p_column_name => 'EXAMPLE',
        p_new_column_name => 'EXAMPLE',
        p_label => 'EXAMPLE',
        p_help_text => to_clob('Example text'),
        p_format_mask => 'EXAMPLE',
        p_default_value => 'EXAMPLE',
        p_form_format_mask => 'EXAMPLE',
        p_form_display_width => 'EXAMPLE',
        p_form_display_height => 'EXAMPLE',
        p_form_data_type => 'EXAMPLE',
        p_report_format_mask => 'EXAMPLE',
        p_report_col_alignment => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ui_default_update.UPD_AD_COLUMN(
            p_column_name => 'EXAMPLE',
            p_new_column_name => 'EXAMPLE',
            p_label => 'EXAMPLE',
            p_help_text => to_clob('Example text'),
            p_format_mask => 'EXAMPLE',
            p_default_value => 'EXAMPLE',
            p_form_format_mask => 'EXAMPLE',
            p_form_display_width => 'EXAMPLE',
            p_form_display_height => 'EXAMPLE',
            p_form_data_type => 'EXAMPLE',
            p_report_format_mask => 'EXAMPLE',
            p_report_col_alignment => 'EXAMPLE'
        );
end;
/
```

