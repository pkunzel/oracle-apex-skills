# APEX_IR.SELECT_LIST Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function dynamically generates a static select list. This function is designed to generate forms with F01 to F50 form array elements.

## When To Use

Use this page when code needs the `APEX_IR.SELECT_LIST` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.SELECT_LIST (
    p_idx           IN   NUMBER,
    p_value         IN   VARCHAR2 DEFAULT NULL,
    p_list_values   IN   VARCHAR2 DEFAULT NULL,
    p_attributes    IN   VARCHAR2 DEFAULT NULL,
    p_show_null     IN   VARCHAR2 DEFAULT 'NO',
    p_null_value    IN   VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN   VARCHAR2 DEFAULT '%',
    p_item_id       IN   VARCHAR2 DEFAULT NULL,
    p_item_label    IN   VARCHAR2 DEFAULT NULL,
    p_show_extra    IN   VARCHAR2 DEFAULT 'YES' )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02 . Typically the P_IDX parameter is constant for a given column. |
| `p_value` | Current value. This value should be a value in the P_LIST_VALUES parameter. |
| `p_list_values` | List of static values separated by commas. Displays values and returns values that are separated by semicolons. Note that this is only available in the SELECT_LIST function. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_show_null` | Extra select option to enable the NULL selection. Range of values is YES and NO . |
| `p_null_value` | Value to be returned when a user selects the NULL option. Only relevant when p_show_null equals YES . |
| `p_null_text` | Value to be displayed when a user selects the NULL option. Only relevant when p_show_null equals YES . |
| `p_item_id` | HTML attribute ID for the input > tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_show_extra` | Shows the current value even if the value of p_value is not located in the select list. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Build a static select list for each row; submitted values arrive in APEX_APPLICATION.G_F08.

```sql
select apex_item.select_list(
           p_idx         => 8,
           p_value       => status,
           p_list_values => 'Open;OPEN,In Progress;IN_PROGRESS,Closed;CLOSED',
           p_attributes  => 'class="status-list"',
           p_show_null   => 'NO',
           p_item_id     => 'f08_' || task_id,
           p_item_label  => 'Status for task ' || task_name,
           p_show_extra  => 'NO'
       ) as status_item,
       task_name
from project_tasks
```
