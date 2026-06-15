# APEX_IR.HIDDEN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HIDDEN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function dynamically generates hidden form items.

## When To Use

Use this page when code needs the `APEX_IR.HIDDEN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.HIDDEN (
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT
    p_attributes  IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number to identify the item you want to generate. The number determines which G_FXX global is populated See also APEX_APPLICATION . |
| `p_value` | Value of the hidden input form item. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Submit a primary key for each report row without showing it to the user.

```sql
select apex_item.hidden(
           p_idx        => 4,
           p_value      => order_id,
           p_item_id    => 'f04_' || order_id,
           p_item_label => 'Order id ' || order_id
       ) as order_id_item,
       order_number
from orders
```
