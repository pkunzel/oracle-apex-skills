# APEX_DEBUG.GET_PAGE_VIEW_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PAGE_VIEW_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This function returns the current page view identifier, which is a unique ID for each browser request or standalone database session. The value is null until the first debug message has been generated.

## When To Use

Use this page when code needs the `APEX_DEBUG.GET_PAGE_VIEW_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.GET_PAGE_VIEW_ID (
  RETURN NUMBER );
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_view_id number;
begin
    l_view_id := apex_debug.get_page_view_id;
    sys.dbms_output.put_line('Current debug page view: ' || l_view_id);
end;
/
```
