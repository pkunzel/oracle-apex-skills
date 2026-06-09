# APEX_PLUGIN_UTIL.DEBUG_REGION Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_REGION-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure writes the data of the region meta data to the debug output if debugging is enabled.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.DEBUG_REGION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.DEBUG_REGION (
    p_plugin              IN apex_plugin.t_plugin,
    p_region              IN apex_plugin.t_region );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plugin` | This is the p_plugin parameter of your plug-in function. |
| `p_region` | This is the p_region parameter of your plug-in function. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.DEBUG_REGION(
        p_plugin => null,
        p_region => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.DEBUG_REGION(
            p_plugin => null,
            p_region => null
        );
end;
/
```

