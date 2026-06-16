# APEX_STRING.GET_INITIALS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INITIALS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Returns the initials of the words in a string.

## When To Use

Use this page when code needs the `APEX_STRING.GET_INITIALS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.GET_INITIALS (
   p_str IN VARCHAR2,
   p_cnt IN PLS_INTEGER DEFAULT 2 )
   RETURN VARCHAR2
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_cnt` | The number ( N ) of letter initials to get from the first number ( N ) of words. Default 2 . Allowed values are 1 to 255. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Derive a compact avatar label from a user's display name.

```sql
begin
    :P10_AVATAR_INITIALS := apex_string.get_initials(
        p_str => :P10_FULL_NAME,
        p_cnt => 2);
end;
/
```

