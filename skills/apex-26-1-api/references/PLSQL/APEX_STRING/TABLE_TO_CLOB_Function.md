# APEX_STRING.TABLE_TO_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns the values of the apex_application_global.vc_arr2 input table p_table as a concatenated clob, separated by p_sep .

## When To Use

Use this page when code needs the `APEX_STRING.TABLE_TO_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.TABLE_TO_CLOB (
    p_table IN apex_application_global.vc_arr2,
    p_sep   IN VARCHAR2             DEFAULT apex_application.LF,
    p_dur   IN PLS_INTEGER          DEFAULT sys.dbms_lob.call )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_sep` | The separator. Default is line feed. |
| `p_dur` | The duration of the clob. Default sys.dbms_lob.call . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Convert a vc_arr2 array to a CLOB with line breaks.

```sql
declare
    l_lines apex_application_global.vc_arr2;
    l_text  clob;
begin
    l_lines(1) := 'Header';
    l_lines(2) := 'Detail';
    l_lines(3) := 'Footer';

    l_text := apex_string.table_to_clob(
        p_table => l_lines,
        p_sep   => chr(10));
end;
/
```

