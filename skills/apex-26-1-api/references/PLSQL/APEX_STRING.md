# APEX_STRING

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html)

Status: curated first-pass reference.

## Purpose

`APEX_STRING` provides string, array, CLOB, format, regex, and property-list helpers used throughout APEX PL/SQL code. It is especially useful for converting delimited strings to APEX arrays, joining arrays, chunking large CLOBs, and building small property-list structures.

Use this package instead of deprecated `APEX_UTIL.STRING_TO_TABLE` and `APEX_UTIL.TABLE_TO_STRING`.

## Common Member Groups

| Need | Members |
| --- | --- |
| Split/join | `SPLIT`, `SPLIT_NUMBERS`, `SPLIT_CLOBS`, `JOIN`, `JOIN_CLOB`, `JOIN_CLOBS` |
| Convert tables | `STRING_TO_TABLE`, `TABLE_TO_STRING`, `TABLE_TO_CLOB` |
| Build arrays | `PUSH` overloads |
| Search/filter | `GREP`, `INDEX_OF`, `GET_SEARCHABLE_PHRASES` |
| Formatting | `FORMAT`, `GET_INITIALS` |
| CLOB chunking | `NEXT_CHUNK` |
| Property lists | `PLIST_*`, `PLIST_TO_JSON_CLOB` |
| Randomize | `SHUFFLE` |

## Split Values

Split a colon-delimited APEX item:

```sql
declare
    l_values apex_t_varchar2;
begin
    l_values := apex_string.split(
        p_str => :P10_SELECTED_IDS,
        p_sep => ':');

    for i in 1 .. l_values.count loop
        apex_debug.info('Selected: %s', l_values(i));
    end loop;
end;
/
```

Split numbers for DML:

```sql
declare
    l_ids apex_t_number;
begin
    l_ids := apex_string.split_numbers(
        p_str => :P10_SELECTED_IDS,
        p_sep => ':');

    forall i in 1 .. l_ids.count
        update tasks
           set status = 'DONE'
         where task_id = l_ids(i);
end;
/
```

## Join Values

```sql
declare
    l_names apex_t_varchar2 := apex_t_varchar2('Ada', 'Grace', 'Linus');
    l_text  varchar2(4000);
begin
    l_text := apex_string.join(
        p_table => l_names,
        p_sep   => ', ');
end;
/
```

Use `JOIN_CLOB` or `JOIN_CLOBS` when strings can exceed `VARCHAR2` limits.

## Format Text

```sql
declare
    l_message varchar2(4000);
begin
    l_message := apex_string.format(
        p_message => 'Order %0 is %1.',
        p0        => :P10_ORDER_ID,
        p1        => :P10_STATUS);
end;
/
```

Use formatting helpers for readable messages, but do not treat them as SQL bind substitution.

## Property List Pattern

Property lists are useful for small structured maps:

```sql
declare
    l_plist apex_t_varchar2;
    l_json  clob;
begin
    l_plist := apex_string.plist_put(l_plist, 'status', 'open');
    l_plist := apex_string.plist_put(l_plist, 'priority', 'high');

    l_json := apex_string.plist_to_json_clob(l_plist);
end;
/
```

Use JSON object types for complex nested structures.

## CLOB Chunking Pattern

Assuming `l_large_text` is a CLOB:

```sql
declare
    l_offset pls_integer := 1;
    l_chunk  varchar2(32767);
begin
    while apex_string.next_chunk(
              p_str    => l_large_text,
              p_chunk  => l_chunk,
              p_offset => l_offset,
              p_amount => 32767)
    loop
        -- Process l_chunk here.
        null;
    end loop;
end;
/
```

`NEXT_CHUNK` returns a Boolean and advances the offset while populating the OUT chunk parameter.

## Safety Guidance

