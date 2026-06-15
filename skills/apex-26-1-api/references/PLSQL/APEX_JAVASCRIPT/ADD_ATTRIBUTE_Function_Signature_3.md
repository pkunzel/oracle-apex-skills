# APEX_JAVASCRIPT.ADD_ATTRIBUTE Function Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This function returns the attribute and a JavaScript boolean of TRUE, FALSE, or NULL.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_ATTRIBUTE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_ATTRIBUTE (
    p_name       IN VARCHAR2,
    p_value      IN BOOLEAN,
    p_omit_null  IN BOOLEAN:=TRUE,
    p_add_comma  IN BOOLEAN:=TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the JavaScript object attribute. |
| `p_value` | Boolean assigned to the JavaScript object attribute. |
| `p_omit_null` | If p_omit_null is TRUE and p_value is NULL, the function returns nothing. If p_omit_null is FALSE and p_value is NULL, the value null is returned (for example, test:null). |
| `p_add_comma` | If set to TRUE a trailing comma is added when a value is returned. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Add a Boolean attribute to a generated JavaScript object.

```sql
declare
    l_config varchar2(32767);
begin
    l_config := '{' ||
        apex_javascript.add_attribute(
            p_name      => 'showTotals',
            p_value     => true,
            p_omit_null => true,
            p_add_comma => false
        ) ||
    '}';
end;
/
```
