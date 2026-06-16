# APEX_PLUGIN.t_region_render_param

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.t_region_render_param` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Region plug-ins receive region metadata and return a render result after writing markup.

```sql
function render_task_region (
    p_region in apex_plugin.t_region,
    p_plugin in apex_plugin.t_plugin,
    p_param  in apex_plugin.t_region_render_param )
    return apex_plugin.t_region_render_result
is
    l_result apex_plugin.t_region_render_result;
begin
    sys.htp.p(
        '<section id="' || apex_escape.html_attribute(p_region.dom_id) || '"' ||
        ' class="task-region">' ||
        '<input id="' || apex_escape.html_attribute(p_region.dom_id || '_search') || '" type="search">' ||
        '<div class="task-region-body"></div>' ||
        '</section>');

    l_result.navigable_dom_id := p_region.dom_id || '_search';
    return l_result;
end;
/
```
