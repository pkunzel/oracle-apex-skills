# APEX_ESCAPE.JS_LITERAL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JS_LITERAL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

The JS_LITERAL function escapes and optionally enquotes a JavaScript string. This function replaces non-immune characters with \xHH or \uHHHH equivalents. The result can be injected into JavaScript code, within tags or inline ( javascript:nnn ). Immune characters include:

## When To Use

Use this page when code needs the `APEX_ESCAPE.JS_LITERAL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.JS_LITERAL (
    p_string IN VARCHAR2,
    p_quote  IN VARCHAR2 DEFAULT '''' )
    return VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string that is escaped. |
| `p_quote` | If not NULL, this string is placed on the left and right of the result. The quotation character must be a single- or double-quotation mark. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_escape.js_literal(
        p_string => q'[can't break out]',
        p_quote  => ''''
    );
    sys.dbms_output.put_line(l_result);
end;
/
```
