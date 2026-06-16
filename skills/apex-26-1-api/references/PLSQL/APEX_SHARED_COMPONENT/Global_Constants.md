# APEX_SHARED_COMPONENT.Global Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SHARED_COMPONENT.Global-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SHARED_COMPONENT](../APEX_SHARED_COMPONENT.md)

## Purpose

The APEX_SHARED_COMPONENT package uses the following constants.

## When To Use

Use this page when code needs the `APEX_SHARED_COMPONENT.Global Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the documented component-type constants instead of passing untyped values.

```sql
declare
    l_component_type apex_shared_component.t_component_type;
begin
    l_component_type := apex_shared_component.c_component_email_template;

    apex_debug.info('Ready to publish shared component type %s', l_component_type);
end;
/
```
