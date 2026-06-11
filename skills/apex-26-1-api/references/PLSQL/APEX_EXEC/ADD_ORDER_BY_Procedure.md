# APEX_EXEC.ADD_ORDER_BY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_ORDERBY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure adds an order by expression to the order bys collection.

## When To Use

Use this page when code needs the `APEX_EXEC.ADD_ORDER_BY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ADD_ORDER_BY (
    p_order_bys         IN OUT NOCOPY t_order_bys,
    p_position          IN            PLS_INTEGER,
    p_direction         IN            t_order_direction DEFAULT c_order_asc,
    p_order_nulls       IN            t_order_nulls     DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_order_bys` | Order by collection. |
| `p_position` | References a column of the provided data source by position. |
| `p_column_name` | References a column name or alias of the provided data source. |
| `p_direction` | Defines if the column is sorted ascending or descending. Valid values are c_order_asc and c_order_desc . |
| `p_order_nulls` | Defines if NULL data sorts to the bottom or top. Valid values are NULL , c_order_nulls_first and c_order_nulls_last . Use NULL for automatic handling based on the sort direction. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_order_bys apex_exec.t_order_bys;
begin
    apex_exec.add_order_by(
        p_order_bys   => l_order_bys,
        p_position    => 1,
        p_direction   => apex_exec.c_order_desc,
        p_order_nulls => apex_exec.c_order_nulls_last
    );
end;
/
```
