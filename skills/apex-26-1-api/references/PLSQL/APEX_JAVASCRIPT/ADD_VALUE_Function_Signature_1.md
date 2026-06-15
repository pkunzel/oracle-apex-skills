# APEX_JAVASCRIPT.ADD_VALUE Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This function returns the escaped text surrounded by double quotation marks. For example, this string could be returned "That\'s a test" .

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN VARCHAR2,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Text to be escaped and wrapped by double quotation marks. |
| `p_add_comma` | If p_add_comma is TRUE a trailing comma is added. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Build a JavaScript array literal with escaped string values.

```sql
declare
    l_values varchar2(32767);
begin
    l_values := '[' ||
        apex_javascript.add_value('OPEN', true) ||
        apex_javascript.add_value('CLOSED', false) ||
    ']';
end;
/
```
