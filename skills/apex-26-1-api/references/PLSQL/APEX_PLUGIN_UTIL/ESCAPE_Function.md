# APEX_PLUGIN_UTIL.ESCAPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ESCAPE-Function-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function is used when the standard attribute "Has Escape Output Attribute" option is enabled for an item type plug-in which enables a developer to choose whether to escape the output.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.ESCAPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.ESCAPE (
    p_value     IN VARCHAR2,
    p_escape    IN BOOLEAN )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | This is the value you want to escape depending on the p_escape parameter. |
| `p_escape` | If TRUE , the return value is escaped. If FALSE , the value is not escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use ESCAPE when a plug-in exposes an escape toggle and you need one branch for safe text output.

```sql
declare
    l_label varchar2(4000);
begin
    l_label := apex_plugin_util.escape(
        p_value  => p_item.plain_label,
        p_escape => p_plugin.attributes.get_boolean(
            p_static_id     => 'ESCAPE_LABEL',
            p_default_value => true));

    sys.htp.p('<span class="item-label">' || l_label || '</span>');
end;
/
```
