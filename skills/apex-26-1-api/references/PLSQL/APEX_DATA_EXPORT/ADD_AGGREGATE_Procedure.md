# APEX_DATA_EXPORT.ADD_AGGREGATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_AGGREGATE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This procedure adds an aggregate to the aggregate collection. Aggregate collections can be passed to the EXPORT calls in order to add an aggregate row. This procedure can be used in combination with control breaks or standalone for overall aggregates.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.ADD_AGGREGATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE ADD_AGGREGATE(
  p_aggregates            IN OUT NOCOPY t_aggregates,
  p_label                 IN            t_label,
  p_format_mask           IN            VARCHAR2                  DEFAULT NULL,
  p_display_column        IN            apex_exec.t_column_name,
  p_value_column          IN            apex_exec.t_column_name,
  p_overall_label         IN            t_label                   DEFAULT NULL,
  p_overall_value_column  IN            apex_exec.t_column_name   DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_aggregates` | Aggregate collection. |
| `p_label` | Aggregate label. |
| `p_format_mask` | Format mask to apply on the aggegate value. |
| `p_display_column` | Name of the column where to display the aggregate. |
| `p_value_column` | Name of the column which contains the value of the aggregate. |
| `p_overall_label` | Overall label. |
| `p_overall_value_column` | Name of the column which contains the value of the overall aggregate. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_aggregates apex_data_export.t_aggregates;
begin
    apex_data_export.add_aggregate(
        p_aggregates           => l_aggregates,
        p_label                => 'Total',
        p_format_mask          => 'FML999G999G990D00',
        p_display_column       => 'ORDER_TOTAL',
        p_value_column         => 'ORDER_TOTAL',
        p_overall_label        => 'Grand Total',
        p_overall_value_column => 'ORDER_TOTAL'
    );
end;
/
```

