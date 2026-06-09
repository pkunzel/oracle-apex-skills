# APEX_EXEC

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html)

Status: curated first-pass reference.

## Purpose

`APEX_EXEC` is the generic execution layer for local SQL, remote SQL, REST Data Sources, and DML contexts. It lets PL/SQL code open a query context, iterate rows, read typed column values, execute DML, call REST sources, and work with data sources in a consistent way.

Use `APEX_EXEC` when code should work against APEX data source abstractions rather than hard-coding everything as local SQL or raw HTTP.

## When To Use

Use `APEX_EXEC` when:

- A plug-in, process, or package needs to read rows from local SQL, remote SQL, REST Data Sources, JSON sources, or duality views.
- You need a common cursor-like API: open context, loop rows, get values, close context.
- Code needs to execute DML through an APEX data source abstraction.
- A REST Source is already modeled declaratively and should not be called manually with `APEX_WEB_SERVICE`.
- You need to describe query columns or inspect returned metadata.

Prefer direct SQL when the data is definitely local and the code does not need APEX data-source abstraction. Prefer `APEX_WEB_SERVICE` for low-level HTTP calls that are not modeled as REST Data Sources.

## Common Member Groups

| Need | Members |
| --- | --- |
| Query lifecycle | `OPEN_QUERY_CONTEXT`, `NEXT_ROW`, `GET_*`, `CLOSE` |
| Query metadata | `DESCRIBE_QUERY`, `GET_COLUMNS`, `GET_COLUMN`, `GET_COLUMN_COUNT`, `GET_COLUMN_POSITION` |
| Parameters and filters | `ADD_PARAMETER`, `ADD_FILTER`, `ADD_ORDER_BY` |
| REST/remote execution | `OPEN_REST_SOURCE_QUERY`, `EXECUTE_REST_SOURCE`, `OPEN_REMOTE_SQL_QUERY`, `EXECUTE_REMOTE_PLSQL` |
| DML contexts | `OPEN_LOCAL_DML_CONTEXT`, `OPEN_REST_SOURCE_DML_CONTEXT`, `ADD_DML_ROW`, `SET_VALUE`, `EXECUTE_DML` |
| Status/errors | `HAS_ERROR`, `GET_DML_STATUS_CODE`, `GET_DML_STATUS_MESSAGE` |
| Deprecated web source APIs | `OPEN_WEB_SOURCE_*`, `EXECUTE_WEB_SOURCE`, `PURGE_WEB_SOURCE_CACHE` |

## Query Lifecycle

Assuming a local table `emp(empno, ename, deptno)`:

```sql
declare
    l_context apex_exec.t_context;
begin
    l_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => q'[
            select empno, ename
              from emp
             where deptno = :P1_DEPTNO
             order by ename
        ]');

    while apex_exec.next_row(l_context) loop
        apex_debug.info(
            'Employee %s: %s',
            apex_exec.get_number(l_context, 'EMPNO'),
            apex_exec.get_varchar2(l_context, 'ENAME'));
    end loop;

    apex_exec.close(l_context);
exception
    when others then
        apex_exec.close(l_context);
        raise;
end;
/
```

Always close contexts, including in exception handlers.

## Query With Parameters

Assuming `P10_DEPTNO` contains a department number:

```sql
declare
    l_context    apex_exec.t_context;
    l_parameters apex_exec.t_parameters;
begin
    apex_exec.add_parameter(
        p_parameters => l_parameters,
        p_name       => 'DEPTNO',
        p_value      => :P10_DEPTNO);

    l_context := apex_exec.open_query_context(
        p_location       => apex_exec.c_location_local_db,
        p_sql_query      => 'select empno, ename from emp where deptno = :DEPTNO',
        p_sql_parameters => l_parameters);

    while apex_exec.next_row(l_context) loop
        null;
    end loop;

    apex_exec.close(l_context);
end;
/
```

Use bind parameters instead of concatenating user input into SQL text.

## REST Source Query Pattern

Assuming a REST Data Source with static ID `github_issues` and a parameter `owner`:

```sql
declare
    l_context    apex_exec.t_context;
    l_parameters apex_exec.t_parameters;
begin
    apex_exec.add_parameter(
        p_parameters => l_parameters,
        p_name       => 'owner',
        p_value      => 'oracle');

    l_context := apex_exec.open_rest_source_query(
        p_module_static_id   => 'github_issues',
        p_web_src_parameters => l_parameters);

    while apex_exec.next_row(l_context) loop
        apex_debug.info(
            'Issue: %s',
            apex_exec.get_varchar2(l_context, 'TITLE'));
    end loop;

    apex_exec.close(l_context);
end;
/
```

