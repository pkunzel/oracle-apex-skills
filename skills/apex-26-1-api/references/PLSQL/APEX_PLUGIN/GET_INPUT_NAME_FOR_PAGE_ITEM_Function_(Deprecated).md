# APEX_PLUGIN.GET_INPUT_NAME_FOR_PAGE_ITEM Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INPUT_NAME_FOR_PAGE_ITEM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_PLUGIN.GET_INPUT_NAME_FOR_PAGE_ITEM` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN.GET_INPUT_NAME_FOR_PAGE_ITEM (
    p_is_multi_value    IN BOOLEAN )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_is_multi_value` | If the HTML input element has multiple values, such as a select list with multiple= "multiple" , then set p_is_multi_value to TRUE . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This function is deprecated. Legacy item plug-ins used it to render the submitted input name.

```sql
declare
    l_input_name varchar2(4000);
begin
    l_input_name := apex_plugin.get_input_name_for_page_item(
        p_is_multi_value => false);
end;
/
```
