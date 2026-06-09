# APEX_PLUGIN_UTIL.CLEAR_COMPONENT_VALUES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_COMPONENT_VALUES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure clears the component specific Session State set by apex_plugin_util.set_component_values .

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.CLEAR_COMPONENT_VALUES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
procedure clear_component_values;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.CLEAR_COMPONENT_VALUES;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.CLEAR_COMPONENT_VALUES;
end;
/
```

