# APEX_PLUGIN.t_dynamic_action_render_param

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.t_dynamic_action_render_param` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Dynamic action render callbacks return JavaScript hook information for the client-side action.

```sql
function render_dynamic_action (
    p_dynamic_action in apex_plugin.t_dynamic_action,
    p_plugin         in apex_plugin.t_plugin,
    p_param          in apex_plugin.t_dynamic_action_render_param )
    return apex_plugin.t_dynamic_action_render_result
is
    l_result apex_plugin.t_dynamic_action_render_result;
begin
    l_result.javascript_function := 'myActions.highlight';
    l_result.ajax_identifier := apex_plugin.get_ajax_identifier;
    return l_result;
end;
/
```
