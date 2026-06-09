# APEX_ESCAPE

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ESCAPE.html)

Status: curated first-pass reference.

## Purpose

`APEX_ESCAPE` escapes untrusted text for the exact output context where it will be used: HTML body text, HTML attributes, JavaScript literals, JSON strings, CSV fields, CSS selectors, LDAP filters, and regular expressions.

Use the most specific escaping function for the target context. Escaping for one context is not automatically safe in another.

## When To Use

Use `APEX_ESCAPE` when:

- PL/SQL writes custom HTML with `HTP.P`.
- A report or plug-in renders user-controlled text in HTML, attributes, JavaScript, JSON, or CSV.
- User text is allowed to contain a limited subset of simple HTML markup.
- User input is inserted into an LDAP filter, DN, CSS selector, or regular expression.
- CSV output needs formula-injection protection.

Do not use `NOOP` on user-controlled values. It is for values that have already been safely escaped or are known safe by construction.

## Context Map

| Output context | Use |
| --- | --- |
| HTML text node | `HTML`, `HTML_CLOB`, `HTML_TRUNC` |
| HTML attribute value | `HTML_ATTRIBUTE`, `HTML_ATTRIBUTE_CLOB` |
| Limited user markup | `HTML_ALLOWLIST`, `HTML_ALLOWLIST_CLOB` |
| JavaScript string literal | `JS_LITERAL`, `JS_LITERAL_CLOB` |
| JSON string value | `JSON`, `JSON_CLOB` |
| CSV field | `CSV`, `SET_CSV_PARAMETERS` |
| CSS selector fragment | `CSS_SELECTOR` |
| Regular expression fragment | `REGEXP` |
| LDAP | `LDAP_DN`, `LDAP_SEARCH_FILTER` |
| Remove tags for plain text | `STRIPHTML` |

## HTML Text And Attribute Examples

Assuming `P10_TITLE` and `P10_STATUS` are user-controlled:

```sql
begin
    htp.p(
        '<span class="status-' ||
        apex_escape.html_attribute(:P10_STATUS) ||
        '">' ||
        apex_escape.html(:P10_TITLE) ||
        '</span>');
end;
/
```

Use `HTML` between tags. Use `HTML_ATTRIBUTE` inside quoted attribute values.

## JavaScript Literal And JSON Examples

For a short JavaScript string literal:

```sql
begin
    htp.p(
        '<script>const taskName = ' ||
        apex_escape.js_literal(:P10_TASK_NAME) ||
        ';</script>');
end;
/
```

For JSON, prefer `APEX_JSON` when building a full document:

```sql
begin
    apex_json.open_object;
    apex_json.write('taskName', :P10_TASK_NAME);
    apex_json.close_object;
end;
/
```

Use `APEX_ESCAPE.JSON` only when manually escaping a JSON string fragment.

## Allow Limited HTML

Assuming `P10_DESCRIPTION_HTML` may contain simple markup such as `b`, `i`, or `ul`:

```sql
begin
    htp.p(
        apex_escape.html_allowlist(
            p_html           => :P10_DESCRIPTION_HTML,
            p_allowlist_tags => 'b,i,u,br,p,ul,ol,li,strong,em'));
end;
/
```

Allowlisting is not the same as trusting arbitrary HTML. Keep the tag list small and avoid scriptable attributes.

## CSV Output

```sql
begin
    apex_escape.set_csv_parameters(
        p_enclosed_by     => '"',
        p_separated_by    => ',',
        p_escape_formulas => true);

    htp.p(
        apex_escape.csv(:P10_ACCOUNT_NAME) || ',' ||
        apex_escape.csv(:P10_AMOUNT));
end;
/
```

Formula escaping helps protect spreadsheet users from cells beginning with formula characters.

## Notes