- Prefer `APEX_STRING` over deprecated split/join helpers in `APEX_UTIL`.
- Validate split values before using them in DML.
- Do not use string formatting as a substitute for SQL bind variables.
- Use CLOB helpers when output might exceed `VARCHAR2` limits.
- Keep separators explicit for multi-value APEX items.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| FORMAT Function | function | [local](APEX_STRING/FORMAT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FORMAT-Function.html) |
| GET_INITIALS Function | function | [local](APEX_STRING/GET_INITIALS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INITIALS-Function.html) |
| GET_SEARCHABLE_PHRASES Function | function | [local](APEX_STRING/GET_SEARCHABLE_PHRASES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SEARCHABLE_PHRASES-Function.html) |
| GREP Function Signature 1 | function | [local](APEX_STRING/GREP_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-1.html) |
| GREP Function Signature 2 | function | [local](APEX_STRING/GREP_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-2.html) |
| GREP Function Signature 3 | function | [local](APEX_STRING/GREP_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-3.html) |
| INDEX_OF Function Signature 1 | function | [local](APEX_STRING/INDEX_OF_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INDEX_OF-Function-Signature-1.html) |
| INDEX_OF Function Signature 2 | function | [local](APEX_STRING/INDEX_OF_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INDEX_OF-Function-Signature-2.html) |
| JOIN_CLOB Function | function | [local](APEX_STRING/JOIN_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN_CLOB-Function.html) |
| JOIN_CLOBS Function | function | [local](APEX_STRING/JOIN_CLOBS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN_CLOBS-Function.html) |
| JOIN Function Signature 1 | function | [local](APEX_STRING/JOIN_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN-Function-Signature-1.html) |
| JOIN Function Signature 2 | function | [local](APEX_STRING/JOIN_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN-Function-Signature-2.html) |
| NEXT_CHUNK Function | function | [local](APEX_STRING/NEXT_CHUNK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/NEXT_CHUNK-Function.html) |
| PLIST_DELETE Procedure | procedure | [local](APEX_STRING/PLIST_DELETE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_DELETE-Procedure.html) |
| PLIST_EXISTS Function | function | [local](APEX_STRING/PLIST_EXISTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.PLIST_EXISTS-Function.html) |
| PLIST_GET Function | function | [local](APEX_STRING/PLIST_GET_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_GET-Function.html) |
| PLIST_GET_KEY Function | function | [local](APEX_STRING/PLIST_GET_KEY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.PLIST_GET_KEY-Function.html) |
| PLIST_PUSH Procedure | procedure | [local](APEX_STRING/PLIST_PUSH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_PUSH-Procedure.html) |
| PLIST_PUT Function | function | [local](APEX_STRING/PLIST_PUT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_PUT-Function.html) |
| PLIST_TO_JSON_CLOB Function | function | [local](APEX_STRING/PLIST_TO_JSON_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_TO_JSON_CLOB-Function.html) |
| PUSH Procedure Signature 1 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-1.html) |
| PUSH Procedure Signature 2 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-2.html) |
| PUSH Procedure Signature 3 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-3.html) |
| PUSH Procedure Signature 4 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-4.html) |
| PUSH Procedure Signature 5 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_5.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-5.html) |
| PUSH Procedure Signature 6 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_6.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-6.html) |
| PUSH Procedure Signature 7 | procedure | [local](APEX_STRING/PUSH_Procedure_Signature_7.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-7.html) |
| SHUFFLE Function | function | [local](APEX_STRING/SHUFFLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHUFFLE-Function.html) |
| SHUFFLE Procedure | procedure | [local](APEX_STRING/SHUFFLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHUFFLE-Procedure.html) |
| SPLIT Function Signature 1 | function | [local](APEX_STRING/SPLIT_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT-Function-Signature-1.html) |
| SPLIT Function Signature 2 | function | [local](APEX_STRING/SPLIT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT-Function-Signature-2.html) |
| SPLIT_CLOBS Function | function | [local](APEX_STRING/SPLIT_CLOBS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_CLOBS-Function.html) |
| SPLIT_NUMBERS Function | function | [local](APEX_STRING/SPLIT_NUMBERS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_NUMBERS-Function.html) |
| STRING_TO_TABLE Function | function | [local](APEX_STRING/STRING_TO_TABLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRING_TO_TABLE-1-Function.html) |
| TABLE_TO_CLOB Function | function | [local](APEX_STRING/TABLE_TO_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_CLOB-Function.html) |
| TABLE_TO_STRING Function | function | [local](APEX_STRING/TABLE_TO_STRING_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_STRING-1-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
