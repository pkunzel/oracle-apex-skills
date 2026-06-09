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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_string_util.FIND_EMAIL_SUBJECT(
        p_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

