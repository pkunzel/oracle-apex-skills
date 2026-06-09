# APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_REPORT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_DISPLAY_IN_REPORT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

The UPD_DISPLAY_IN_REPORT procedure sets the display in report user interface default. This user interface default is used by wizards when you select to create a report based upon the table and controls whether the column is included by default or not.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_REPORT (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_display_in_report     IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_display_in_report` | Determines whether to display in the report by default, valid values are Y and N . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_DISPLAY_IN_REPORT(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_display_in_report => 'EXAMPLE'
    );
end;
/
```

