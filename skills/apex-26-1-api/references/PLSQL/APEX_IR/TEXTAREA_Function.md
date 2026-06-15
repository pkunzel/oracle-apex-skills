# APEX_IR.TEXTAREA Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXTAREA-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function creates text areas.

## When To Use

Use this page when code needs the `APEX_IR.TEXTAREA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.TEXTAREA (
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_rows        IN    NUMBER   DEFAULT 40,
    p_cols        IN    NUMBER   DEFAULT 4,
    p_attributes  IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number to identify the item you want to generate. The number determines which G_FXX global is populated. See also APEX_APPLICATION . |
| `p_value` | Value of the text area item. |
| `p_rows` | Height of the text area (HTML rows attribute). |
| `p_cols` | Width of the text area (HTML column attribute). |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Render a multi-line editable note column.

```sql
select apex_item.textarea(
           p_idx        => 11,
           p_value      => review_notes,
           p_rows       => 4,
           p_cols       => 60,
           p_attributes => 'class="review-notes"',
           p_item_id    => 'f11_' || review_id,
           p_item_label => 'Review notes for ' || review_id
       ) as notes_item,
       reviewer_name
from order_reviews
```
