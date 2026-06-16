# APEX_STRING_UTIL.FIND_EMAIL_SUBJECT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_SUBJECT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function finds the subject text in a given email string.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_EMAIL_SUBJECT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FIND_EMAIL_SUBJECT (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |

## Returns

This function returns the subject line.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a subject line from raw mail header text.

```sql
begin
    :P10_SUBJECT := apex_string_util.find_email_subject(
        p_string => :P10_RAW_EMAIL_HEADERS);
end;
/
```

