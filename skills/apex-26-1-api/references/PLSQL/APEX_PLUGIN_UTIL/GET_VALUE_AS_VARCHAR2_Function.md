# APEX_PLUGIN_UTIL.GET_VALUE_AS_VARCHAR2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_VALUE_AS_VARCHAR2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function can be used if you use GET_DATA2 to read the column values along with their original data types. It will convert and return the passed in p_value as VARCHAR2 .

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_VALUE_AS_VARCHAR2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_VALUE_AS_VARCHAR2 (
    p_data_type     IN VARCHAR2,
    p_value         IN T_VALUE,
    p_format_mask   IN VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_data_type` | The data type of the value stored in p_value . |
| `p_value` | The value of type t_value which contains the value to be converted and returned as VARCHAR2 . |
| `p_format_mask` | The format mask used to convert the value into a VARCHAR2 . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Convert an APEX session-state value into display text using the declared data type and optional format mask.

```sql
declare
    l_display varchar2(32767);
begin
    l_display := apex_plugin_util.get_value_as_varchar2(
        p_data_type   => apex_plugin_util.c_data_type_date,
        p_value       => p_value,
        p_format_mask => 'YYYY-MM-DD');
end;
/
```
