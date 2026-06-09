# APEX_IR.POPUP_FROM_QUERY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUP_FROM_QUERY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Generates an HTML popup select list from a query. This function is designed to generate forms with F01 to F50 form array elements.

## When To Use

Use this page when code needs the `APEX_IR.POPUP_FROM_QUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.POPUP_FROM_QUERY (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_query        IN    VARCHAR2,
    p_width            IN    VARCHAR2 DEFAULT NULL,
    p_max_length       IN    VARCHAR2 DEFAULT NULL,
    p_form_index       IN    VARCHAR2 DEFAULT '0',
    p_escape_html      IN    VARCHAR2 DEFAULT NULL,
    p_max_elements     IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_ok_to_query      IN    VARCHAR2 DEFAULT 'YES',
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02 . Typically, p_idx is a constant for a given column. |
| `p_value` | Form element current value. This value should be one of the values in the p_lov_query parameter. |
| `p_lov_query` | SQL query that is expected to select two columns (a display column and a return column). For example: |
| `p_width` | Width of the text box. |
| `p_max_length` | Maximum number of characters that can be entered in the text box. |
| `p_form_index` | HTML form on the page in which an item is contained. Defaults to 0 and rarely used. Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the #FORM_OPEN# substitution string, then its index is zero and the form opened automatically by Oracle APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element. |
| `p_escape_html` | Replacements for special characters that require an escaped equivalent. for > for > &amp; for & Range of values is YES and NO . If YES , special characters are escaped. This parameter is useful if you know your query returns invalid HTML. |
| `p_max_elements` | Limit on the number of rows that can be returned by your query. Limits the performance impact of user searches. By entering a value in this parameter, you force the user to search for a narrower set of results. |
| `p_attributes` | Additional HTML attributes to use for the form item. |
| `p_ok_to_query` | Range of values is YES and NO . If YES , a popup returns the first set of rows for the LOV. If NO , a search is initiated to return rows. |
| `p_item_id` | ID attribute of the form element. |
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
    l_result := apex_ir.POPUP_FROM_QUERY(
        p_idx => 1,
        p_value => 'EXAMPLE',
        p_lov_query => to_clob('Example text'),
        p_width => 'EXAMPLE',
        p_max_length => 'EXAMPLE',
        p_form_index => 'EXAMPLE',
        p_escape_html => 'EXAMPLE',
        p_max_elements => 'EXAMPLE',
        p_attributes => 'EXAMPLE',
        p_ok_to_query => to_clob('Example text'),
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

    l_result := apex_ir.POPUP_FROM_QUERY(
            p_idx => 1,
            p_value => 'EXAMPLE',
            p_lov_query => to_clob('Example text'),
            p_width => 'EXAMPLE',
            p_max_length => 'EXAMPLE',
            p_form_index => 'EXAMPLE',
            p_escape_html => 'EXAMPLE',
            p_max_elements => 'EXAMPLE',
            p_attributes => 'EXAMPLE',
            p_ok_to_query => to_clob('Example text'),
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

