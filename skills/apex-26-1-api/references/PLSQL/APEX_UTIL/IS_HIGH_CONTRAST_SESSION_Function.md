# APEX_UTIL.IS_HIGH_CONTRAST_SESSION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_HIGH_CONTRAST_SESSION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns a boolean TRUE if the session is in high contrast mode and returns a boolean FALSE if not in high contrast mode.

## When To Use

Use this page when code needs the `APEX_UTIL.IS_HIGH_CONTRAST_SESSION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.IS_HIGH_CONTRAST_SESSION
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Branch server-side output based on the high contrast session setting.

```sql
begin
    if apex_util.is_high_contrast_session then
        apex_css.add_file(p_name => 'app-high-contrast');
    end if;
end;
/
```

