# APEX_PLUGIN.c_on_error_page

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.c_on_error_page` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use c_on_error_page when a validation error should redirect to APEX's error page instead of inline display.

```sql
function validate_external_reference (
    p_item   in apex_plugin.t_item,
    p_plugin in apex_plugin.t_plugin,
    p_value  in varchar2 )
    return apex_plugin.t_item_validation_result
is
    l_result apex_plugin.t_item_validation_result;
begin
    if p_value like 'TEMP-%' then
        l_result.message := 'Temporary references cannot be submitted.';
        l_result.display_location := apex_plugin.c_on_error_page;
    end if;

    return l_result;
end;
/
```
