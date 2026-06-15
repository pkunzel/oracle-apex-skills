# APEX_IR.SWITCH Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SWITCH-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function dynamically generates flip toggle item. If On/Off value and label are not passed, it renders Yes/No toggle. This function is designed to generate forms with F01 to F50 form array elements.

## When To Use

Use this page when code needs the `APEX_IR.SWITCH` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.SWITCH (
    p_idx           IN NUMBER,
    p_value         IN VARCHAR2,
    p_on_value      IN VARCHAR2 DEFAULT 'Y',
    p_on_label      IN VARCHAR2 DEFAULT 'Yes',
    p_off_value     IN VARCHAR2 DEFAULT 'N',
    p_off_label     IN VARCHAR2 DEFAULT 'No',
    p_item_id       IN VARCHAR2 DEFAULT NULL,
    p_item_label    IN VARCHAR2,
    p_attributes    IN VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02. Typically the P_IDX parameter is constant for a given column. |
| `p_value` | Form element current value. |
| `p_on_value` | The value of the item if the user picks On option. |
| `p_on_label` | The display text for the On option. |
| `p_off_value` | The value of the item if the user picks Off option. |
| `p_off_label` | The display text for the Off option. |
| `p_item_id` | HTML attribute ID for the tag. Try concatenating some string with rownum to make it unique. |
| `p_item_label` | Invisible label created for the item. |
| `p_attributes` | Additional HTML attributes to use for the form item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Render a Y/N toggle for each row in a tabular form style report.

```sql
select apex_item.switch(
           p_idx        => 9,
           p_value      => enabled_flag,
           p_on_value   => 'Y',
           p_on_label   => 'Enabled',
           p_off_value  => 'N',
           p_off_label  => 'Disabled',
           p_item_id    => 'f09_' || rule_id,
           p_item_label => 'Enabled flag for rule ' || rule_name,
           p_attributes => 'class="enabled-switch"'
       ) as enabled_item,
       rule_name
from automation_rules
```