- Escape as late as possible, at the output boundary.
- Store canonical unescaped data in tables; escape when rendering.
- Do not concatenate user-controlled values into SQL or PL/SQL and call this "escaping"; use bind variables.
- `STRIPHTML` is useful for plain text summaries, but it is not a complete sanitizer for rich content.
- Use `APEX_JAVASCRIPT.ADD_VALUE` and `ADD_ATTRIBUTE` for JavaScript object snippets generated from PL/SQL.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants | constants | [local](APEX_ESCAPE/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ESCAPE-Constants.html) |
| CSS_SELECTOR Function | function | [local](APEX_ESCAPE/CSS_SELECTOR_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CSS_SELECTOR-Function.html) |
| CSV Function Signature 1 | function | [local](APEX_ESCAPE/CSV_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CSV-Function-Signature-1.html) |
| CSV Function Signature 2 | function | [local](APEX_ESCAPE/CSV_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CSV-Function-Signature-2.html) |
| GET_CSV_ENCLOSED_BY Function | function | [local](APEX_ESCAPE/GET_CSV_ENCLOSED_BY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CSV_ENCLOSED_BY-Function.html) |
| GET_CSV_SEPARATED_BY Function | function | [local](APEX_ESCAPE/GET_CSV_SEPARATED_BY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CSV_SEPARATED_BY-Function.html) |
| HTML Function | function | [local](APEX_ESCAPE/HTML_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML-Function.html) |
| HTML_ALLOWLIST Function | function | [local](APEX_ESCAPE/HTML_ALLOWLIST_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ALLOWLIST-Function.html) |
| HTML_ALLOWLIST_CLOB Function | function | [local](APEX_ESCAPE/HTML_ALLOWLIST_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ALLOWLIST_CLOB-Function.html) |
| HTML_ATTRIBUTE Function | function | [local](APEX_ESCAPE/HTML_ATTRIBUTE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ATTRIBUTE-Function.html) |
| HTML_ATTRIBUTE_CLOB Function | function | [local](APEX_ESCAPE/HTML_ATTRIBUTE_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ATTRIBUTE_CLOB-Function.html) |
| HTML_CLOB Function | function | [local](APEX_ESCAPE/HTML_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_CLOB-Function.html) |
| HTML_TRUNC Function Signature 1 | function | [local](APEX_ESCAPE/HTML_TRUNC_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_TRUNC-Function.html) |
| HTML_TRUNC Function Signature 2 | function | [local](APEX_ESCAPE/HTML_TRUNC_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_TRUNC-Function-Signature-2.html) |
| JS_LITERAL Function | function | [local](APEX_ESCAPE/JS_LITERAL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JS_LITERAL-Function.html) |
| JS_LITERAL_CLOB Function | function | [local](APEX_ESCAPE/JS_LITERAL_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JS_LITERAL_CLOB-Function.html) |
| JSON Function | function | [local](APEX_ESCAPE/JSON_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JSON-Function.html) |
| JSON_CLOB Function | function | [local](APEX_ESCAPE/JSON_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JSON_CLOB-Function.html) |
| LDAP_DN Function | function | [local](APEX_ESCAPE/LDAP_DN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_DN-Function.html) |
| LDAP_SEARCH_FILTER Function | function | [local](APEX_ESCAPE/LDAP_SEARCH_FILTER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_SEARCH_FILTER-Function.html) |
| NOOP Function Signature 1 | function | [local](APEX_ESCAPE/NOOP_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/NOOP-Function-Signature-1.html) |
| NOOP Function Signature 2 | function | [local](APEX_ESCAPE/NOOP_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/NOOP-Function-Signature-2.html) |
| REGEXP Function | function | [local](APEX_ESCAPE/REGEXP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REGEXP-Function.html) |
| SET_CSV_PARAMETERS Procedure | procedure | [local](APEX_ESCAPE/SET_CSV_PARAMETERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CSV_PARAMETERS-Procedure.html) |
| SET_HTML_ESCAPING_MODE Procedure | procedure | [local](APEX_ESCAPE/SET_HTML_ESCAPING_MODE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_HTML_ESCAPING_MODE-Procedure.html) |
| STRIPHTML Function Signature 1 | function | [local](APEX_ESCAPE/STRIPHTML_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRIPHTML-Function-Signature-1.html) |
| STRIPHTML Function Signature 2 | function | [local](APEX_ESCAPE/STRIPHTML_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRIPHTML-Function-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
