# APEX_IR.SELECT_LIST_FROM_LOV_XL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST_FROM_LOV_XL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function dynamically generates very large select lists (greater than 32K) from a shared list of values (LOV). Use this function in SQL queries where you need to handle a column value longer than 4000 characters.

## When To Use

Use this page when code needs the `APEX_IR.SELECT_LIST_FROM_LOV_XL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.SELECT_LIST_FROM_LOV_XL (
    p_idx           IN   NUMBER,
    p_value         IN   VARCHAR2 DEFAULT NULL,
    p_lov           IN   VARCHAR2,
    p_attributes    IN   VARCHAR2 DEFAULT NULL,
    p_show_null     IN   VARCHAR2 DEFAULT 'YES',
    p_null_value    IN   VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN   VARCHAR2 DEFAULT '%',
    p_item_id       IN   VARCHAR2 DEFAULT NULL,
    p_item_label    IN   VARCHAR2 DEFAULT NULL,
    p_show_extra    IN   VARCHAR2 DEFAULT 'YES' )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02 . Typically, the p_idx parameter is constant for a given column. |
| `p_value` | Current value. This value should be a value in the p_lov parameter. |
| `p_lov` | Text name of a list of values. This list of values must be defined in your application. This parameter is used only by the select_list_from_lov function. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_show_null` | Extra select option to enable the NULL selection. Range of values is YES and NO . |
| `p_null_value` | Value to be returned when a user selects the NULL option. Only relevant when p_show_null equals YES . |
| `p_null_text` | Value to be displayed when a user selects the NULL option. Only relevant when p_show_null equals YES . |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_show_extra` | Shows the current value even if the value of p_value is not located in the select list. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Use the XL variant when the shared LOV can return many rows.

```sql
select apex_item.select_list_from_lov_xl(
           p_idx        => 8,
           p_value      => product_id,
           p_lov        => 'ACTIVE_PRODUCTS',
           p_attributes => 'class="product-list"',
           p_show_null  => 'YES',
           p_null_value => '-1',
           p_null_text  => '- Select product -',
           p_item_id    => 'f08_' || line_id,
           p_item_label => 'Product for line ' || line_id,
           p_show_extra => 'NO'
       ) as product_item,
       quantity
from order_lines
```
