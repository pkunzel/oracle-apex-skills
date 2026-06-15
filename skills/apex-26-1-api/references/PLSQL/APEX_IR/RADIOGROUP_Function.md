# APEX_IR.RADIOGROUP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RADIOGROUP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function generates a radio group from a SQL query.

## When To Use

Use this page when code needs the `APEX_IR.RADIOGROUP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.RADIOGROUP (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_selected_value   IN    VARCHAR2 DEFAULT NULL,
    p_display          IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_onblur           IN    VARCHAR2 DEFAULT NULL,
    p_onchange         IN    VARCHAR2 DEFAULT NULL,
    p_onfocus          IN    VARCHAR2 DEFAULT NULL,
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used. Valid range of values is 1 to 50 .For example 1 creates F01 and 2 creates F02 . |
| `p_value` | Value of the radio group. |
| `p_selected_value` | Value that should be selected. |
| `p_display` | Text to display next to the radio option. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_onblur` | JavaScript to execute in the onBlur event. |
| `p_onchange` | JavaScript to execute in the onChange event. |
| `p_onfocus` | JavaScript to execute in the onFocus event. |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate radio buttons for a row-level approval choice.

```sql
select apex_item.radiogroup(
           p_idx            => 7,
           p_value          => 'APPROVED',
           p_selected_value => decision,
           p_display        => 'Approve',
           p_attributes     => 'class="decision-option"',
           p_onchange       => 'apex.event.trigger(this, "decisionchange")',
           p_item_id        => 'f07_approve_' || request_id,
           p_item_label     => 'Approve request ' || request_id
       ) ||
       apex_item.radiogroup(
           p_idx            => 7,
           p_value          => 'REJECTED',
           p_selected_value => decision,
           p_display        => 'Reject',
           p_attributes     => 'class="decision-option"',
           p_onchange       => 'apex.event.trigger(this, "decisionchange")',
           p_item_id        => 'f07_reject_' || request_id,
           p_item_label     => 'Reject request ' || request_id
       ) as decision_item,
       request_title
from approval_requests
```
