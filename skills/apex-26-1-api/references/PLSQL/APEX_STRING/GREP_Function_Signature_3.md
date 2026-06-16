# APEX_STRING.GREP Function Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Returns the values of the input clob that match a regular expression.

## When To Use

Use this page when code needs the `APEX_STRING.GREP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.GREP (
   p_str           IN CLOB,
   p_pattern       IN VARCHAR2,
   p_modifier      IN VARCHAR2    DEFAULT NULL,
   p_subexpression IN VARCHAR2    DEFAULT '0',
   p_limit         IN PLS_INTEGER DEFAULT NULL )
   RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input clob . |
| `p_pattern` | The regular expression. |
| `p_modifier` | The regular expression modifier. |
| `p_subexpression` | The subexpression which should be returned. If null, return the complete table value. If 0 (the default), return the matched expression. If > 0, return the subexpression value. You can also pass a comma separated list of numbers, to get multiple subexpressions in the result. |
| `p_limit` | Limitation for the number of elements in the return table. If null (the default), there is no limit. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Find Oracle error codes in a CLOB log payload.

```sql
declare
    l_errors apex_t_varchar2;
    l_log    clob := to_clob('Error ORA-20000 on line 1' || chr(10) ||
                             'Warning ORA-06512 on line 2');
begin
    l_errors := apex_string.grep(
        p_str     => l_log,
        p_pattern => 'ORA-[[:digit:]]+',
        p_limit   => 10);
end;
/
```

