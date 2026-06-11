# APEX_CUSTOM_AUTH.CURRENT_PAGE_IS_PUBLIC Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_PAGE_IS_PUBLIC-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function checks whether the current page's authentication attribute is set to Page Is Public and returns a Boolean value (TRUE or FALSE).

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.CURRENT_PAGE_IS_PUBLIC` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.CURRENT_PAGE_IS_PUBLIC 
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_custom_auth.current_page_is_public then
        apex_debug.info('Current page is public; skip login enforcement.');
    else
        apex_debug.info('Current page requires authentication.');
    end if;
end;
/
```

