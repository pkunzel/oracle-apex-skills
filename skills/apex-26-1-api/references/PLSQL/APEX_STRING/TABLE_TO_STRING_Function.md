# APEX_STRING.TABLE_TO_STRING Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_STRING-1-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns the values of the apex_application_global.vc_arr2 input table p_table as a concatenated varchar2 , separated by p_sep .

## When To Use

Use this page when code needs the `APEX_STRING.TABLE_TO_STRING` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.TABLE_TO_STRING (
    p_table IN apex_application_global.vc_arr2,
    p_sep   IN VARCHAR2             DEFAULT ':' )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table, assumes no holes and index starts at 1. |
| `p_sep` | The separator, default is ':' . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Convert a vc_arr2 array back into a colon-delimited item value.

```sql
declare
    l_values apex_application_global.vc_arr2;
begin
    l_values(1) := 'CSV';
    l_values(2) := 'PDF';

    :P10_FORMATS := apex_string.table_to_string(
        p_table => l_values,
        p_sep   => ':');
end;
/
```

