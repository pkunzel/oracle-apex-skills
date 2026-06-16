# APEX_STRING_UTIL.PHRASE_EXISTS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PHRASE_EXISTS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function returns whether the given phrase is in p_string . The search is case insensitive and also ignores white space and special characters.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.PHRASE_EXISTS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.PHRASE_EXISTS (
    p_phrase   IN VARCHAR2,    
    p_string   IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_phrase` | The given phrase. |
| `p_string` | The input string. |

## Returns

This function returns TRUE if the phrase was found. Otherwise, this function returns FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Run a normalized phrase check that ignores case and punctuation differences.

```sql
begin
    if apex_string_util.phrase_exists(
           p_phrase => 'priority customer',
           p_string => :P10_NOTES)
    then
        :P10_PRIORITY_YN := 'Y';
    end if;
end;
/
```

