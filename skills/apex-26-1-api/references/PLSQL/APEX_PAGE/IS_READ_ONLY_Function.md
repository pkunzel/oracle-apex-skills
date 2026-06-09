# APEX_PAGE.IS_READ_ONLY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE-IS_READ_ONLY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PAGE](../APEX_PAGE.md)

## Purpose

This function returns TRUE if the current page is rendered read-only and FALSE if it is not.

## When To Use

Use this page when code needs the `APEX_PAGE.IS_READ_ONLY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION IS_READ_ONLY
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_page.IS_READ_ONLY;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

