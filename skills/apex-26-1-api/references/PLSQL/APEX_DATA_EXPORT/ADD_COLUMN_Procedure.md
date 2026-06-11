# APEX_DATA_EXPORT.ADD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This procedure adds a column to the column collection. Column collections can be passed to the EXPORT calls in order to return only a subset of the columns in the export. If an empty column collection (or no column collection) passes, all columns defined in the Query Context are added to the export.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.ADD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE ADD_COLUMN (
  p_columns             IN OUT NOCOPY t_columns,
  p_name                IN            apex_exec.t_column_name,
  p_heading             IN            VARCHAR2                  DEFAULT NULL,
  p_format_mask         IN            VARCHAR2                  DEFAULT NULL,
  p_heading_alignment   IN            t_alignment               DEFAULT NULL,
  p_value_alignment     IN            t_alignment               DEFAULT NULL,
  p_width               IN            NUMBER                    DEFAULT NULL,
  p_is_column_break     IN            BOOLEAN                   DEFAULT FALSE,
  p_is_frozen           IN            BOOLEAN                   DEFAULT FALSE,
  p_column_group_idx    IN            PLS_INTEGER               DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_columns` | Column collection. |
| `p_name` | Column name. |
| `p_heading` | Column heading text. |
| `p_format_mask` | Format mask to apply. Useful for XLSX exports where native datatypes are used. |
| `p_heading_alignment` | Column heading alignment. Valid values are: LEFT , CENTER , RIGHT . |
| `p_value_alignment` | Column value alignment. Valid values are: LEFT , CENTER , RIGHT . |
| `p_width` | PDF only. The column width. By default the units are as percentage. The units can be modified by updating the width_units of the print config. |
| `p_is_column_break` | Whether to use this column for control breaks |
| `p_is_frozen` | XLSX only. Whether the column is frozen. |
| `p_column_group_idx` | The index of a column group. If used, this column will part of the column group. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns apex_data_export.t_columns;
begin
    apex_data_export.add_column(
        p_columns           => l_columns,
        p_name              => 'ORDER_TOTAL',
        p_heading           => 'Order Total',
        p_format_mask       => 'FML999G999G990D00',
        p_heading_alignment => apex_data_export.c_align_end,
        p_value_alignment   => apex_data_export.c_align_end,
        p_width             => 14,
        p_is_frozen         => true
    );
end;
/
```

