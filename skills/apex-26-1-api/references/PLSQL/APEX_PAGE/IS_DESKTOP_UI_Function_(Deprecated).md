# APEX_PAGE.IS_DESKTOP_UI Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_DESKTOP_UI-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PAGE](../APEX_PAGE.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_PAGE.IS_DESKTOP_UI` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
FUNCTION IS_DESKTOP_UI 
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This helper is deprecated. Existing legacy code can still read it, but new code should avoid UI-type branching.

```sql
begin
    if apex_page.is_desktop_ui then
        apex_debug.warn('Legacy desktop UI branch executed.');
    end if;
end;
/
```
