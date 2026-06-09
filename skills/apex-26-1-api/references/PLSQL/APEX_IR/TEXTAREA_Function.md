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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_ir.TEXTAREA(
        p_idx => 1,
        p_value => 'EXAMPLE',
        p_rows => 1,
        p_cols => 1,
        p_attributes => 'EXAMPLE',
        p_item_id => 'EXAMPLE',
        p_item_label => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

