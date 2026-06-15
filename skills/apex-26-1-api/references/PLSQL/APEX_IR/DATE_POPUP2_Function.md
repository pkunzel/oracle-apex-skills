# APEX_IR.DATE_POPUP2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DATE_POPUP2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Use this function with forms that include date fields. The DATE_POPUP2 function dynamically generates a date field that has a jQuery based popup calendar with button.

## When To Use

Use this page when code needs the `APEX_IR.DATE_POPUP2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.DATE_POPUP2 (
    p_idx                   IN NUMBER,
    p_value                 IN DATE     DEFAULT NULL,
    p_date_format           IN VARCHAR2 DEFAULT NULL,
    p_size                  IN NUMBER   DEFAULT 20,
    p_maxLength             IN NUMBER   DEFAULT 2000,
    p_attributes            IN VARCHAR2 DEFAULT NULL,
    p_item_id               IN VARCHAR2 DEFAULT NULL,
    p_item_label            IN VARCHAR2 DEFAULT NULL,
    p_default_value         IN VARCHAR2 DEFAULT NULL,
    p_max_value             IN VARCHAR2 DEFAULT NULL,
    p_min_value             IN VARCHAR2 DEFAULT NULL,
    p_show_on               IN VARCHAR2 DEFAULT 'button',
    p_number_of_months      IN VARCHAR2 DEFAULT NULL,
    p_navigation_list_for   IN VARCHAR2 DEFAULT 'none',
    p_year_range            IN VARCHAR2 DEFAULT NULL,
    p_validation_date       IN VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used. Valid range of values is 1 to 50. For example, 1 creates F01 and 2 creates F02. |
| `p_value` | Value of a field item. |
| `p_date_format` | Valid database date format. |
| `p_size` | Controls HTML tag attributes (such as disabled). |
| `p_maxlength` | Determines the maximum number of enterable characters. Becomes the maxlength attribute of the HTML tag. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_default_value` | The default date which should be selected in datepicker calendar popup. |
| `p_max_value` | The Maximum date that can be selected from the datepicker. |
| `p_min_value` | The Minimum date that can be selected from the datepicker. |
| `p_show_on` | Determines when the datepicker displays, on button click or on focus of the item or both. |
| `p_number_of_months` | Determines number of months displayed. Value should be in this array format: [row,column] |
| `p_navigation_list_for` | Determines if a select list is displayed for Changing Month, Year, or Both. Possible values include: MONTH , YEAR , MONTH_AND_YEAR . Default NULL. |
| `p_year_range` | The range of years displayed in the year selection list. |
| `p_validation_date` | Used to store the Date value for the which date validation failed. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Render the jQuery date picker variant with date bounds and a unique item ID.

```sql
select apex_item.date_popup2(
           p_idx                 => 2,
           p_value               => due_date,
           p_date_format         => 'YYYY-MM-DD',
           p_size                => 10,
           p_maxLength           => 10,
           p_attributes          => 'class="due-date"',
           p_item_id             => 'f02_' || task_id,
           p_item_label          => 'Due date for task ' || task_name,
           p_min_value           => to_char(trunc(sysdate), 'YYYY-MM-DD'),
           p_max_value           => to_char(add_months(trunc(sysdate), 6), 'YYYY-MM-DD'),
           p_show_on             => 'button',
           p_number_of_months    => '[1,2]',
           p_navigation_list_for => 'MONTH_AND_YEAR',
           p_year_range          => 'c-1:c+1',
           p_validation_date     => to_char(due_date, 'YYYY-MM-DD')
       ) as due_date_item,
       task_name
from project_tasks
```
