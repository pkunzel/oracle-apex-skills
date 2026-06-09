# APEX_PLUGIN_UTIL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN_UTIL.html)

Status: curated first-pass reference.

## Purpose

`APEX_PLUGIN_UTIL` contains helper routines for common plug-in work: rendering safe output, debugging callback metadata, reading SQL/LOV data, handling plug-in component values, replacing substitutions, and working with REST Data Source plug-ins.

Use it from plug-in PL/SQL code. Normal application code rarely needs this package.

## When To Use

Use `APEX_PLUGIN_UTIL` when writing a plug-in callback and you need APEX-aware behavior that would be tedious or unsafe to reimplement.

Common examples:

- Print a hidden item value when an item is readonly.
- Escape and print output in chunks.
- Return a two-column LOV as JSON for Ajax.
- Resolve display values from an LOV SQL statement.
- Convert numeric plug-in attributes with the current NLS decimal separator.
- Debug plug-in callback records when APEX debug is enabled.
- Build and send REST Data Source plug-in requests.

## API Surface

| Need | Members |
| --- | --- |
| Debug callback records | `DEBUG_DYNAMIC_ACTION`, `DEBUG_PAGE_ITEM`, `DEBUG_PROCESS`, `DEBUG_REGION` |
| Print HTML/JSON safely | `PRINT_ESCAPED_VALUE`, `PRINT_HIDDEN`, `PRINT_HIDDEN_IF_READONLY`, `PRINT_READ_ONLY`, `PRINT_OPTION`, `PRINT_JSON_HTTP_HEADER`, `PRINT_LOV_AS_JSON` |
| SQL and LOV data | `GET_DATA`, `GET_DATA2`, `GET_DISPLAY_DATA`, `GET_SEARCH_STRING`, `GET_ORDERBY_NULLS_SUPPORT` |
| Attribute and substitution helpers | `GET_ATTRIBUTE_AS_NUMBER`, `ESCAPE`, `REPLACE_SUBSTITUTIONS` |
| Dynamic PL/SQL expressions and functions | `GET_PLSQL_EXPRESSION_RESULT`, `GET_PLSQL_FUNCTION_RESULT`, `GET_PLSQL_EXPR_RESULT_BOOLEAN`, `GET_PLSQL_FUNC_RESULT_BOOLEAN`, CLOB variants |
| Component value state | `SET_COMPONENT_VALUES`, `CLEAR_COMPONENT_VALUES`, `CURRENT_ROW_CHANGED`, `DB_OPERATION_ALLOWED`, `PROCESS_DML_RESPONSE`, `PARSE_REFETCH_RESPONSE` |
| Value comparison/conversion | `IS_EQUAL`, `GET_VALUE_AS_VARCHAR2`, `SPLIT_MUTLIPLE_VALUE_TO_TABLE` |
| REST Data Source plug-ins | `BUILD_REQUEST_BODY`, `MAKE_REST_REQUEST`, `GET_WEB_SOURCE_OPERATION`, `GET_CURRENT_DATABASE_TYPE` |
| Deprecated APIs | `EXECUTE_PLSQL_CODE`, `PAGE_ITEM_NAMES_TO_JQUERY`, old debug/display helpers |

## Render Readonly Item Safely

Assuming an item plug-in render callback using `p_item` and `p_param`:

```sql
apex_plugin_util.print_hidden_if_readonly(
    p_item_name           => p_item.name,
    p_value               => p_param.value,
    p_is_readonly         => p_param.is_readonly,
    p_is_printer_friendly => p_param.is_printer_friendly);

if p_param.is_readonly then
    sys.htp.p('<span class="my-item-readonly">');
    apex_plugin_util.print_escaped_value(p_param.value);
    sys.htp.p('</span>');
else
    sys.htp.p(
        '<input id="' || apex_escape.html_attribute(p_item.name) || '"' ||
        ' name="' || apex_escape.html_attribute(apex_plugin.get_input_name_for_item(false)) || '"' ||
        ' value="' || apex_escape.html_attribute(p_param.value) || '">');
end if;
```

Use `print_hidden_if_readonly` so readonly item values can still be submitted when the plug-in design requires it.

