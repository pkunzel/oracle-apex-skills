# APEX_JSON

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html)

Status: curated first-pass reference.

## Purpose

`APEX_JSON` reads and writes JSON from PL/SQL. It is commonly used in Ajax Callback processes, REST integrations, custom API endpoints, and server-side code that must emit JSON to browser JavaScript.

For new database-only code, Oracle SQL/JSON functions and PL/SQL JSON object types can also be good choices. `APEX_JSON` remains especially useful in APEX because it writes directly to the APEX/HTP response buffer and has simple path-based parsing helpers.

## When To Use

Use `APEX_JSON` when:

- An Ajax Callback must return JSON.
- A page process must parse JSON sent from JavaScript.
- A REST response needs path-based extraction.
- You need to build JSON incrementally from PL/SQL loops.
- You want CLOB output from generated JSON.

Prefer SQL `json_object`, `json_arrayagg`, or `json_table` when the data is naturally produced by SQL. Prefer `sys.json_object_t` and related types when object-style manipulation is clearer.

## Common Member Groups

| Need | Members |
| --- | --- |
| Start/finish output | `OPEN_OBJECT`, `CLOSE_OBJECT`, `OPEN_ARRAY`, `CLOSE_ARRAY`, `CLOSE_ALL` |
| Write values | `WRITE` signatures, `WRITE_CONTEXT` |
| CLOB output | `INITIALIZE_CLOB_OUTPUT`, `GET_CLOB_OUTPUT`, `FREE_OUTPUT` |
| Parse JSON | `PARSE` |
| Read values | `GET_VARCHAR2`, `GET_NUMBER`, `GET_BOOLEAN`, `GET_DATE`, `GET_CLOB`, `GET_COUNT` |
| Inspect JSON | `DOES_EXIST`, `GET_VALUE_KIND`, `GET_MEMBERS`, `FIND_PATHS_LIKE` |
| Convert/escape | `STRINGIFY`, `TO_MEMBER_NAME`, `TO_XMLTYPE`, `TO_XMLTYPE_SQL` |

## Writing JSON To An Ajax Response

Simple example for an Ajax Callback:

```sql
begin
    apex_json.open_object;
    apex_json.write('status', 'ok');
    apex_json.write('message', 'Saved');
    apex_json.close_object;
end;
/
```

JavaScript caller:

```javascript
apex.server.process( "SAVE_THING", {
    pageItems: "#P10_NAME"
} ).done( function( data ) {
    apex.message.showPageSuccess( data.message );
} );
```

## Writing Arrays

Assuming `tasks(task_id, task_name, status)`:

```sql
begin
    apex_json.open_object;
    apex_json.open_array('tasks');

    for rec in (
        select task_id, task_name, status
          from tasks
         where assignee = :APP_USER
         order by task_id
    ) loop
        apex_json.open_object;
        apex_json.write('id', rec.task_id);
        apex_json.write('name', rec.task_name);
        apex_json.write('status', rec.status);
        apex_json.close_object;
    end loop;

    apex_json.close_array;
    apex_json.close_object;
end;
/
```

## Producing A CLOB

Use CLOB output when another API needs the generated JSON as a value instead of writing it directly to the HTTP response.

```sql
declare
    l_payload clob;
begin
    apex_json.initialize_clob_output;
    apex_json.open_object;
    apex_json.write('event', 'order_created');
    apex_json.write('orderId', 1001);
    apex_json.close_object;

    l_payload := apex_json.get_clob_output;
    apex_json.free_output;

    -- Pass l_payload to a web service, queue, or log table.
end;
/
```

## Parsing JSON

Simple parse and extract:

```sql
declare
    l_values apex_json.t_values;
    l_total  number;
begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"orderId":1001,"total":49.95}');

    l_total := apex_json.get_number(
        p_values => l_values,
        p_path   => 'total');
end;
/
```

More complex parse with an array:

```sql
declare
    l_values apex_json.t_values;
    l_count  number;
begin
    apex_json.parse(
        p_values => l_values,
        p_source => :P10_JSON_PAYLOAD);

    l_count := apex_json.get_count(
        p_values => l_values,
        p_path   => 'items');

    for i in 1 .. l_count loop
        insert into order_import_lines (
            sku,
            quantity )
        values (
            apex_json.get_varchar2(l_values, 'items[%d].sku', i),
            apex_json.get_number(l_values, 'items[%d].quantity', i) );
    end loop;
end;
/
```

## Safety Guidance

