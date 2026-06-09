# APEX_JAVASCRIPT.ADD_VALUE Function Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This function returns p_value as JavaScript boolean. If p_value is NULL the value null is returned.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN BOOLEAN,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Boolean which should be returned as JavaScript boolean. |
| `p_add_comma` | If p_add_comma is TRUE a trailing comma is added. Default is TRUE. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_javascript.ADD_VALUE(
        p_value => true,
        p_add_comma => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

