# APEX_UI_DEFAULT_UPDATE.UPD_ITEM_FORMAT_MASK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_FORMAT_MASK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

The UPD_ITEM_FORMAT_MASK procedure sets the item format mask user interface default. This user interface default is used by wizards when you select to create a form based upon the table and include the specified column. Item format mask is typically used to format numbers and dates.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_ITEM_FORMAT_MASK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_FORMAT_MASK (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_format_mask           IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_format_mask` | Format mask to be associated with the column. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Update UI Defaults in the table-owning schema before generating new forms or reports from the table.

```sql
begin
    apex_ui_default_update.upd_item_format_mask(
        p_table_name => 'DEMO_ORDERS',
        p_column_name => 'ORDER_TOTAL',
        p_format_mask => 'FML999G999G990D00'
    );
end;
/
```

