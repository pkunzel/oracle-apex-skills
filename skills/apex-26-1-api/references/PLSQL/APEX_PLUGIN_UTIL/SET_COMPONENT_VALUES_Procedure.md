# APEX_PLUGIN_UTIL.SET_COMPONENT_VALUES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_COMPONENT_VALUES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure extends Session State to include the column values of a specific row number. By doing so, columns can be referenced using substitution syntax or the V function in the same way as you can reference page or application items.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.SET_COMPONENT_VALUES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.SET_COMPONENT_VALUES (
    p_column_value_list IN t_column_list,
    p_row_num           IN PLS_INTEGER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_column_value_list` | Table of t_column_list returned by the call to APEX_PLUGIN.GET_DATA2 . |
| `p_row_num` | Row number in p_column_value_list for which the column values should be set in Session State . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Expose row column values as component substitutions while rendering row-specific output.

```sql
declare
    l_rows apex_plugin_util.t_column_list;
begin
    l_rows := apex_plugin_util.get_data2(
        p_sql_statement  => 'select display_name, status from tasks',
        p_min_columns    => 2,
        p_max_columns    => 2,
        p_component_name => p_region.name);

    apex_plugin_util.set_component_values(
        p_column_value_list => l_rows,
        p_row_num           => 1);
end;
/
```
