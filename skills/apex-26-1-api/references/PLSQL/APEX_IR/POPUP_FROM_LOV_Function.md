# APEX_IR.POPUP_FROM_LOV Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUP_FROM_LOV-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function generates an HTML popup select list from an application shared list of values (LOV). Like other available functions in the APEX_ITEM package, POPUP_FROM_LOV function is designed to generate forms with F01 to F50 form array elements.

## When To Use

Use this page when code needs the `APEX_IR.POPUP_FROM_LOV` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.POPUP_FROM_LOV (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_name         IN    VARCHAR2,
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
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02 . Typically, p_idx is a constant for a given column. |
| `p_value` | Form element current value. This value should be one of the values in the p_lov_name parameter. |
| `p_lov_name` | Named LOV used for this popup. |
| `p_width` | Width of the text box. |
| `p_max_length` | Maximum number of characters that can be entered in the text box. |
| `p_form_index` | HTML form on the page in which an item is contained. Defaults to 0 (rarely used). Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the #FORM_OPEN# substitution string, then its index is zero and the form opened automatically by Oracle APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element. |
| `p_escape_html` | Replacements for special characters that require an escaped equivalent: for > for > &amp; for & Range of values is YES and NO . If YES , special characters are escaped. This parameter is useful if you know your query returns invalid HTML. |
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

Render a popup LOV using a shared LOV name.

```sql
select apex_item.popup_from_lov(
           p_idx          => 5,
           p_value        => customer_id,
           p_lov_name     => 'ACTIVE_CUSTOMERS',
           p_width        => '40',
           p_max_length   => '30',
           p_escape_html  => 'YES',
           p_max_elements => '200',
           p_attributes   => 'class="customer-picker"',
           p_ok_to_query  => 'YES',
           p_item_id      => 'f05_' || order_id,
           p_item_label   => 'Customer for order ' || order_number
       ) as customer_item,
       order_number
from orders
```
