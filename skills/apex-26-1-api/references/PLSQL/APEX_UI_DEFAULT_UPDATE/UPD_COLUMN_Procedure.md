# APEX_UI_DEFAULT_UPDATE.UPD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the provided table and column exists within the user's schema's table based User Interface Defaults, the provided parameters are updated. If 'null%' is passed in, the value of the associated parameter is set to null.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_COLUMN (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_group_id              IN VARCHAR2  DEFAULT NULL,
    p_label                 IN VARCHAR2  DEFAULT NULL,
    p_help_text             IN VARCHAR2  DEFAULT NULL,
    p_display_in_form       IN VARCHAR2  DEFAULT NULL,
    p_display_seq_form      IN VARCHAR2  DEFAULT NULL,
    p_mask_form             IN VARCHAR2  DEFAULT NULL,
    p_default_value         IN VARCHAR2  DEFAULT NULL,
    p_required              IN VARCHAR2  DEFAULT NULL,
    p_display_width         IN VARCHAR2  DEFAULT NULL,
    p_max_width             IN VARCHAR2  DEFAULT NULL,
    p_height                IN VARCHAR2  DEFAULT NULL,
    p_display_in_report     IN VARCHAR2  DEFAULT NULL,
    p_display_seq_report    IN VARCHAR2  DEFAULT NULL,
    p_mask_report           IN VARCHAR2  DEFAULT NULL,
    p_alignment             IN VARCHAR2  DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Name of table whose column's UI Defaults are being updated. |
| `p_column_name` | Name of column whose UI Defaults are being updated. |
| `p_group_id` | ID of group to be associated with the column. |
| `p_label` | When creating a form against this table or view, this is used as the label for the item if this column is included. When creating a report or tabular form, this is used as the column heading if this column is included. |
| `p_help_text` | When creating a form against this table or view, this becomes the help text for the resulting item. |
| `p_display_in_form` | When creating a form against this table or view, this determines whether this column is displayed in the resulting form page. Valid values are Y and N. |
| `p_display_seq_form` | When creating a form against this table or view, this determines the sequence in which the columns are displayed in the resulting form page. |
| `p_mask_form` | When creating a form against this table or view, this specifies the mask that is applied to the item, such as 999-99-9999. This is not used for character based items. |
| `p_default_value` | When creating a form against this table or view, this specifies the default value for the item resulting from this column. |
| `p_required` | When creating a form against this table or view, this specifies to generate a validation in which the resulting item must be NOT NULL. Valid values are Y and N. |
| `p_display_width` | When creating a form against this table or view, this specifies the display width of the item resulting from this column. |
| `p_max_width` | When creating a form against this table or view, this specifies the maximum string length that a user is allowed to enter in the item resulting from this column. |
| `p_height` | When creating a form against this table or view, this specifies the display height of the item resulting from this column. |
| `p_display_in_report` | When creating a report against this table or view, this determines whether this column is displayed in the resulting report. Valid values are Y and N. |
| `p_display_seq_report` | When creating a report against this table or view, this determines the sequence in which the columns are displayed in the resulting report. |
| `p_mask_report` | When creating a report against this table or view, this specifies the mask that is applied against the data, such as 999-99-9999. This is not used for character based items. |
| `p_alignment` | When creating a report against this table or view, this determines the alignment for the resulting report column. Valid values are L for Left, C for Center, and R for Right. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_COLUMN(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_group_id => 'EXAMPLE',
        p_label => 'EXAMPLE',
        p_help_text => to_clob('Example text'),
        p_display_in_form => 'EXAMPLE',
        p_display_seq_form => 'EXAMPLE',
        p_mask_form => 'EXAMPLE',
        p_default_value => 'EXAMPLE',
        p_required => 'EXAMPLE',
        p_display_width => 'EXAMPLE',
        p_max_width => 'EXAMPLE',
        p_height => 'EXAMPLE',
        p_display_in_report => 'EXAMPLE',
        p_display_seq_report => 'EXAMPLE',
        p_mask_report => 'EXAMPLE',
        p_alignment => 'EXAMPLE'
    );
end;
/
```

