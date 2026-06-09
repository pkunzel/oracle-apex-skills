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

## Simple Example

```sql
begin
    apex_plugin_util.SET_COMPONENT_VALUES(
        p_column_value_list => null,
        p_row_num => 1
    );
end;
/
```

