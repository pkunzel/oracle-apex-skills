# APEX_STRING_UTIL.FIND_TAGS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_TAGS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function finds all strings identified by a tag prefix. The search is case insensitive and also ignores white space and special characters.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_TAGS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FIND_TAGS (
    p_string            IN  VARCHAR2,
    p_prefix            IN  VARCHAR2 DEFAULT '#',
    p_exclude_numeric   IN  BOOLEAN DEFAULT TRUE )
RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_prefix` | The tag prefix (default # ). |
| `p_exclude_numeric` | If TRUE (default), excludes values that only contain the tag prefix and digits. |

## Returns

This function returns the found tags in upper case.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string_util.FIND_TAGS(
        p_string => 'EXAMPLE',
        p_prefix => 'EXAMPLE',
        p_exclude_numeric => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

