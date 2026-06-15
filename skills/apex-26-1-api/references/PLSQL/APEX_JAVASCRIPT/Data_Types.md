# APEX_JAVASCRIPT.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

The APEX_JAVASCRIPT package uses the following data types.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Use the package helpers to produce JavaScript-safe literals instead of concatenating raw values.

```sql
declare
    l_config varchar2(32767);
begin
    l_config := '{' ||
        apex_javascript.add_attribute('ajaxIdentifier', apex_plugin.get_ajax_identifier, true, true) ||
        apex_javascript.add_attribute('regionStaticId', 'orders_ir', true, true) ||
        apex_javascript.add_attribute('pageSize', 25, true, false) ||
    '}';
end;
/
```
