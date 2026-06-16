# APEX_STRING_UTIL.REPLACE_WHITESPACE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_WHITESPACE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function can be used to tokenize the input. It replaces white space and special characters with the given whitespace character. It also lower-cases the input. If p_original_find contains ' . ' or ' # ', these characters are also replaced by white space.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.REPLACE_WHITESPACE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.REPLACE_WHITESPACE ( 
    p_string               IN VARCHAR,
    p_original_find        IN VARCHAR2 DEFAULT NULL,
    p_whitespace_character IN VARCHAR2 DEFAULT '|')
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_original_find` | A set of characters that were already found in a preceding search operation. |
| `p_whitespace_character` | The separator character. |

## Returns

This function returns the input string in lower case with all special characters replaced.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Tokenize a label into a lower-case, separator-delimited string.

```sql
begin
    :P10_SEARCH_KEY := apex_string_util.replace_whitespace(
        p_string               => :P10_LABEL,
        p_whitespace_character => '|');
end;
/
```

