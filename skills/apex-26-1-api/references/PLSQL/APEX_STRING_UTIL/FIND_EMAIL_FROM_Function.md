# APEX_STRING_UTIL.FIND_EMAIL_FROM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_FROM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

Finds first occurrence of "From:" and the first email after the "From:" .

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_EMAIL_FROM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FIND_EMAIL_FROM (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |

## Returns

This function returns the from address.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a sender address from raw mail header text.

```sql
begin
    :P10_FROM_ADDRESS := apex_string_util.find_email_from(
        p_string => :P10_RAW_EMAIL_HEADERS);
end;
/
```