Check the local member page for the exact `OPEN_REST_SOURCE_QUERY` signature needed by the data source type.

## DML Pattern

Assuming an editable data source supports DML:

```sql
declare
    l_context apex_exec.t_context;
begin
    l_context := apex_exec.open_local_dml_context(
        p_table_owner => user,
        p_table_name  => 'TASKS');

    apex_exec.add_dml_row(
        p_context => l_context,
        p_operation => apex_exec.c_dml_operation_insert);

    apex_exec.set_value(l_context, 'TASK_NAME', 'Review API docs');
    apex_exec.set_value(l_context, 'STATUS', 'OPEN');

    apex_exec.execute_dml(l_context);
    apex_exec.close(l_context);
end;
/
```

Use generated local member pages for exact DML signatures and source-specific options.

## Safety Guidance

- Always close query and DML contexts.
- Use bind parameters and `ADD_PARAMETER` for user-controlled values.
- Treat remote and REST source data as untrusted.
- Prefer non-deprecated REST Source APIs over Web Source APIs.
- Enforce authorization before opening data sources that expose sensitive rows.
- Log errors with enough context, but do not log secrets or full personal-data payloads.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Call Sequences for APEX_EXEC | topic | [local](APEX_EXEC/Call_Sequences_for_APEX_EXEC.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html) |
| Querying a Data Source with APEX_EXEC | topic | [local](APEX_EXEC/Querying_a_Data_Source_with_APEX_EXEC.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html) |
| Executing a DML on a Data Source with APEX_EXEC | topic | [local](APEX_EXEC/Executing_a_DML_on_a_Data_Source_with_APEX_EXEC.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html) |
| Executing a Remote Procedure or REST API with APEX_EXEC | procedure | [local](APEX_EXEC/Executing_a_Remote_Procedure_or_REST_API_with_APEX_EXEC.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html) |
| Global Constants | constants | [local](APEX_EXEC/Global_Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.Global-Constants.html) |
| Data Types | data types | [local](APEX_EXEC/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.Data-Types.html) |
| ADD_COLUMN Procedure | procedure | [local](APEX_EXEC/ADD_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_COLUMN-Procedure.html) |
| ADD_DML_ARRAY_ROW Procedure | procedure | [local](APEX_EXEC/ADD_DML_ARRAY_ROW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html) |
| ADD_DML_ROW Procedure | procedure | [local](APEX_EXEC/ADD_DML_ROW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ROW-Procedure.html) |
| ADD_FILTER Procedures | topic | [local](APEX_EXEC/ADD_FILTER_Procedures.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_FILTER-Procedure.html) |
| ADD_ORDER_BY Procedure | procedure | [local](APEX_EXEC/ADD_ORDER_BY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_ORDERBY-Procedure.html) |
| ADD_PARAMETER Procedure | procedure | [local](APEX_EXEC/ADD_PARAMETER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_ORDER_BY-Procedure.html) |
| CLEAR_DML_ROWS Procedure | procedure | [local](APEX_EXEC/CLEAR_DML_ROWS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLEAR_DML_ROWS-Procedure.html) |
| CLOSE Procedure | procedure | [local](APEX_EXEC/CLOSE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE-Procedure.html) |
| CLOSE_ARRAY Procedure | procedure | [local](APEX_EXEC/CLOSE_ARRAY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html) |
| COLUMN_EXISTS Function | function | [local](APEX_EXEC/COLUMN_EXISTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COLUMN_EXISTS-Function.html) |
| COPY_DATA Procedure | procedure | [local](APEX_EXEC/COPY_DATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COPY_DATA-Procedure.html) |
| DESCRIBE_QUERY Function Signature 1 | function | [local](APEX_EXEC/DESCRIBE_QUERY_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.DESCRIBE_QUERY-Function-Signature-1.html) |
| DESCRIBE_QUERY Function Signature 2 | function | [local](APEX_EXEC/DESCRIBE_QUERY_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.DESCRIBE_QUERY-Function-Signature-2.html) |
| ENQUOTE_LITERAL Function | function | [local](APEX_EXEC/ENQUOTE_LITERAL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ENQUOTE_LITERAL-Function.html) |
| ENQUOTE_NAME Function | function | [local](APEX_EXEC/ENQUOTE_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ENQUOTE_NAME-Function.html) |
| EXECUTE_DML Procedure | procedure | [local](APEX_EXEC/EXECUTE_DML_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_DML-Procedure.html) |
| EXECUTE_PLSQL Procedure Signature 1 | procedure | [local](APEX_EXEC/EXECUTE_PLSQL_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-1.html) |
| EXECUTE_PLSQL Procedure Signature 2 | procedure | [local](APEX_EXEC/EXECUTE_PLSQL_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-2.html) |
| EXECUTE_REMOTE_PLSQL Procedure Signature 1 | procedure | [local](APEX_EXEC/EXECUTE_REMOTE_PLSQL_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REMOTE_PLSQL-Procedure.html) |
| EXECUTE_REMOTE_PLSQL Procedure Signature 2 | procedure | [local](APEX_EXEC/EXECUTE_REMOTE_PLSQL_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REMOTE_PLSQL-Procedure-Signature-2.html) |
| EXECUTE_REST_SOURCE Procedure Signature 1 | procedure | [local](APEX_EXEC/EXECUTE_REST_SOURCE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-1.html) |
| EXECUTE_REST_SOURCE Procedure Signature 2 | procedure | [local](APEX_EXEC/EXECUTE_REST_SOURCE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-2.html) |
| EXECUTE_WEB_SOURCE Procedure (Deprecated) | procedure | [local](APEX_EXEC/EXECUTE_WEB_SOURCE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_WEB_SOURCE-Procedure.html) |
| GET Function | function | [local](APEX_EXEC/GET_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET-Functions.html) |
| GET_ARRAY_ROW_DML_OPERATION Function | function | [local](APEX_EXEC/GET_ARRAY_ROW_DML_OPERATION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_DML_OPERATION-Function.html) |
| GET_ARRAY_ROW_VERSION_CHECKSUM Function | function | [local](APEX_EXEC/GET_ARRAY_ROW_VERSION_CHECKSUM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM-Function.html) |
| GET_COLUMN Function | function | [local](APEX_EXEC/GET_COLUMN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN-FUNCTION.html) |
| GET_COLUMNS Function | function | [local](APEX_EXEC/GET_COLUMNS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMNS-Function.html) |
| GET_COLUMN_COUNT Function | function | [local](APEX_EXEC/GET_COLUMN_COUNT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_COUNT-FUNCTION.html) |
| GET_COLUMN_POSITION Function | function | [local](APEX_EXEC/GET_COLUMN_POSITION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_POSITION-FUNCTION.html) |
| GET_DATA_TYPE Function | function | [local](APEX_EXEC/GET_DATA_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DATA_TYPE-Function.html) |
| GET_DML_STATUS_CODE Function | function | [local](APEX_EXEC/GET_DML_STATUS_CODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DML_STATUS_CODE-Function.html) |
| GET_DML_STATUS_MESSAGE Function | function | [local](APEX_EXEC/GET_DML_STATUS_MESSAGE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DML_STATUS_MESSAGE-Function.html) |
| GET_PARAMETER Functions | topic | [local](APEX_EXEC/GET_PARAMETER_Functions.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_PARAMETERS-Function.html) |
| GET_ROW_VERSION_CHECKSUM Function | function | [local](APEX_EXEC/GET_ROW_VERSION_CHECKSUM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ROW_VERSION_CHECKSUM-Function.html) |
| GET_TOTAL_ROW_COUNT Function | function | [local](APEX_EXEC/GET_TOTAL_ROW_COUNT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_TOTAL_ROW_COUNT-FUNCTION.html) |
| HAS_ERROR Function | function | [local](APEX_EXEC/HAS_ERROR_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_ERROR-Function.html) |
| HAS_MORE_ARRAY_ROWS Function | function | [local](APEX_EXEC/HAS_MORE_ARRAY_ROWS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_MORE_ARRAY_ROWS-Function.html) |
| HAS_MORE_ROWS Function | function | [local](APEX_EXEC/HAS_MORE_ROWS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_MORE_ROWS-Function.html) |
| IS_GROUP_END Function | function | [local](APEX_EXEC/IS_GROUP_END_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_GROUP_END-Function.html) |
| IS_REMOTE_SQL_AUTH_VALID Function | function | [local](APEX_EXEC/IS_REMOTE_SQL_AUTH_VALID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_REMOTE_SQL_AUTH_VALID-Function.html) |
| NEXT_ARRAY_ROW Function | function | [local](APEX_EXEC/NEXT_ARRAY_ROW_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html) |
| NEXT_ROW Function | function | [local](APEX_EXEC/NEXT_ROW_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ROW-Function.html) |
| OPEN_ARRAY Procedure Signature 1 | procedure | [local](APEX_EXEC/OPEN_ARRAY_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html) |
| OPEN_ARRAY Procedure Signature 2 | procedure | [local](APEX_EXEC/OPEN_ARRAY_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-2.html) |
| OPEN_DUALITY_VIEW_DML_CONTEXT Function | function | [local](APEX_EXEC/OPEN_DUALITY_VIEW_DML_CONTEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT-Function.html) |
| OPEN_JSON_SOURCE_DML_CONTEXT Function | function | [local](APEX_EXEC/OPEN_JSON_SOURCE_DML_CONTEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT-Function.html) |
| OPEN_LOCAL_DML_CONTEXT Function | function | [local](APEX_EXEC/OPEN_LOCAL_DML_CONTEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_LOCAL_DML_CONTEXT-Function.html) |
| OPEN_QUERY_CONTEXT Function Signature 1 | function | [local](APEX_EXEC/OPEN_QUERY_CONTEXT_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_QUERY_CONTEXT-Function-1.html) |
| OPEN_QUERY_CONTEXT Function Signature 2 | function | [local](APEX_EXEC/OPEN_QUERY_CONTEXT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC-OPEN_QUERY_CONTEXT-Function-2.html) |
| OPEN_REMOTE_DML_CONTEXT Function | function | [local](APEX_EXEC/OPEN_REMOTE_DML_CONTEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_DML_CONTEXT-Function.html) |
| OPEN_REMOTE_SQL_QUERY Function | function | [local](APEX_EXEC/OPEN_REMOTE_SQL_QUERY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_SQL_QUERY-Function.html) |
| OPEN_REST_SOURCE_DML_CONTEXT Function | function | [local](APEX_EXEC/OPEN_REST_SOURCE_DML_CONTEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT-Function.html) |
| OPEN_REST_SOURCE_QUERY Function | function | [local](APEX_EXEC/OPEN_REST_SOURCE_QUERY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_QUERY-Function.html) |
| OPEN_WEB_SOURCE_DML_CONTEXT Function (Deprecated) | function | [local](APEX_EXEC/OPEN_WEB_SOURCE_DML_CONTEXT_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_DML_CONTEXT-Function.html) |
| OPEN_WEB_SOURCE_QUERY Function (Deprecated) | function | [local](APEX_EXEC/OPEN_WEB_SOURCE_QUERY_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_QUERY-Function.html) |
| PURGE_DUALITY_VIEW_CACHE Procedure | procedure | [local](APEX_EXEC/PURGE_DUALITY_VIEW_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_DUALITY_VIEW_CACHE-Procedure.html) |
| PURGE_JSON_SOURCE_CACHE Procedure | procedure | [local](APEX_EXEC/PURGE_JSON_SOURCE_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_JSON_SOURCE_CACHE-Procedure.html) |
| PURGE_REST_SOURCE_CACHE Procedure | procedure | [local](APEX_EXEC/PURGE_REST_SOURCE_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_REST_SOURCE_CACHE-procedure.html) |
| PURGE_WEB_SOURCE_CACHE Procedure (Deprecated) | procedure | [local](APEX_EXEC/PURGE_WEB_SOURCE_CACHE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_WEB_SOURCE_CACHE-Procedure.html) |
| SET_ARRAY_CURRENT_ROW Procedure | procedure | [local](APEX_EXEC/SET_ARRAY_CURRENT_ROW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_CURRENT_ROW-Procedure.html) |
| SET_ARRAY_ROW_VERSION_CHECKSUM Procedure | procedure | [local](APEX_EXEC/SET_ARRAY_ROW_VERSION_CHECKSUM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM-Procedure.html) |
| SET_CURRENT_ROW Procedure | procedure | [local](APEX_EXEC/SET_CURRENT_ROW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_CURRENT_ROW-Procedure.html) |
| SET_NULL Procedure | procedure | [local](APEX_EXEC/SET_NULL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_NULL-Procedure.html) |
| SET_ROW_VERSION_CHECKSUM Procedure | procedure | [local](APEX_EXEC/SET_ROW_VERSION_CHECKSUM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ROW_VERSION_CHECKSUM-Procedure.html) |
| SET_VALUE Procedure | procedure | [local](APEX_EXEC/SET_VALUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_VALUE-Procedure.html) |
| SET_VALUES Procedure | procedure | [local](APEX_EXEC/SET_VALUES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_VALUES-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
