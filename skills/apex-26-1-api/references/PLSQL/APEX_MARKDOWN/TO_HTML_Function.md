# APEX_MARKDOWN.TO_HTML Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_HTML-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MARKDOWN](../APEX_MARKDOWN.md)

## Purpose

This function converts a Markdown string into HTML.

## When To Use

Use this page when code needs the `APEX_MARKDOWN.TO_HTML` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MARKDOWN.TO_HTML (
    p_markdown              IN CLOB,
    p_embedded_html_mode    IN t_embedded_html_mode DEFAULT c_embedded_html_escape,
    p_softbreak             IN VARCHAR2             DEFAULT '
',
    p_extra_link_attributes IN apex_t_varchar2      DEFAULT apex_t_varchar2() )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_markdown` | The Markdown text content to be converted to HTML. |
| `p_embedded_html_mode` | Specify what should happen with embedded HTML. By default it is escaped. Set this option to C_EMBEDDED_HTML_PRESERVE for it to be preserved. Note that this option has security implications and should only ever be used on trusted input. |
| `p_softbreak` | Specify a raw string to be used for a softbreak, such as apex_application.LF . If none is specified, uses . |
| `p_extra_link_attributes` | A plist of additional HTML attributes for anchor elements. For example, to open all links in new tabs, set this parameter to apex_t_varchar2('target', '_blank') |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Convert Markdown to HTML and add safe attributes to generated links.

```sql
declare
    l_html clob;
begin
    l_html := apex_markdown.to_html(
        p_markdown => :P10_HELP_MD,
        p_embedded_html_mode => apex_markdown.c_embedded_html_escape,
        p_softbreak => apex_application.lf,
        p_extra_link_attributes => apex_t_varchar2(
            'target', '_blank',
            'rel',    'noopener noreferrer'));

    sys.htp.p('<article class="help-content">');
    sys.htp.p(l_html);
    sys.htp.p('</article>');
end;
/
```
