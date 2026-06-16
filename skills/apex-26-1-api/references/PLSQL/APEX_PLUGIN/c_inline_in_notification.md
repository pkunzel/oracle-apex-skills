# APEX_PLUGIN.c_inline_in_notification

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.c_inline_in_notification` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use validation display constants when returning item validation errors from a plug-in.

```sql
function validate_hex_color (
    p_item   in apex_plugin.t_item,
    p_plugin in apex_plugin.t_plugin,
    p_value  in varchar2 )
    return apex_plugin.t_item_validation_result
is
    l_result apex_plugin.t_item_validation_result;
begin
    if p_value is not null
       and not regexp_like(p_value, '^#[[:xdigit:]]{6})
    then
        l_result.message := p_item.plain_label || ' must be a hex color like #336699.';
        l_result.display_location := apex_plugin.c_inline_with_field_and_notif;
        l_result.page_item_name := p_item.name;
    end if;

    return l_result;
end;
/
```
