# APEX_PLUGIN_UTIL.GET_ATTRIBUTE_AS_NUMBER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ATTRIBUTE_AS_NUMBER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function returns the value of a plug-in attribute as a number, taking into account NLS decimal separator effective for the current database session. Use this function in plug-in PL/SQL source for custom attributes of type NUMBER instead of the built-in to_number function.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_ATTRIBUTE_AS_NUMBER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_ATTRIBUTE_AS_NUMBER (
    p_value             IN VARCHAR2,
    p_attribute_label   IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_attribute_label` | The label of the custom plug-in attribute. |
| `p_value` | The value of a custom attribute of type NUMBER . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_plugin_util.GET_ATTRIBUTE_AS_NUMBER(
        p_value => 'EXAMPLE',
        p_attribute_label => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result NUMBER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin_util.GET_ATTRIBUTE_AS_NUMBER(
            p_value => 'EXAMPLE',
            p_attribute_label => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

