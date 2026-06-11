# APEX_ESCAPE.HTML_ALLOWLIST_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ALLOWLIST_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function performs HTML escape on all characters in the input text except the specified allowlist tags. This function can be useful if the input text contains simple HTML markup but a developer wants to ensure that an attacker cannot use malicious tags for cross-site scripting.

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML_ALLOWLIST_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML_ALLOWLIST_CLOB (
    p_html           IN CLOB,
    p_allowlist_tags IN VARCHAR2 DEFAULT c_html_allowlist_tags )
    RETURN CLOB deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_html` | The text string that is filtered. |
| `p_allowlist_tags` | The comma-separated list of tags that stays in p_html . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result clob;
begin
    l_result := apex_escape.html_allowlist_clob(p_html => to_clob('<p>Safe <strong>text</strong></p><script>alert(1)</script>'));
    sys.dbms_output.put_line(dbms_lob.substr(l_result, 4000, 1));
end;
/
```
