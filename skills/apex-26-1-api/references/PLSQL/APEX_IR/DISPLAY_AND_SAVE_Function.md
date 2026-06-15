# APEX_IR.DISPLAY_AND_SAVE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISPLAY_AND_SAVE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Use this function to display an item as text, but save its value to session state.

## When To Use

Use this page when code needs the `APEX_IR.DISPLAY_AND_SAVE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.DISPLAY_AND_SAVE (
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used.Valid range of values is 1 to 50. For example, 1 creates F01 and 2 creates F02 . |
| `p_value` | Current value. |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Display an immutable value while still submitting it in an APEX form array.

```sql
select apex_item.display_and_save(
           p_idx        => 3,
           p_value      => order_number,
           p_item_id    => 'f03_' || order_id,
           p_item_label => 'Order number ' || order_number
       ) as order_number_display,
       customer_name
from orders
```
