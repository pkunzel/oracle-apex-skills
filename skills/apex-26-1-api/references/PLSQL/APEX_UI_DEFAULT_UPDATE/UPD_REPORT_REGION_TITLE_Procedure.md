# APEX_UI_DEFAULT_UPDATE.UPD_REPORT_REGION_TITLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_REGION_TITLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

The UPD_REPORT_REGION_TITLE procedure sets the Report Region Title. User interface defaults are used in wizards when a report is created on a table.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_REPORT_REGION_TITLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_REGION_TITLE (
    p_table_name            IN VARCHAR2,
    p_report_region_title   IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Table name. |
| `p_report_region_title` | Desired report region title. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_REPORT_REGION_TITLE(
        p_table_name => 'EXAMPLE',
        p_report_region_title => 'EXAMPLE'
    );
end;
/
```

