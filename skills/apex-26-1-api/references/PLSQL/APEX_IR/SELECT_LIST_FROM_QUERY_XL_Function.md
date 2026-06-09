# APEX_IR.SELECT_LIST_FROM_QUERY_XL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST_FROM_QUERY_XL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function is the same as SELECT_LIST_FROM_QUERY , but its return value is a CLOB. This allows its use in SQL queries where you need to handle a column value longer than 4000 characters. Returned values will be limited to 32K. Similar to other functions available in the APEX_ITEM package, these select list functions are designed to generate forms with F01 to F50 form array elements.

## When To Use

Use this page when code needs the `APEX_IR.SELECT_LIST_FROM_QUERY_XL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.SELECT_LIST_FROM_QUERY_XL (
    p_idx           IN    NUMBER,
    p_value         IN    VARCHAR2 DEFAULT NULL,
    p_query         IN    VARCHAR2,
    p_attributes    IN    VARCHAR2 DEFAULT NULL,
    p_show_null     IN    VARCHAR2 DEFAULT 'YES',
    p_null_value    IN    VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN    VARCHAR2 DEFAULT '%',
    p_item_id       IN    VARCHAR2 DEFAULT NULL,
    p_item_label    IN    VARCHAR2 DEFAULT NULL,
    p_show_extra    IN    VARCHAR2 DEFAULT 'YES' )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02 . Typically the p_idx parameter is constant for a given column. |
| `p_value` | Current value. This value should be a value in the p_query parameter. |
| `p_query` | SQL query that is expected to select two columns, a display column, and a return column. For example: Note that this is used only by the SELECT_LIST_FROM_QUERY_XL function. Also note, if only one column is specified in the select clause of this query, the value for this column is used for both display and return purposes. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_show_null` | Extra select option to enable the NULL selection. Range of values is YES and NO . |
| `p_null_value` | Value to be returned when a user selects the NULL option. Only relevant when p_show_null equals YES . |
| `p_null_text` | Value to be displayed when a user selects the NULL option. Only relevant when p_show_null equals YES . |
| `p_item_id` | HTML attribute ID for the tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_show_extra` | Show the current value even if the value of p_value is not located in the select list. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_ir.SELECT_LIST_FROM_QUERY_XL(
        p_idx => 1,
        p_value => 'EXAMPLE',
        p_query => to_clob('Example text'),
        p_attributes => 'EXAMPLE',
        p_show_null => 'EXAMPLE',
        p_null_value => 'EXAMPLE',
        p_null_text => to_clob('Example text'),
        p_item_id => 'EXAMPLE',
        p_item_label => 'EXAMPLE',
        p_show_extra => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ir.SELECT_LIST_FROM_QUERY_XL(
            p_idx => 1,
            p_value => 'EXAMPLE',
            p_query => to_clob('Example text'),
            p_attributes => 'EXAMPLE',
            p_show_null => 'EXAMPLE',
            p_null_value => 'EXAMPLE',
            p_null_text => to_clob('Example text'),
            p_item_id => 'EXAMPLE',
            p_item_label => 'EXAMPLE',
            p_show_extra => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

