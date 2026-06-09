# APEX_STRING_UTIL.DIFF Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL-DIFF-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function computes the difference between tables of lines. The implementation uses the default version of the longest common subexpression algorithm, without any optimizations. The DIFF function is not intended for very large inputs. The output is similar to the unified diff format.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.DIFF` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FUNCTION DIFF (
    p_left    IN apex_t_varchar2,
    p_right   IN apex_t_varchar2,
    p_context IN PLS_INTEGER DEFAULT 3 )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_left` | The lines in the "left" table. |
| `p_right` | The lines in the "right" table. |
| `p_context` | The number of same lines after each diff to also return (default 3). |

## Returns

A table of varchar2, where the first character denotes the type of diff: @ - Line numbers on left and right hand side. " " (space) - Context, left and right hand side are equal. - - Line is in left hand side, but not in right hand side. + - Line is in right hand side, but not in left hand side.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string_util.DIFF(
        p_left => 'EXAMPLE',
        p_right => 'EXAMPLE',
        p_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

