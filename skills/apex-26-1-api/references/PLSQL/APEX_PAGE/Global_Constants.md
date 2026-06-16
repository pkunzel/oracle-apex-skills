# APEX_PAGE.Global Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE-Global-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PAGE](../APEX_PAGE.md)

## Purpose

The APEX_PAGE package uses the following constants.

## When To Use

Use this page when code needs the `APEX_PAGE.Global Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the documented page-mode constants with GET_PAGE_MODE rather than comparing to hard-coded strings.

```sql
declare
    l_mode varchar2(30);
begin
    l_mode := apex_page.get_page_mode(
        p_application_id => :APP_ID,
        p_page_id        => 42);

    if l_mode = apex_page.c_page_mode_modal then
        apex_debug.info('Page 42 opens as a modal dialog.');
    end if;
end;
/
```
