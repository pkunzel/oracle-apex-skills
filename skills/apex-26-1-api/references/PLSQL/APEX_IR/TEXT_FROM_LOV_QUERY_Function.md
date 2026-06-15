# APEX_IR.TEXT_FROM_LOV_QUERY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXT_FROM_LOV_QUERY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Display an item as text, deriving the display value from a list of values query.

## When To Use

Use this page when code needs the `APEX_IR.TEXT_FROM_LOV_QUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.TEXT_FROM_LOV_QUERY (
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_query       IN    VARCHAR2,
    p_null_text   IN    VARCHAR2 DEFAULT '%' )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value of a field item. |
| `p_query` | SQL query that is expected to select two columns, a display column and a return column. For example: Note if only one column is specified in the select clause of this query, the value for this column is used for both display and return purposes. |
| `p_null_text` | Value to be displayed when the value of the field item is NULL or a corresponding entry is not located for the value p_value in the list of values query. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Display a lookup value using a two-column LOV query.

```sql
select apex_item.text_from_lov_query(
           p_value     => customer_id,
           p_query     => 'select customer_name d, customer_id r from customers order by 1',
           p_null_text => '- No customer -'
       ) as customer_name,
       order_number
from orders
```
