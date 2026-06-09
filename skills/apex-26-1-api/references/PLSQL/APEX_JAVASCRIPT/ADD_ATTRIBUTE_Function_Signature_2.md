# APEX_JAVASCRIPT.ADD_ATTRIBUTE Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This function returns the attribute and the attribute's number.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_ATTRIBUTE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_ATTRIBUTE (
    p_name       IN VARCHAR2,
    p_value      IN NUMBER,
    p_omit_null  IN BOOLEAN:=TRUE,
    p_add_comma  IN BOOLEAN:=TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the JavaScript object attribute. |
| `p_value` | Number which should be assigned to the JavaScript object attribute. |
| `p_omit_null` | If p_omit_null is TRUE and p_value is NULL, the function returns nothing. If p_omit_null is FALSE and p_value is NULL, the value null is returned (for example, test:null). |
| `p_add_comma` | If set to TRUE, a trailing comma is added when a value is returned. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_javascript.ADD_ATTRIBUTE(
        p_name => 'EXAMPLE',
        p_value => 1,
        p_omit_null => true,
        p_add_comma => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

