# APEX_IR.TEXT_FROM_LOV Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXT_FROM_LOV-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Displays an item as text, deriving the display value of the named LOV.

## When To Use

Use this page when code needs the `APEX_IR.TEXT_FROM_LOV` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.TEXT_FROM_LOV (
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_lov         IN    VARCHAR2,
    p_null_text   IN    VARCHAR2 DEFAULT '%' )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value of a field item. Note that if p_value is not located in the list of values, p_null_text is displayed. |
| `p_lov` | Text name of a shared list of values. This list of values must be defined in your application. |
| `p_null_text` | Value displayed when the value of the field item is NULL. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_ir.TEXT_FROM_LOV(
        p_value => 'EXAMPLE',
        p_lov => 'EXAMPLE',
        p_null_text => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

