# APEX_STRING.JOIN_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Returns the values of the apex_t_varchar2 input table p_table as a concatenated clob , separated by p_sep .

## When To Use

Use this page when code needs the `APEX_STRING.JOIN_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.JOIN_CLOB (
    p_table IN apex_t_varchar2,
    p_sep   IN VARCHAR2    DEFAULT apex_application.LF,
    p_dur   IN PLS_INTEGER DEFAULT sys.dbms_lob.call )
    RETURN CLOB
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_sep` | The separator, default is line feed. |
| `p_dur` | The duration of the clob , default sys.dbms_lob.call |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Join many varchar2 values into a CLOB when the result might exceed VARCHAR2 limits.

```sql
declare
    l_lines apex_t_varchar2 := apex_t_varchar2('Order', 'Customer', 'Total');
    l_csv   clob;
begin
    l_csv := apex_string.join_clob(
        p_table => l_lines,
        p_sep   => chr(10));
end;
/
```

