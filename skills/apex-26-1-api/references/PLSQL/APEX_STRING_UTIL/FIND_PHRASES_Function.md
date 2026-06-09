# APEX_STRING_UTIL.FIND_PHRASES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_PHRASES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function finds the occurrences of p_string in p_phrase return in an array. The search is case insensitive and also ignores white space and special characters.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_PHRASES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FIND_PHRASES (
    p_phrases IN apex_t_varchar2,
    p_string  IN VARCHAR2 )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_phrases` | A table of phrases. |
| `p_string` | The input string. |

## Returns

This function returns an array of phrases that were found, without duplicates.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string_util.FIND_PHRASES(
        p_phrases => 'EXAMPLE',
        p_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

