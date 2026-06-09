# APEX_UI_DEFAULT_UPDATE.ADD_AD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_AD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

Adds a User Interface Default Attribute Dictionary entry with the provided definition. Up to three synonyms can be provided during the creation. Additional synonyms can be added post-creation using apex_ui_default_update.add_ad_synonym. Synonyms share the column definition of their base column.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.ADD_AD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.ADD_AD_COLUMN (
    p_column_name           IN  VARCHAR2,
    p_label                 IN  VARCHAR2  DEFAULT NULL,
    p_help_text             IN  VARCHAR2  DEFAULT NULL,
    p_format_mask           IN  VARCHAR2  DEFAULT NULL,
    p_default_value         IN  VARCHAR2  DEFAULT NULL,
    p_form_format_mask      IN  VARCHAR2  DEFAULT NULL,
    p_form_display_width    IN  VARCHAR2  DEFAULT NULL,
    p_form_display_height   IN  VARCHAR2  DEFAULT NULL,
    p_form_data_type        IN  VARCHAR2  DEFAULT NULL,
    p_report_format_mask    IN  VARCHAR2  DEFAULT NULL,
    p_report_col_alignment  IN  VARCHAR2  DEFAULT NULL,
    p_syn_name1             IN  VARCHAR2  DEFAULT NULL,
    p_syn_name2             IN  VARCHAR2  DEFAULT NULL,
    p_syn_name3             IN  VARCHAR2  DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_column_name` | Name of column to be created. |
| `p_label` | Used for item label and report column heading. |
| `p_help_text` | Used for help text for items and interactive report columns |
| `p_format_mask` | Used as the format mask for items and report columns. Can be overwritten by report for form specific format masks. |
| `p_default_value` | Used as the default value for items. |
| `p_form_format_mask` | If provided, used as the format mask for items, overriding any value for the general format mask. |
| `p_form_display_width` | Used as the width of any items using this Attribute Definition. |
| `p_form_display_height` | Used as the height of any items using this Attribute Definition (only used by item types such as text areas and shuttles). |
| `p_form_data_type` | Used as the data type for items (results in an automatic validation). Valid values are VARCHAR, NUMBER and DATE. |
| `p_report_format_mask` | If provided, used as the format mask for report columns, overriding any value for the general format mask. |
| `p_report_col_alignment` | Used as the alignment for report column data (for example, number are usually right justified). Valid values are LEFT , CENTER , and RIGHT . |
| `p_syn_name1` | Name of synonym to be created along with this column. For more than 3, use APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM. |
| `p_syn_name2` | Name of second synonym to be created along with this column. For more than 3, use APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM. |
| `p_syn_name3` | Name of third synonym to be created along with this column. For more than 3, use APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.ADD_AD_COLUMN(
        p_column_name => 'EXAMPLE',
        p_label => 'EXAMPLE',
        p_help_text => to_clob('Example text'),
        p_format_mask => 'EXAMPLE',
        p_default_value => 'EXAMPLE',
        p_form_format_mask => 'EXAMPLE',
        p_form_display_width => 'EXAMPLE',
        p_form_display_height => 'EXAMPLE',
        p_form_data_type => 'EXAMPLE',
        p_report_format_mask => 'EXAMPLE',
        p_report_col_alignment => 'EXAMPLE',
        p_syn_name1 => 'EXAMPLE',
        p_syn_name2 => 'EXAMPLE',
        p_syn_name3 => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ui_default_update.ADD_AD_COLUMN(
            p_column_name => 'EXAMPLE',
            p_label => 'EXAMPLE',
            p_help_text => to_clob('Example text'),
            p_format_mask => 'EXAMPLE',
            p_default_value => 'EXAMPLE',
            p_form_format_mask => 'EXAMPLE',
            p_form_display_width => 'EXAMPLE',
            p_form_display_height => 'EXAMPLE',
            p_form_data_type => 'EXAMPLE',
            p_report_format_mask => 'EXAMPLE',
            p_report_col_alignment => 'EXAMPLE',
            p_syn_name1 => 'EXAMPLE',
            p_syn_name2 => 'EXAMPLE',
            p_syn_name3 => 'EXAMPLE'
        );
end;
/
```

