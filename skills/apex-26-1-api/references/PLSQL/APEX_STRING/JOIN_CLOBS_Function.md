# APEX_STRING.JOIN_CLOBS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN_CLOBS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns the values of the apex_t_clob input table p_table as a concatenated clob, separated by p_sep .

## When To Use

Use this page when code needs the `APEX_STRING.JOIN_CLOBS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.JOIN_CLOBS (
  p_table IN apex_t_clob,
  p_sep   IN VARCHAR2     DEFAULT apex_application.LF,
  p_dur   IN PLS_INTEGER  DEFAULT sys.dbms_lob.call )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_sep` | The separator, default is line feed. |
| `p_dur` | The duration of the clob, default sys.dbms_lob.call |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Combine CLOB fragments with a separator.

```sql
declare
    l_parts apex_t_clob := apex_t_clob(
        to_clob('First generated section.'),
        to_clob('Second generated section.'));
    l_doc   clob;
begin
    l_doc := apex_string.join_clobs(
        p_table => l_parts,
        p_sep   => chr(10) || chr(10));
end;
/
```

