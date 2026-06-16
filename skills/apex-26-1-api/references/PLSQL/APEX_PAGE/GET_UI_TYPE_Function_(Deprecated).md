# APEX_PAGE.GET_UI_TYPE Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_UI_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PAGE](../APEX_PAGE.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_PAGE.GET_UI_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
FUNCTION GET_UI_TYPE 
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This UI-type helper is deprecated in APEX 26.1. Prefer current page metadata such as GET_PAGE_MODE for new code.

```sql
declare
    l_ui_type varchar2(30);
begin
    l_ui_type := apex_page.get_ui_type;

    apex_debug.warn(
        p_message => 'Legacy UI type check returned %s',
        p0        => l_ui_type);
end;
/
```
