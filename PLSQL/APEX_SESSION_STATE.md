# APEX_SESSION_STATE

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html)

Status: curated first-pass reference.

## Purpose

`APEX_SESSION_STATE` reads and writes APEX item session state with typed getters and overloaded setters. It is the modern, explicit API for PL/SQL code that needs page item values.

Use it instead of older shorthand where clarity matters. `V('ITEM')` maps to VARCHAR2-style access, but `APEX_SESSION_STATE` lets code express NUMBER, BOOLEAN, CLOB, TIMESTAMP, and generic `T_VALUE` intent.

## When To Use

Use `APEX_SESSION_STATE` when:

- A page process needs a typed page item value.
- A package called from APEX should not depend on bind-variable syntax.
- Ajax or background code needs to set item state before branching or rendering.
- A CLOB item should be read as CLOB rather than raising a VARCHAR2 conversion exception.
- Tests or scripts create an APEX session with `APEX_SESSION` and need to seed item values.

Avoid treating session state as authorization. Always check privileges before using session values to query or mutate data.

## API Surface

| Need | Members |
| --- | --- |
| Generic item value | `GET_VALUE`, `SET_VALUE` with `T_VALUE` |
| Text value | `GET_VARCHAR2`, `SET_VALUE` with `VARCHAR2` |
| Numeric value | `GET_NUMBER` |
| Boolean value | `GET_BOOLEAN`, `SET_VALUE` with `BOOLEAN` |
| Large text | `GET_CLOB`, `SET_VALUE` with `CLOB` |
| Time values | `GET_TIMESTAMP` |

## Typed Read Pattern

Assuming page 10 has items `P10_TASK_ID`, `P10_INCLUDE_DONE`, and `P10_NOTE`:

```sql
declare
    l_task_id      number;
    l_include_done boolean;
    l_note         clob;
begin
    l_task_id      := apex_session_state.get_number('P10_TASK_ID');
    l_include_done := apex_session_state.get_boolean('P10_INCLUDE_DONE');
    l_note         := apex_session_state.get_clob('P10_NOTE');

    apex_debug.info('Task %s include done flag read from session state.', l_task_id);
end;
/
```

`GET_NUMBER` uses the item's format mask for conversion. Use `GET_CLOB` for CLOB-backed items; `GET_VARCHAR2` raises for CLOB values.

## Set State Inside A Page Process

```sql
begin
    apex_session_state.set_value(
        p_item   => 'P10_STATUS',
        p_value  => 'READY',
        p_commit => false);

    apex_session_state.set_value(
        p_item   => 'P10_LAST_CHECKED_ON',
        p_value  => to_char(systimestamp, 'YYYY-MM-DD"T"HH24:MI:SS.FF3'),
        p_commit => false);
end;
/
```

Use `P_COMMIT => FALSE` inside page processing when the surrounding request should control commit timing.

## Seed State In A Scripted Session

Assuming this runs in SQLcl or SQL Developer against an application where page 10 exists:

```sql
begin
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 10,
        p_username => 'PKUNZEL');

    apex_session_state.set_value('P10_TASK_ID', '1001');
    apex_session_state.set_value('P10_INCLUDE_DONE', true);

    apex_debug.info(
        'Seeded task %s',
        apex_session_state.get_varchar2('P10_TASK_ID'));

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

## Notes

- Item names are strings such as `P10_STATUS`; keep them centralized when used from shared packages.
- `SET_VALUE` can commit by default. Choose `P_COMMIT` deliberately.
- Session state can be stale if the browser has changed an item value but not submitted or sent it with Ajax.
- For browser-side values, use `apex.item` and submit/send the item before PL/SQL reads it.
- Use authorization checks before acting on IDs or flags stored in session state.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Global Constants | constants | [local](APEX_SESSION_STATE/Global_Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE-Global-Constants.html) |
| Data Types | data types | [local](APEX_SESSION_STATE/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE-Data-Types.html) |
| GET_BOOLEAN Function | function | [local](APEX_SESSION_STATE/GET_BOOLEAN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_BOOLEAN-Function.html) |
| GET_CLOB Function | function | [local](APEX_SESSION_STATE/GET_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_CLOB-Function.html) |
| GET_NUMBER Function | function | [local](APEX_SESSION_STATE/GET_NUMBER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_NUMBER-Function.html) |
| GET_TIMESTAMP Function | function | [local](APEX_SESSION_STATE/GET_TIMESTAMP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_TIMESTAMP-Function.html) |
| GET_VALUE Function | function | [local](APEX_SESSION_STATE/GET_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_VALUE-Function.html) |
| GET_VARCHAR2 Function | function | [local](APEX_SESSION_STATE/GET_VARCHAR2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_VARCHAR2-Function.html) |
| SET_VALUE Procedure Signature 1 | procedure | [local](APEX_SESSION_STATE/SET_VALUE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-1.html) |
| SET_VALUE Procedure Signature 2 | procedure | [local](APEX_SESSION_STATE/SET_VALUE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-2.html) |
| SET_VALUE Procedure Signature 3 | procedure | [local](APEX_SESSION_STATE/SET_VALUE_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-3.html) |
| SET_VALUE Procedure Signature 4 | procedure | [local](APEX_SESSION_STATE/SET_VALUE_Procedure_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-4.html) |

<!-- END GENERATED MEMBER LINKS -->
