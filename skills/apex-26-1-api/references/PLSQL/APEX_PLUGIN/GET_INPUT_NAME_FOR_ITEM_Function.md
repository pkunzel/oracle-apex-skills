# APEX_PLUGIN.GET_INPUT_NAME_FOR_ITEM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN_UTIL.GET_INPUT_NAME_FOR_ITEM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

Returns the name attribute that must be used for an HTML input element if you want that value stored in session state when the page is submitted.

## When To Use

Use this page when code needs the `APEX_PLUGIN.GET_INPUT_NAME_FOR_ITEM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN.GET_INPUT_NAME_FOR_ITEM
    RETURN t_input_name;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_INPUT_NAME;
begin
    l_result := apex_plugin.GET_INPUT_NAME_FOR_ITEM;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

