# APEX_PLUGIN.t_plugin

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.t_plugin` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Read custom plug-in attributes through the 26.1 attributes object and static IDs.

```sql
declare
    l_css_class varchar2(4000);
    l_required  boolean;
begin
    l_css_class := p_plugin.attributes.get_varchar2(
        p_static_id     => 'CSS_CLASS',
        p_default_value => 'my-plugin');

    l_required := p_item.attributes.get_boolean(
        p_static_id     => 'REQUIRED',
        p_default_value => false);
end;
/
```
