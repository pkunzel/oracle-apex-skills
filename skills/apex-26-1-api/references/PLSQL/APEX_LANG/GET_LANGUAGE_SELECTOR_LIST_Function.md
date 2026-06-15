# APEX_LANG.GET_LANGUAGE_SELECTOR_LIST Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LANGUAGE_SELECTOR_LIST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This function determines which languages the current application is translated into and returns the language selector as an HTML snippet. You can use this function in a Dynamic Content region to include the language selector.

## When To Use

Use this page when code needs the `APEX_LANG.GET_LANGUAGE_SELECTOR_LIST` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.GET_LANGUAGE_SELECTOR_LIST
    RETURN VARCHAR2;
```

## Returns

This function returns the language selector as an HTML snippet.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Return the language selector HTML from a Dynamic Content region.

```sql
declare
    l_html varchar2(32767);
begin
    l_html := apex_lang.get_language_selector_list;
    htp.p(l_html);
end;
/
```
