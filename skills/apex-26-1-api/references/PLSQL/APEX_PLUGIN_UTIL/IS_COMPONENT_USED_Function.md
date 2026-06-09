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

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_plugin_util.IS_COMPONENT_USED(
        p_build_option_id => 1,
        p_authorization_scheme_id => 'EXAMPLE',
        p_condition_type => 'EXAMPLE',
        p_condition_expression1 => 'EXAMPLE',
        p_condition_expression2 => 'EXAMPLE',
        p_component => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

