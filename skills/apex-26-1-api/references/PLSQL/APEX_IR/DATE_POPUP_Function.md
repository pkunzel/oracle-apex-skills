# APEX_IR.DATE_POPUP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DATE_POPUP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Use this function with forms that include date fields. The DATE_POPUP function dynamically generates a date field that has a popup calendar button.

## When To Use

Use this page when code needs the `APEX_IR.DATE_POPUP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.DATE_POPUP (
    p_idx                       IN    NUMBER,
    p_row                       IN    NUMBER,
    p_value                     IN    VARCHAR2 DEFAULT NULL,
    p_date_format               IN    VARCHAR2 DEFAULT 'DD-MON-YYYY',
    p_size                      IN    NUMBER DEFAULT 20,
    p_maxlength                 IN    NUMBER DEFAULT 2000,
    p_attributes                IN    VARCHAR2 DEFAULT NULL,
    p_item_id                   IN    VARCHAR2 DEFAULT NULL,
    p_item_label                IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used.Valid range of values is 1 to 50. For example, 1 creates F01 and 2 creates F02 . |
| `p_row` | This parameter is deprecated. Anything specified for this value is ignored. |
| `p_value` | Value of a field item. |
| `p_date_format` | Valid database date format. |
| `p_size` | Controls HTML tag attributes (such as disabled). |
| `p_maxlength` | Determines the maximum number of enterable characters. Becomes the maxlength attribute of the HTML tag. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Render an editable due-date column in a SQL report.

```sql
select apex_item.date_popup(
           p_idx         => 2,
           p_row         => rownum,
           p_value       => to_char(due_date, 'YYYY-MM-DD'),
           p_date_format => 'YYYY-MM-DD',
           p_size        => 10,
           p_maxlength   => 10,
           p_attributes  => 'class="due-date"',
           p_item_id     => 'f02_' || task_id,
           p_item_label  => 'Due date for task ' || task_name
       ) as due_date_item,
       task_name
from project_tasks
```
