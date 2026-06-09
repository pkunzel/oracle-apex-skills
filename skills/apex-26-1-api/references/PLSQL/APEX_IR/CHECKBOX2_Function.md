# APEX_IR.CHECKBOX2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHECKBOX2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function creates check boxes.

## When To Use

Use this page when code needs the `APEX_IR.CHECKBOX2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.CHECKBOX2 (
    p_idx                       IN    NUMBER,
    p_value                     IN    VARCHAR2 DEFAULT NULL,
    p_attributes                IN    VARCHAR2 DEFAULT NULL,
    p_checked_values            IN    VARCHAR2 DEFAULT NULL,
    p_checked_values_delimiter  IN    VARCHAR2 DEFAULT ':',
    p_item_id                   IN    VARCHAR2 DEFAULT NULL,
    p_item_label                IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used. Valid range of values is 1 to 50. For example 1 creates F01 and 2 creates F02 |
| `p_value` | Value of a check box, hidden field, or input form item |
| `p_attributes` | Controls the size of the text field |
| `p_checked_values` | Values to be checked by default |
| `p_checked_values_delimiter` | Delimits the values in the previous parameter, p_checked_values |
| `p_item_id` | HTML attribute ID for the tag |
| `p_item_label` | Invisible label created for the item |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_ir.CHECKBOX2(
        p_idx => 1,
        p_value => 'EXAMPLE',
        p_attributes => 'EXAMPLE',
        p_checked_values => 'EXAMPLE',
        p_checked_values_delimiter => 'EXAMPLE',
        p_item_id => 'EXAMPLE',
        p_item_label => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

