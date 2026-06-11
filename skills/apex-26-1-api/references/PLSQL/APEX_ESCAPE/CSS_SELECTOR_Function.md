# APEX_ESCAPE.CSS_SELECTOR Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CSS_SELECTOR-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes meta-characters in a string used in a CSS selector.

## When To Use

Use this page when code needs the `APEX_ESCAPE.CSS_SELECTOR` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.CSS_SELECTOR (
    p_string    IN VARCHAR2 )
    RETURN VARCHAR2 deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The string to be escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_escape.css_selector(p_string => 'P10 Customer.Name');
    sys.dbms_output.put_line(dbms_lob.substr(to_clob(l_result), 4000, 1));
end;
/
```
