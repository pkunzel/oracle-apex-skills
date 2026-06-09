# APEX_JAVASCRIPT

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html)

Status: curated first-pass reference.

## Purpose

`APEX_JAVASCRIPT` lets PL/SQL register JavaScript libraries, inline snippets, onload snippets, RequireJS modules, and escaped JavaScript object/value fragments in the rendered APEX page.

Use it in plug-in render code, page processes that affect rendered output, and server-side components that need to add client behavior. For ordinary page JavaScript, prefer declarative page attributes, Dynamic Actions, static application files, and client-side `apex.*` APIs.

## When To Use

Use `APEX_JAVASCRIPT` when:

- A plug-in must add its JavaScript file once per page.
- Server-side render code needs to pass escaped configuration to browser code.
- A small onload snippet must run after page load.
- RequireJS dependencies need to be registered by a component.
- Inline JavaScript must be keyed so duplicate render calls do not add duplicate code.

Avoid concatenating unescaped user input into JavaScript. Use `ADD_VALUE`, `ADD_ATTRIBUTE`, or `APEX_ESCAPE.JS_LITERAL`.

## API Surface

| Need | Members |
| --- | --- |
| Register JS files | `ADD_LIBRARY`, `ADD_REQUIREJS`, `ADD_REQUIREJS_DEFINE`, `ADD_JET` |
| Inline code | `ADD_INLINE_CODE`, `ADD_ONLOAD_CODE` |
| Build JS object fragments | `ADD_ATTRIBUTE`, `ADD_VALUE` |
| Escape JavaScript | `ESCAPE` |
| Deprecated third-party registration | `ADD_3RD_PARTY_LIBRARY_FILE` |

## Add A Library

Assuming a plug-in file prefix or application static file directory contains `task-board.js`:

```sql
begin
    apex_javascript.add_library(
        p_name                  => 'task-board',
        p_directory             => '#APP_FILES#js/',
        p_check_to_add_minified => true,
        p_key                   => 'task-board');
end;
/
```

Do not include `.js` in `P_NAME` unless `P_SKIP_EXTENSION => TRUE`.

## Add Onload Code

```sql
begin
    apex_javascript.add_onload_code(
        p_code => 'apex.region("tasks").refresh();',
        p_key  => 'refresh-tasks-onload');
end;
/
```

Use a stable `P_KEY` when code can be emitted more than once by repeating components or plug-ins.

## Build A JavaScript Config Object

Assuming server-side values include a region Static ID, a title, and an editable flag:

```sql
declare
    l_config varchar2(32767);
begin
    l_config := '{' ||
        apex_javascript.add_attribute('regionId', 'tasks', p_add_comma => true) ||
        apex_javascript.add_attribute('title', :P10_TITLE, p_add_comma => true) ||
        apex_javascript.add_attribute('editable', true, p_add_comma => false) ||
        '}';

    apex_javascript.add_onload_code(
        p_code => 'window.taskBoard.init(' || l_config || ');',
        p_key  => 'task-board-init');
end;
/
```

`ADD_ATTRIBUTE` chooses the correct JavaScript literal representation for its overload. Use the generated member pages to pick the exact overload for VARCHAR2, NUMBER, BOOLEAN, or DATE values.

## Inline Code With Escaped Value

```sql
begin
    apex_javascript.add_inline_code(
        p_code => 'window.appDisplayName = ' ||
                  apex_escape.js_literal(:APP_DISPLAY_NAME) || ';',
        p_key  => 'app-display-name');
end;
/
```

Prefer structured JSON or `ADD_ATTRIBUTE` for larger configuration objects.

## Notes

- `ADD_LIBRARY` de-duplicates by key; choose keys intentionally for plug-ins.
- `P_ATTRIBUTES` on `ADD_LIBRARY` is caller-escaped. Use `APEX_ESCAPE.HTML_ATTRIBUTE` for dynamic attribute values.
- `ADD_ONLOAD_CODE` runs during APEX page-load behavior; avoid long-running synchronous work.
- The deprecated third-party library routine remains indexed for legacy maintenance.
- For client-side runtime calls, open the JavaScript namespace pages such as `apex.server`, `apex.item`, and `apex.region`.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Data Types | data types | [local](APEX_JAVASCRIPT/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.Data-Types.html) |
| ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated) | procedure | [local](APEX_JAVASCRIPT/ADD_3RD_PARTY_LIBRARY_FILE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_3RD_PARTY_LIBRARY_FILE-Procedure-2.html) |
| ADD_ATTRIBUTE Function Signature 1 | function | [local](APEX_JAVASCRIPT/ADD_ATTRIBUTE_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-1.html) |
| ADD_ATTRIBUTE Function Signature 2 | function | [local](APEX_JAVASCRIPT/ADD_ATTRIBUTE_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-2.html) |
| ADD_ATTRIBUTE Function Signature 3 | function | [local](APEX_JAVASCRIPT/ADD_ATTRIBUTE_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-3.html) |
| ADD_ATTRIBUTE Function Signature 4 | function | [local](APEX_JAVASCRIPT/ADD_ATTRIBUTE_Function_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-4.html) |
| ADD_INLINE_CODE Procedure | procedure | [local](APEX_JAVASCRIPT/ADD_INLINE_CODE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_INLINE_CODE-Procedure.html) |
| ADD_JET Procedure | procedure | [local](APEX_JAVASCRIPT/ADD_JET_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_JET-Procedure.html) |
| ADD_LIBRARY Procedure | procedure | [local](APEX_JAVASCRIPT/ADD_LIBRARY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_LIBRARY-Procedure.html) |
| ADD_REQUIREJS Procedure | procedure | [local](APEX_JAVASCRIPT/ADD_REQUIREJS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_REQUIREJS-Procedure.html) |
| ADD_REQUIREJS_DEFINE Procedure | procedure | [local](APEX_JAVASCRIPT/ADD_REQUIREJS_DEFINE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_REQUIREJS_DEFINE-Procedure.html) |
| ADD_ONLOAD_CODE Procedure | procedure | [local](APEX_JAVASCRIPT/ADD_ONLOAD_CODE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ONLOAD_CODE-Procedure.html) |
| ADD_VALUE Function Signature 1 | function | [local](APEX_JAVASCRIPT/ADD_VALUE_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-1.html) |
| ADD_VALUE Function Signature 2 | function | [local](APEX_JAVASCRIPT/ADD_VALUE_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-2.html) |
| ADD_VALUE Function Signature 3 | function | [local](APEX_JAVASCRIPT/ADD_VALUE_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-3.html) |
| ADD_VALUE Function Signature 4 | function | [local](APEX_JAVASCRIPT/ADD_VALUE_Function_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-4.html) |
| Escape Function | function | [local](APEX_JAVASCRIPT/Escape_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Escape-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
