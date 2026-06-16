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

Detect known business phrases in a text value.

```sql
declare
    l_found apex_t_varchar2;
begin
    l_found := apex_string_util.find_phrases(
        p_phrases => apex_t_varchar2('urgent review', 'customer escalation'),
        p_string  => :P10_NOTES);
end;
/
```

