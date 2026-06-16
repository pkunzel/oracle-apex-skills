# APEX_PLUGIN_UTIL.GET_POSITION_IN_LIST Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_POSITION_IN_LIST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_POSITION_IN_LIST` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_POSITION_IN_LIST (
    p_list  IN apex_application_global.vc_arr2,
    p_value IN VARCHAR2 )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_list` | Array of type apex_application_global.vc_arr2 that contains entries of type VARCHAR2. |
| `p_value` | Value located in the p_list array. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This routine is deprecated. Existing legacy code can still use it to find a value in an APEX string array.

```sql
declare
    l_values apex_application_global.vc_arr2 := apex_application_global.vc_arr2('OPEN', 'CLOSED');
    l_pos    number;
begin
    l_pos := apex_plugin_util.get_position_in_list(
        p_list  => l_values,
        p_value => :P10_STATUS);
end;
/
```
