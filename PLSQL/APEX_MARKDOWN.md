# APEX_MARKDOWN

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN.html)

Status: curated first-pass reference.

## Purpose

`APEX_MARKDOWN` converts Markdown CLOB content into HTML. It is useful for comments, notes, help text, knowledge-base content, and generated AI responses that are stored or produced as Markdown and rendered inside APEX pages.

## API Surface

| Need | Members |
| --- | --- |
| Markdown to HTML | `TO_HTML` |
| Embedded HTML policy | `c_embedded_html_escape`, `c_embedded_html_preserve`, constants in the member page |

## Basic Conversion

```sql
declare
    l_html clob;
begin
    l_html := apex_markdown.to_html(
        p_markdown => to_clob('# Status' || chr(10) || chr(10) || '* Ready'));

    sys.htp.p(l_html);
end;
/
```

By default, embedded HTML is escaped. That default is the right choice for user-authored or AI-authored Markdown.

## Add Link Attributes

```sql
declare
    l_html clob;
begin
    l_html := apex_markdown.to_html(
        p_markdown => to_clob('See [Oracle APEX](https://apex.oracle.com).'),
        p_extra_link_attributes => apex_t_varchar2(
            'target', '_blank',
            'rel',    'noopener noreferrer'));

    sys.htp.p(l_html);
end;
/
```

Use this for generated help text or notes where external links should open safely.

## Trusted Embedded HTML

Only preserve embedded HTML when the Markdown comes from a trusted author or controlled template:

```sql
declare
    l_html clob;
begin
    l_html := apex_markdown.to_html(
        p_markdown           => to_clob('<span class="u-success-text">Approved</span>'),
        p_embedded_html_mode => apex_markdown.c_embedded_html_preserve);

    sys.htp.p(l_html);
end;
/
```

Never use preserved embedded HTML for comments, prompts, file uploads, or generated AI output unless it is sanitized elsewhere.

## Render AI Response Pattern

Assuming `:P10_AI_RESPONSE_MD` contains Markdown returned by an AI service:

```sql
declare
    l_html clob;
begin
    l_html := apex_markdown.to_html(
        p_markdown           => :P10_AI_RESPONSE_MD,
        p_embedded_html_mode => apex_markdown.c_embedded_html_escape);

    sys.htp.p('<section class="ai-response">');
    sys.htp.p(l_html);
    sys.htp.p('</section>');
end;
/
```

## Safety Notes

- Keep the default embedded HTML escape mode for untrusted input.
- Markdown output is HTML; do not wrap it in `apex_escape.html` after conversion or it will display as text.
- Preserve embedded HTML only for controlled content.
- Add `rel="noopener noreferrer"` when adding `target="_blank"` to links.
- Validate or strip dangerous link schemes in user-supplied Markdown if the application allows links.

## Related APIs

- [APEX_ESCAPE](APEX_ESCAPE.md) for other output contexts.
- [APEX_AI](APEX_AI.md) for AI responses that may contain Markdown.
- [htmlBuilder](../JavaScript/htmlBuilder.md) for small client-side HTML fragments.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants | constants | [local](APEX_MARKDOWN/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN-Constants.html) |
| TO_HTML Function | function | [local](APEX_MARKDOWN/TO_HTML_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_HTML-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
