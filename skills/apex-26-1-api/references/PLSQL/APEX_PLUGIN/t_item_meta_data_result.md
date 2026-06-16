# APEX_PLUGIN.t_item_meta_data_result

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.t_item_meta_data_result` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Metadata callbacks return the item metadata result record after setting the documented fields needed by the plug-in.

```sql
function metadata_rating_item (
    p_item   in apex_plugin.t_item,
    p_plugin in apex_plugin.t_plugin )
    return apex_plugin.t_item_meta_data_result
is
    l_result apex_plugin.t_item_meta_data_result;
begin
    return l_result;
end;
/
```
