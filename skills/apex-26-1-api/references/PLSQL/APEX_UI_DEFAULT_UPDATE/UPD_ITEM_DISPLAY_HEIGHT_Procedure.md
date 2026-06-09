# APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_HEIGHT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_DISPLAY_HEIGHT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

Sets the item display height user interface default. This user interface default is used by wizards when you select to create a form based upon the table and include the specified column. Display height controls if the item is a text box or a text area.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_HEIGHT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_HEIGHT (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_display_height        IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_display_height` | Display height of any items created based upon this column. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_ITEM_DISPLAY_HEIGHT(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_display_height => 1
    );
end;
/
```

