# APEX_PLUGIN_UTIL.DEBUG_DYNAMIC _ACTION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_DYNAMIC-_ACTION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure writes the data of the dynamic action meta data to the debug output if debugging is enabled.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.DEBUG_DYNAMIC` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.DEBUG_DYNAMIC_ACTION (
    p_plugin         IN apex_plugin.t_plugin,
    p_dynamic_action IN apex_plugin.t_dynamic_action );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plugin` | This is the p_plugin parameter of your plug-in function. |
| `p_dynamic_action` | This is the p_dynamic_action parameter of your plug-in function. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Call this from a dynamic-action plug-in callback while APEX debug is enabled.

```sql
begin
    apex_plugin_util.debug_dynamic_action(
        p_plugin         => p_plugin,
        p_dynamic_action => p_dynamic_action);

    apex_debug.info('Rendering custom dynamic action.');
end;
/
```
