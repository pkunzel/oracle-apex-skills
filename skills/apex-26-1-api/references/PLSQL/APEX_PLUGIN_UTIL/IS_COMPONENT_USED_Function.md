# APEX_PLUGIN_UTIL.IS_COMPONENT_USED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_COMPONENT_USED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function returns TRUE if the passed build option, authorization, and condition are valid to display, process, or use this component.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.IS_COMPONENT_USED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.IS_COMPONENT_USED (
    p_build_option_id           IN NUMBER   DEFAULT NULL,
    p_authorization_scheme_id   IN VARCHAR2,
    p_condition_type            IN VARCHAR2,
    p_condition_expression1     IN VARCHAR2,
    p_condition_expression2     IN VARCHAR2,
    p_component                 IN VARCHAR2 DEFAULT NULL )
    RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use this helper before rendering optional plug-in subcomponents that have build options, authorization, or server-side conditions.

```sql
declare
    l_used boolean;
begin
    l_used := apex_plugin_util.is_component_used(
        p_build_option_id         => p_region.build_option_id,
        p_authorization_scheme_id => p_region.authorization_scheme_id,
        p_condition_type          => p_region.condition_type,
        p_condition_expression1   => p_region.condition_expression1,
        p_condition_expression2   => p_region.condition_expression2,
        p_component               => p_region.name);

    if l_used then
        sys.htp.p('<div class="optional-region-content"></div>');
    end if;
end;
/
```
