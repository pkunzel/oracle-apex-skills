# APEX_UTIL.IS_SCREEN_READER_SESSION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SCREEN_READER_SESSION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns a boolean TRUE if the session is in screen reader mode and returns a boolean FALSE if not in screen reader mode.

## When To Use

Use this page when code needs the `APEX_UTIL.IS_SCREEN_READER_SESSION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.IS_SCREEN_READER_SESSION
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Branch server-side behavior based on screen reader mode.

```sql
begin
    if apex_util.is_screen_reader_session then
        apex_util.set_session_state('P1_ACCESSIBLE_LAYOUT', 'Y');
    end if;
end;
/
```

