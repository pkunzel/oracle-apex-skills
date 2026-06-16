# APEX_PLUGIN_UTIL.SPLIT_MUTLIPLE_VALUE_TO_TABLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_MUTLIPLE_VALUE_TO_TABLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function converts a separated input string into an array.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.SPLIT_MUTLIPLE_VALUE_TO_TABLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.SPLIT_MUTLIPLE_VALUE_TO_TABLE (
    p_value IN CLOB,
    p_item  IN apex_plugin_api.t_item )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | The input value. |
| `p_item` | This type contains information about the current item. |

## Returns

An array of strings.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the documented spelling of the function name and let APEX apply the item's multi-value settings.

```sql
declare
    l_values apex_t_varchar2;
begin
    l_values := apex_plugin_util.split_mutliple_value_to_table(
        p_value => :P10_SELECTED_USERS,
        p_item  => p_item);
end;
/
```
