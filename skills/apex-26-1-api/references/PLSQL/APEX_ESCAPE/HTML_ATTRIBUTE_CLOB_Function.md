# APEX_ESCAPE.HTML_ATTRIBUTE_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ATTRIBUTE_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function escapes the values of HTML entity attributes. It hex escapes everything that is not alphanumeric or in one of the following characters:

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML_ATTRIBUTE_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML_ATTRIBUTE_CLOB (
    p_string    IN CLOB )
    RETURN CLOB deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string that is escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result clob;
begin
    l_result := apex_escape.html_attribute_clob(p_string => to_clob('Tom "TJ" Jones & Sons'));
    sys.dbms_output.put_line(dbms_lob.substr(l_result, 4000, 1));
end;
/
```