- Always close opened objects/arrays; `CLOSE_ALL` can help recover from conditional branches.
- Free CLOB output with `FREE_OUTPUT` after `GET_CLOB_OUTPUT`.
- Validate required paths with `DOES_EXIST` before using values for DML.
- Do not assume browser-provided JSON is trustworthy.
- Keep JSON property names stable because JavaScript and PL/SQL both depend on them.
- For large SQL-derived payloads, consider SQL JSON generation for efficiency.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| APEX_JSON Overview and Examples | examples | [local](APEX_JSON/APEX_JSON_Overview_and_Examples.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html) |
| Constants and Data Types | constants | [local](APEX_JSON/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON-Constants-and-Data-Types.html) |
| CLOSE_ALL Procedure | procedure | [local](APEX_JSON/CLOSE_ALL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_ALL-Procedure.html) |
| CLOSE_ARRAY Procedure | procedure | [local](APEX_JSON/CLOSE_ARRAY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_ARRAY-Procedure.html) |
| CLOSE_OBJECT Procedure | procedure | [local](APEX_JSON/CLOSE_OBJECT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_OBJECT-Procedure.html) |
| DOES_EXIST Function | function | [local](APEX_JSON/DOES_EXIST_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOES_EXIST-Function.html) |
| FIND_PATHS_LIKE Function | function | [local](APEX_JSON/FIND_PATHS_LIKE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_PATHS_LIKE-Function.html) |
| FLUSH Procedure | procedure | [local](APEX_JSON/FLUSH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FLUSH-Procedure.html) |
| FREE_OUTPUT Procedure | procedure | [local](APEX_JSON/FREE_OUTPUT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FREE_OUTPUT-Procedure.html) |
| GET_BOOLEAN Function | function | [local](APEX_JSON/GET_BOOLEAN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BOOLEAN-Function.html) |
| GET_CLOB Function | function | [local](APEX_JSON/GET_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_CLOB-Function.html) |
| GET_CLOB_OUTPUT Function | function | [local](APEX_JSON/GET_CLOB_OUTPUT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CLOB_OUTPUT-Function.html) |
| GET_COUNT Function | function | [local](APEX_JSON/GET_COUNT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_COUNT-Function.html) |
| GET_DATE Function | function | [local](APEX_JSON/GET_DATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATE-Function.html) |
| GET_MEMBERS Function | function | [local](APEX_JSON/GET_MEMBERS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBERS-Function.html) |
| GET_NUMBER Function | function | [local](APEX_JSON/GET_NUMBER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_NUMBER-Function.html) |
| GET_SDO_GEOMETRY Function | function | [local](APEX_JSON/GET_SDO_GEOMETRY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SDO_GEOMETRY-Function.html) |
| GET_T_NUMBER Function | function | [local](APEX_JSON/GET_T_NUMBER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_T_NUMBER-Function.html) |
| GET_T_VARCHAR2 Function | function | [local](APEX_JSON/GET_T_VARCHAR2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_T_VARCHAR2-Function.html) |
| GET_VALUE Function | function | [local](APEX_JSON/GET_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_VALUE-Function.html) |
| GET_VALUE_KIND Function | function | [local](APEX_JSON/GET_VALUE_KIND_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_VALUE_KIND-Function.html) |
| GET_VARCHAR2 Function | function | [local](APEX_JSON/GET_VARCHAR2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_VARCHAR2-Function.html) |
| INITIALIZE_CLOB_OUTPUT Procedure | procedure | [local](APEX_JSON/INITIALIZE_CLOB_OUTPUT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INITIALIZE_CLOB_OUTPUT-Procedure.html) |
| INITIALIZE_OUTPUT Procedure | procedure | [local](APEX_JSON/INITIALIZE_OUTPUT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INITIALIZE_OUTPUT-Procedure.html) |
| OPEN_ARRAY Procedure | procedure | [local](APEX_JSON/OPEN_ARRAY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OPEN_ARRAY-Procedure.html) |
| OPEN_OBJECT Procedure | procedure | [local](APEX_JSON/OPEN_OBJECT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OPEN_OBJECT-Procedure.html) |
| PARSE Procedure Signature 1 | procedure | [local](APEX_JSON/PARSE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE-Procedure-Signature-1.html) |
| PARSE Procedure Signature 2 | procedure | [local](APEX_JSON/PARSE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE-Procedure-Signature-2.html) |
| STRINGIFY Function Signature 1 | function | [local](APEX_JSON/STRINGIFY_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-1.html) |
| STRINGIFY Function Signature 2 | function | [local](APEX_JSON/STRINGIFY_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-2.html) |
| STRINGIFY Function Signature 3 | function | [local](APEX_JSON/STRINGIFY_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-3.html) |
| STRINGIFY Function Signature 4 | function | [local](APEX_JSON/STRINGIFY_Function_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-4.html) |
| STRINGIFY Function Signature 5 | function | [local](APEX_JSON/STRINGIFY_Function_Signature_5.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-5.html) |
| TO_MEMBER_NAME Function | function | [local](APEX_JSON/TO_MEMBER_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/To_MEMBER_NAME-Function.html) |
| TO_XMLTYPE Function | function | [local](APEX_JSON/TO_XMLTYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_XMLTYPE-Function.html) |
| TO_XMLTYPE_SQL Function | function | [local](APEX_JSON/TO_XMLTYPE_SQL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_XMLTYPE_SQL-Function.html) |
| WRITE Procedure Signature 1 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html) |
| WRITE Procedure Signature 2 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-2.html) |
| WRITE Procedure Signature 3 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-3.html) |
| WRITE Procedure Signature 4 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-4.html) |
| WRITE Procedure Signature 5 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_5.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-5.html) |
| WRITE Procedure Signature 6 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_6.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-6.html) |
| WRITE Procedure Signature 7 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_7.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-7.html) |
| WRITE Procedure Signature 8 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_8.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-8.html) |
| WRITE Procedure Signature 9 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_9.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-9.html) |
| WRITE Procedure Signature 10 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_10.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-10.html) |
| WRITE Procedure Signature 11 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_11.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-11.html) |
| WRITE Procedure Signature 12 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_12.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-12.html) |
| WRITE Procedure Signature 13 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_13.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-13.html) |
| WRITE Procedure Signature 14 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_14.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-14.html) |
| WRITE Procedure Signature 15 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_15.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-15.html) |
| WRITE Procedure Signature 16 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_16.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-16.html) |
| WRITE Procedure Signature 17 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_17.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-17.html) |
| WRITE Procedure Signature 18 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_18.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-18.html) |
| WRITE Procedure Signature 19 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_19.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-19.html) |
| WRITE Procedure Signature 20 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_20.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-20.html) |
| WRITE Procedure Signature 21 | procedure | [local](APEX_JSON/WRITE_Procedure_Signature_21.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-21.html) |
| WRITE_CONTEXT Procedure | procedure | [local](APEX_JSON/WRITE_CONTEXT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE_CONTEXT-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
