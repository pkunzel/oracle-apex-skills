# APEX_PLUGIN_UTIL.GET_ATTRIBUTE_AS_NUMBER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ATTRIBUTE_AS_NUMBER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function returns the value of a plug-in attribute as a number, taking into account NLS decimal separator effective for the current database session. Use this function in plug-in PL/SQL source for custom attributes of type NUMBER instead of the built-in to_number function.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_ATTRIBUTE_AS_NUMBER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_ATTRIBUTE_AS_NUMBER (
    p_value             IN VARCHAR2,
    p_attribute_label   IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_attribute_label` | The label of the custom plug-in attribute. |
| `p_value` | The value of a custom attribute of type NUMBER . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Convert NUMBER plug-in attributes with APEX's NLS-aware helper instead of TO_NUMBER.

```sql
declare
    l_max_rows number;
begin
    l_max_rows := apex_plugin_util.get_attribute_as_number(
        p_value           => p_region.attributes.get_varchar2('MAX_ROWS'),
        p_attribute_label => 'Maximum Rows');

    l_max_rows := coalesce(l_max_rows, 50);
end;
/
```
