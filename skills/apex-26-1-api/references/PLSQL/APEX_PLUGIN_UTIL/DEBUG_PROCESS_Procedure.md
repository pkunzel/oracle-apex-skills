# APEX_PLUGIN_UTIL.DEBUG_PROCESS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_PROCESS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure writes the data of the process meta data to the debug output if debugging is enabled.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.DEBUG_PROCESS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.DEBUG_PROCESS (
    p_plugin         IN apex_plugin.t_plugin,
    p_process        IN apex_plugin.t_process );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plugin` | This is the p_plugin parameter of your plug-in function. |
| `p_process` | This is the p_process parameter of your plug-in function. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.DEBUG_PROCESS(
        p_plugin => null,
        p_process => null
    );
end;
/
```

