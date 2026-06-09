# APEX_IR.TEXT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function generates text fields (or text input form items) from a SQL query.

## When To Use

Use this page when code needs the `APEX_IR.TEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.TEXT(
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_size        IN    NUMBER   DEFAULT NULL,
    p_maxlength   IN    NUMBER   DEFAULT NULL,
    p_attributes  IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL)
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Number to identify the item you want to generate. The number determines which G_FXX global is populated. See also APEX_APPLICATION . |
| `p_value` | Value of a text field item. |
| `p_size` | Controls HTML tag attributes (such as disabled). |
| `p_maxlength` | Maximum number of characters that can be entered in the text box. |
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
    l_result := apex_ir.TEXT(
        p_idx => 1,
        p_value => 'EXAMPLE',
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

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ir.TEXT(
            p_idx => 1,
            p_value => 'EXAMPLE',
            p_size => 1,
            p_maxlength => 1,
            p_attributes => 'EXAMPLE',
            p_item_id => 'EXAMPLE',
            p_item_label => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

