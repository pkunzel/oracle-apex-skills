# APEX_IR.POPUPKEY_FROM_QUERY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUPKEY_FROM_QUERY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function generates a popup key select list from a SQL query. Similar to other available functions in the APEX_ITEM package, the POPUPKEY_FROM_QUERY function is designed to generate forms with F01 to F50 form array elements.

## When To Use

Use this page when code needs the `APEX_IR.POPUPKEY_FROM_QUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.POPUPKEY_FROM_QUERY (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_query        IN    VARCHAR2,
    p_width            IN    VARCHAR2 DEFAULT NULL,
    p_max_length       IN    VARCHAR2 DEFAULT NULL,
    p_form_index       IN    VARCHAR2 DEFAULT '0',
    p_escape_html      IN    VARCHAR2 DEFAULT NULL,
    p_max_elements     IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_ok_to_query      IN    VARCHAR2 DEFAULT 'YES',
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02 . Typically, p_idx is a constant for a given column. Because of the behavior of POPUPKEY_FROM_QUERY , the next index value should be p_idx + 1 . For example: |
| `p_value` | Form element current value. This value should be one of the values in the P_LOV_QUERY parameter. |
| `p_lov_query` | LOV query used for this popup. |
| `p_width` | Width of the text box. |
| `p_max_length` | Maximum number of characters that can be entered in the text box. |
| `p_form_index` | HTML form on the page in which an item is contained. Defaults to 0 and rarely used. Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the #FORM_OPEN# substitution string, then its index is zero and the form opened automatically by Oracle APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element. |
| `p_escape_html` | Replacements for special characters that require an escaped equivalent. for > for > &amp; for & This parameter is useful if you know your query returns illegal HTML. |
| `p_max_elements` | Limit on the number of rows that can be returned by your query. Limits the performance impact of user searches. By entering a value in this parameter, you force the user to search for a narrower set of results. |
| `p_attributes` | Additional HTML attributes to use for the form item. |
| `p_ok_to_query` | Range of values is YES and NO . If YES , a popup returns first set of rows for the LOV. If NO , a search is initiated to return rows. |
| `p_item_id` | ID attribute of the form element. |
| `p_item_label` | Invisible label created for the item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Render a popup LOV that stores the return key from a query.

```sql
select apex_item.popupkey_from_query(
           p_idx          => 6,
           p_value        => product_id,
           p_lov_query    => 'select product_name d, product_id r from products where active_flag = ''Y'' order by 1',
           p_width        => '50',
           p_max_length   => '40',
           p_escape_html  => 'YES',
           p_max_elements => '200',
           p_attributes   => 'class="product-picker"',
           p_ok_to_query  => 'NO',
           p_item_id      => 'f06_' || line_id,
           p_item_label   => 'Product for line ' || line_id
       ) as product_item,
       quantity
from order_lines
```
