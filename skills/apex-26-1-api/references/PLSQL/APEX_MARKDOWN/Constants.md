# APEX_MARKDOWN.Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MARKDOWN](../APEX_MARKDOWN.md)

## Purpose

The following constants are used by this package.

## When To Use

Use this page when code needs the `APEX_MARKDOWN.Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Keep the default escape mode for user-authored Markdown; preserve embedded HTML only for controlled content.

```sql
declare
    l_html clob;
begin
    l_html := apex_markdown.to_html(
        p_markdown           => :P10_NOTE_MD,
        p_embedded_html_mode => apex_markdown.c_embedded_html_escape);

    sys.htp.p(l_html);
end;
/
```
