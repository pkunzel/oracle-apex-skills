# APEX_PLUGIN.GET_KEEP_BACKGROUND_EXECS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

The APEX_PLUGIN package provides the interface declarations and some utility functions to work with plug-ins.

## When To Use

Use this page when code needs the `APEX_PLUGIN.GET_KEEP_BACKGROUND_EXECS` function. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use this helper when a plug-in must honor the current background-execution preference.

```sql
begin
    if apex_plugin.get_keep_background_execs then
        apex_debug.info('Preserving existing background executions for this plug-in call.');
    end if;
end;
/
```
