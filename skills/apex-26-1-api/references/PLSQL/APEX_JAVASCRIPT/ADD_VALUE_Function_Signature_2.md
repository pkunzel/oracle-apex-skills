# APEX_JAVASCRIPT.ADD_VALUE Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This function returns p_value as JavaScript number, if p_value is NULL the value null is returned.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN NUMBER,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Number which should be returned as JavaScript number. |
| `p_add_comma` | If p_add_comma is TRUE a trailing comma is added. Default is TRUE. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Append a numeric value to generated JavaScript.

```sql
declare
    l_values varchar2(32767);
begin
    l_values := '[' ||
        apex_javascript.add_value(10, true) ||
        apex_javascript.add_value(25, false) ||
    ']';
end;
/
```
