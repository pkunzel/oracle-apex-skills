# APEX_PLUGIN.t_escape_mode

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.t_escape_mode` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use escape-mode constants when a plug-in attribute controls the output context.

```sql
declare
    l_mode varchar2(100);
begin
    l_mode := p_plugin.attributes.get_varchar2(
        p_static_id     => 'ESCAPE_MODE',
        p_default_value => apex_plugin.c_escape_mode_html);

    if l_mode = apex_plugin.c_escape_mode_raw then
        sys.htp.p(p_region.attributes.get_varchar2('TRUSTED_HTML'));
    end if;
end;
/
```