## Return LOV Values As JSON

Assuming an item plug-in Ajax callback that returns display and return values for a search field:

```sql
begin
    apex_plugin_util.print_json_http_header;

    apex_plugin_util.print_lov_as_json(
        p_sql_statement => q'[
            select display_name, user_id
              from app_users
             where active_yn = 'Y'
             order by display_name
        ]',
        p_component_name        => p_item.name,
        p_escape                => true,
        p_replace_substitutions => false);
end;
/
```

Keep the SQL controlled by the plug-in or application builder configuration. Do not concatenate user-supplied search text directly into SQL.

## Display Value Lookup

Use `GET_DISPLAY_DATA` when an item stores a return value but must display the corresponding label.

```sql
declare
    l_display varchar2(32767);
begin
    l_display := apex_plugin_util.get_display_data(
        p_sql_statement     => 'select display_name, user_id from app_users',
        p_min_columns       => 2,
        p_max_columns       => 2,
        p_component_name    => p_item.name,
        p_display_column_no => 1,
        p_search_column_no  => 2,
        p_search_string     => p_param.value,
        p_display_extra     => false,
        p_auto_bind_items   => true);

    sys.htp.p(apex_escape.html(l_display));
end;
/
```

If the lookup SQL uses bind variables, use documented bind-list support from the member page instead of concatenating values.

## Numeric Attribute Conversion

Use `GET_ATTRIBUTE_AS_NUMBER` instead of `TO_NUMBER` for plug-in attributes that are configured as NUMBER values.

```sql
declare
    l_rows number;
begin
    l_rows := apex_plugin_util.get_attribute_as_number(
        p_value           => p_region.attributes.get_varchar2('MAX_ROWS'),
        p_attribute_label => 'Maximum Rows');

    l_rows := coalesce(l_rows, 50);
end;
/
```

This respects the database session NLS decimal separator.

## Debug Callback Inputs

Use the debug helpers while developing or diagnosing plug-ins. They write useful callback metadata when APEX debug is enabled.

```sql
begin
    apex_plugin_util.debug_region(
        p_plugin => p_plugin,
        p_region => p_region);

    apex_debug.info(
        p_message => 'Rendering custom region %s',
        p0        => p_region.dom_id);
end;
/
```

Do not write secrets, credentials, tokens, or raw request bodies to debug output.

## REST Data Source Plug-In Pattern

For REST Data Source plug-ins, let `APEX_PLUGIN_UTIL` honor the REST operation metadata instead of making a raw `APEX_WEB_SERVICE` call.

```sql
declare
    l_operation           apex_plugin.t_web_source_operation;
    l_time_budget         number := 20;
    l_request_body        clob;
    l_response            clob;
    l_response_parameters apex_plugin.t_web_source_parameters;
begin
    l_operation := apex_plugin_util.get_web_source_operation;

    apex_plugin_util.make_rest_request(
        p_web_source_operation => l_operation,
        p_request_body         => l_request_body,
        p_bypass_cache         => false,
        p_time_budget          => l_time_budget,
        p_response             => l_response,
        p_response_parameters  => l_response_parameters);

    apex_debug.info('REST response length: %s', dbms_lob.getlength(l_response));
end;
/
```

Assuming your plug-in participates in REST Data Source DML, use `BUILD_REQUEST_BODY` to apply request-body templates and column placeholders rather than hand-building JSON from scratch.

## Dynamic PL/SQL Caution

The `GET_PLSQL_*` routines evaluate configured PL/SQL expressions or functions. They are useful for declarative plug-in attributes that intentionally contain PL/SQL, but they should never evaluate end-user input.

Prefer narrow return-type helpers such as `GET_PLSQL_EXPR_RESULT_BOOLEAN` when the plug-in expects a Boolean. Avoid deprecated `EXECUTE_PLSQL_CODE`.

## Safety Notes

