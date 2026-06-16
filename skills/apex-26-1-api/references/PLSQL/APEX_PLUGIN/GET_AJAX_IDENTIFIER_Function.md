# APEX_PLUGIN.GET_AJAX_IDENTIFIER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AJAX_IDENTIFIER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This function returns the Ajax identifier used to call the Ajax callback function defined for the plug-in.

## When To Use

Use this page when code needs the `APEX_PLUGIN.GET_AJAX_IDENTIFIER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN.GET_AJAX_IDENTIFIER
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Expose the Ajax identifier during rendering and use it from client JavaScript with apex.server.plugin.

```sql
declare
    l_ajax_identifier varchar2(4000);
begin
    l_ajax_identifier := apex_plugin.get_ajax_identifier;

    apex_javascript.add_onload_code(
        p_code => 'myRegion.init(' ||
                  apex_javascript.add_value(p_region.dom_id) ||
                  apex_javascript.add_value(l_ajax_identifier, false) ||
                  ');');
end;
/
```
