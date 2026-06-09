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
    p_date_format               IN    DATE DEFAULT 'DD-MON-YYYY',
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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_ir.DATE_POPUP(
        p_idx => 1,
        p_row => 1,
        p_value => 'EXAMPLE',
        p_date_format => sysdate,
        p_size => 1,
        p_maxlength => 1,
        p_attributes => 'EXAMPLE',
        p_item_id => 'EXAMPLE',
        p_item_label => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

