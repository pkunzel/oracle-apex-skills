# APEX_UTIL.IS_SCREEN_READER_SESSION_YN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SCREEN_READER_SESSION_YN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns 'Y' if the session is in screen reader mode and 'N' if not in screen reader mode.

## When To Use

Use this page when code needs the `APEX_UTIL.IS_SCREEN_READER_SESSION_YN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.IS_SCREEN_READER_SESSION_YN
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Store the screen reader session setting as a Y/N item value.

```sql
begin
    apex_util.set_session_state(
        p_name  => 'P1_SCREEN_READER_YN',
        p_value => apex_util.is_screen_reader_session_yn);
end;
/
```