- Escape output in the correct context: HTML text, HTML attribute, JavaScript, JSON, or SQL.
- Do not concatenate user input into SQL statements passed to `GET_DATA`, `GET_DATA2`, `GET_DISPLAY_DATA`, or `PRINT_LOV_AS_JSON`.
- Use `GET_ATTRIBUTE_AS_NUMBER` for NUMBER attributes rather than `TO_NUMBER`.
- Prefer current non-deprecated helpers; generated member pages clearly mark deprecated APIs.
- For REST Data Source plug-ins, use the REST source metadata and web credentials configured in APEX.
- Open local member pages for exact signatures because several APIs have multiple signatures and `IN OUT NOCOPY` parameters.

## Related APIs

- [APEX_PLUGIN](APEX_PLUGIN.md) for plug-in callback types and result records.
- [APEX_ESCAPE](APEX_ESCAPE.md) for context-specific escaping outside plug-in utility output helpers.
- [APEX_DEBUG](APEX_DEBUG.md) for general debug logging.
- [APEX_WEB_SERVICE](APEX_WEB_SERVICE.md) for direct REST/SOAP calls outside REST Data Source plug-ins.
- [APEX_EXEC](APEX_EXEC.md) for declarative/local/remote query contexts.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| BUILD_REQUEST_BODY Procedure | procedure | [local](APEX_PLUGIN_UTIL/BUILD_REQUEST_BODY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BUILD_REQUEST_BODY-Procedure.html) |
| CLEAR_COMPONENT_VALUES Procedure | procedure | [local](APEX_PLUGIN_UTIL/CLEAR_COMPONENT_VALUES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_COMPONENT_VALUES-Procedure.html) |
| CURRENT_ROW_CHANGED Function | function | [local](APEX_PLUGIN_UTIL/CURRENT_ROW_CHANGED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_ROW_CHANGED-Function.html) |
| DB_OPERATION_ALLOWED Function | function | [local](APEX_PLUGIN_UTIL/DB_OPERATION_ALLOWED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DB_OPERATION_ALLOWED-Function.html) |
| DEBUG_DYNAMIC _ACTION Procedure | procedure | [local](APEX_PLUGIN_UTIL/DEBUG_DYNAMIC_ACTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_DYNAMIC-_ACTION-Procedure.html) |
| DEBUG_PAGE_ITEM Procedure Signature 1 (Deprecated) | procedure | [local](APEX_PLUGIN_UTIL/DEBUG_PAGE_ITEM_Procedure_Signature_1_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_PAGE_ITEM-Procedure-Signature-1.html) |
| DEBUG_PAGE_ITEM Procedure Signature 2 (Deprecated) | procedure | [local](APEX_PLUGIN_UTIL/DEBUG_PAGE_ITEM_Procedure_Signature_2_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_PAGE_ITEM-Procedure-Signature-2.html) |
| DEBUG_PROCESS Procedure | procedure | [local](APEX_PLUGIN_UTIL/DEBUG_PROCESS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_PROCESS-Procedure.html) |
| DEBUG_REGION Procedure Signature 1 | procedure | [local](APEX_PLUGIN_UTIL/DEBUG_REGION_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_REGION-Procedure-Signature-1.html) |
| DEBUG_REGION Procedure Signature 2 | procedure | [local](APEX_PLUGIN_UTIL/DEBUG_REGION_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEBUG_REGION-Procedure-Signature-2.html) |
| ESCAPE Function | function | [local](APEX_PLUGIN_UTIL/ESCAPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ESCAPE-Function-2.html) |
| EXECUTE_PLSQL_CODE Procedure (Deprecated) | procedure | [local](APEX_PLUGIN_UTIL/EXECUTE_PLSQL_CODE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXECUTE_PLSQL_CODE-Procedure.html) |
| GET_ATTRIBUTE_AS_NUMBER Function | function | [local](APEX_PLUGIN_UTIL/GET_ATTRIBUTE_AS_NUMBER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ATTRIBUTE_AS_NUMBER-Function.html) |
| GET_CURRENT_DATABASE_TYPE Function | function | [local](APEX_PLUGIN_UTIL/GET_CURRENT_DATABASE_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CURRENT_DATABASE_TYPE-Function.html) |
| GET_DATA Function Signature 1 | function | [local](APEX_PLUGIN_UTIL/GET_DATA_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATA-Function-Signature-1.html) |
| GET_DATA Function Signature 2 | function | [local](APEX_PLUGIN_UTIL/GET_DATA_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATA-Function-Signature-2.html) |
| GET_DATA2 Function Signature 1 | function | [local](APEX_PLUGIN_UTIL/GET_DATA2_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATA2-Function-Signature-1.html) |
| GET_DATA2 Function Signature 2 | function | [local](APEX_PLUGIN_UTIL/GET_DATA2_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATA2-Function-Signature-2.html) |
| GET_DISPLAY_DATA Function Signature 1 | function | [local](APEX_PLUGIN_UTIL/GET_DISPLAY_DATA_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DISPLAY_DATA-Function-Signature-1.html) |
| GET_DISPLAY_DATA Function Signature 2 | function | [local](APEX_PLUGIN_UTIL/GET_DISPLAY_DATA_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DISPLAY_DATA-Function-Signature-2.html) |
| GET_ELEMENT_ATTRIBUTES Function | function | [local](APEX_PLUGIN_UTIL/GET_ELEMENT_ATTRIBUTES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ELEMENT_ATTRIBUTES-Function.html) |
| GET_HTML_ATTR Function | function | [local](APEX_PLUGIN_UTIL/GET_HTML_ATTR_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_HTML_ATTR-Function.html) |
| GET_ORDERBY_NULLS_SUPPORT Function | function | [local](APEX_PLUGIN_UTIL/GET_ORDERBY_NULLS_SUPPORT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ORDERBY_NULLS_SUPPORT-Function.html) |
| GET_PLSQL_EXPR_RESULT_BOOLEAN Function | function | [local](APEX_PLUGIN_UTIL/GET_PLSQL_EXPR_RESULT_BOOLEAN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_EXPR_RESULT_BOOLEAN-Function.html) |
| GET_PLSQL_EXPR_RESULT_CLOB Function | function | [local](APEX_PLUGIN_UTIL/GET_PLSQL_EXPR_RESULT_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_EXPR_RESULT_CLOB-Function.html) |
| GET_PLSQL_EXPRESSION_RESULT Function | function | [local](APEX_PLUGIN_UTIL/GET_PLSQL_EXPRESSION_RESULT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_EXPRESSION_RESULT-Function.html) |
| GET_PLSQL_FUNC_RESULT_BOOLEAN Function | function | [local](APEX_PLUGIN_UTIL/GET_PLSQL_FUNC_RESULT_BOOLEAN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_FUNC_RESULT_BOOLEAN-Function.html) |
| GET_PLSQL_FUNC_RESULT_CLOB Function | function | [local](APEX_PLUGIN_UTIL/GET_PLSQL_FUNC_RESULT_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_FUNC_RESULT_CLOB-Function.html) |
| GET_PLSQL_FUNCTION_RESULT Function | function | [local](APEX_PLUGIN_UTIL/GET_PLSQL_FUNCTION_RESULT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_FUNCTION_RESULT-Function.html) |
| GET_POSITION_IN_LIST Function (Deprecated) | function | [local](APEX_PLUGIN_UTIL/GET_POSITION_IN_LIST_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_POSITION_IN_LIST-Function.html) |
| GET_SEARCH_STRING Function | function | [local](APEX_PLUGIN_UTIL/GET_SEARCH_STRING_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SEARCH_STRING-Function.html) |
| GET_VALUE_AS_VARCHAR2 Function | function | [local](APEX_PLUGIN_UTIL/GET_VALUE_AS_VARCHAR2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_VALUE_AS_VARCHAR2-Function.html) |
| GET_WEB_SOURCE_OPERATION Function | function | [local](APEX_PLUGIN_UTIL/GET_WEB_SOURCE_OPERATION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WEB_SOURCE_OPERATION-Function.html) |
| IS_EQUAL Function | function | [local](APEX_PLUGIN_UTIL/IS_EQUAL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_EQUAL-Function.html) |
| IS_COMPONENT_USED Function | function | [local](APEX_PLUGIN_UTIL/IS_COMPONENT_USED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_COMPONENT_USED-Function.html) |
| MAKE_REST_REQUEST Procedure Signature 1 | procedure | [local](APEX_PLUGIN_UTIL/MAKE_REST_REQUEST_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Procedure-Signature-1.html) |
| MAKE_REST_REQUEST Procedure Signature 2 | procedure | [local](APEX_PLUGIN_UTIL/MAKE_REST_REQUEST_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Procedure-Signature-2.html) |
| PAGE_ITEM_NAMES_TO_JQUERY Function (Deprecated) | function | [local](APEX_PLUGIN_UTIL/PAGE_ITEM_NAMES_TO_JQUERY_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PAGE_ITEM_NAMES_TO_JQUERY-Function.html) |
| PARSE_REFETCH_RESPONSE Function | function | [local](APEX_PLUGIN_UTIL/PARSE_REFETCH_RESPONSE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_REFETCH_RESPONSE-Function.html) |
| PRINT_DISPLAY_ONLY Procedure Signature 1 (Deprecated) | procedure | [local](APEX_PLUGIN_UTIL/PRINT_DISPLAY_ONLY_Procedure_Signature_1_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_DISPLAY_ONLY-Procedure-Signature-1.html) |
| PRINT_DISPLAY_ONLY Procedure Signature 2 (Deprecated) | procedure | [local](APEX_PLUGIN_UTIL/PRINT_DISPLAY_ONLY_Procedure_Signature_2_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_DISPLAY_ONLY-Procedure-Signature-2.html) |
| PRINT_ESCAPED_VALUE Procedure Signature 1 | procedure | [local](APEX_PLUGIN_UTIL/PRINT_ESCAPED_VALUE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_ESCAPED_VALUE-Procedure.html) |
| PRINT_ESCAPED_VALUE Procedure Signature 2 | procedure | [local](APEX_PLUGIN_UTIL/PRINT_ESCAPED_VALUE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_ESCAPED_VALUE-Procedure-Signature-2.html) |
| PRINT_HIDDEN Procedure | procedure | [local](APEX_PLUGIN_UTIL/PRINT_HIDDEN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_HIDDEN-Procedure.html) |
| PRINT_HIDDEN_IF_READONLY Procedure | procedure | [local](APEX_PLUGIN_UTIL/PRINT_HIDDEN_IF_READONLY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_HIDDEN_IF_READONLY-Procedure.html) |
| PRINT_JSON_HTTP_HEADER Procedure | procedure | [local](APEX_PLUGIN_UTIL/PRINT_JSON_HTTP_HEADER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_JSON_HTTP_HEADER-Procedure.html) |
| PRINT_LOV_AS_JSON Procedure | procedure | [local](APEX_PLUGIN_UTIL/PRINT_LOV_AS_JSON_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_LOV_AS_JSON-Procedure.html) |
| PRINT_OPTION Procedure | procedure | [local](APEX_PLUGIN_UTIL/PRINT_OPTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_OPTION-Procedure.html) |
| PRINT_READ_ONLY Procedure Signature 1 | procedure | [local](APEX_PLUGIN_UTIL/PRINT_READ_ONLY_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_READ_ONLY-Procedure-Signature-1.html) |
| PRINT_READ_ONLY Procedure Signature 2 | procedure | [local](APEX_PLUGIN_UTIL/PRINT_READ_ONLY_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_READ_ONLY-Procedure-Signature-2.html) |
| PROCESS_DML_RESPONSE Procedure | procedure | [local](APEX_PLUGIN_UTIL/PROCESS_DML_RESPONSE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PROCESS_DML_RESPONSE-Procedure.html) |
| REPLACE_SUBSTITUTIONS Function | function | [local](APEX_PLUGIN_UTIL/REPLACE_SUBSTITUTIONS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_SUBSTITUTIONS-Function.html) |
| SET_COMPONENT_VALUES Procedure | procedure | [local](APEX_PLUGIN_UTIL/SET_COMPONENT_VALUES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_COMPONENT_VALUES-Procedure.html) |
| SPLIT_MUTLIPLE_VALUE_TO_TABLE Function | function | [local](APEX_PLUGIN_UTIL/SPLIT_MUTLIPLE_VALUE_TO_TABLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_MUTLIPLE_VALUE_TO_TABLE-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
