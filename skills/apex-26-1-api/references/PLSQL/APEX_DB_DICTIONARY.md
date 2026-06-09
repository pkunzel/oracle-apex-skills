# APEX_DB_DICTIONARY

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html)

Status: curated first-pass reference.

## Purpose

`APEX_DB_DICTIONARY` exposes database object metadata in shapes that are convenient for APEX and LLM-assisted features. It can return table/view metadata as JSON, arrays, summaries, primary-key lists, or formatted Markdown/plain text.

## When To Use

Use this package when an APEX feature needs to inspect schema objects, generate human-readable table descriptions, feed metadata into AI prompts, or offer object/table pickers.

Do not use it as a substitute for runtime authorization. Filter object names and owners carefully before exposing dictionary information to users.

## API Surface

| Area | Members |
| --- | --- |
| Object metadata | `GET_METADATA`, `FORMAT_METADATA` |
| Table/view discovery | `GET_TABLES_JSON`, `GET_TABLES_ARRAY`, `GET_TABLES_SUMMARY`, `GET_TABLE_INFO`, `GET_TABLE_INFO_REGEX` |
| Key discovery | `GET_PRIMARY_KEY_COLUMNS` |
| Capability check | `IS_SUPPORTED` |

## Metadata-To-Markdown Example

Assuming table `ORDERS` exists in parsing schema `DEMO_APP`:

```sql
declare
    l_metadata json;
    l_markdown clob;
begin
    l_metadata := apex_db_dictionary.get_metadata(
        p_name        => 'ORDERS',
        p_schema      => 'DEMO_APP',
        p_object_type => 'TABLE',
        p_level       => 'TYPICAL');

    l_markdown := apex_db_dictionary.format_metadata(
        p_json                => l_metadata,
        p_include_constraints => true,
        p_include_indexes     => false,
        p_format              => apex_db_dictionary.c_markdown);

    :P10_TABLE_DESCRIPTION_MD := l_markdown;
end;
/
```

## Ajax Table Search Example

Assuming an Ajax Callback receives a user regex in `apex_application.g_x01`:

```sql
declare
    l_tables json;
begin
    l_tables := apex_db_dictionary.get_tables_json(
        p_regex               => apex_application.g_x01,
        p_owner               => sys_context('USERENV', 'CURRENT_SCHEMA'),
        p_object_type         => 'TABLE',
        p_include_comments    => true,
        p_include_annotations => true);

    htp.p(json_serialize(l_tables returning clob));
end;
/
```

## Notes

- `GET_METADATA` follows `DBMS_DEVELOPER.GET_METADATA` style parameters.
- Return type may depend on database release; check the member page when assigning to `JSON` versus `CLOB` in older environments.
- Treat object names as sensitive. Whitelist schemas and object types for user-facing tools.
- `FORMAT_METADATA` is especially useful before calling [APEX_AI](APEX_AI.md) because it produces prompt-friendly descriptions.

## Related APIs

- [APEX_AI](APEX_AI.md) for AI prompts over schema metadata.
- [APEX_EXEC](APEX_EXEC.md) for executing controlled local/remote queries.
- [APEX_JSON](APEX_JSON.md) for JSON response emission.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| GET_METADATA Function | function | [local](APEX_DB_DICTIONARY/GET_METADATA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_METADATA-Function.html) |
| GET_PRIMARY_KEY_COLUMNS Function | function | [local](APEX_DB_DICTIONARY/GET_PRIMARY_KEY_COLUMNS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_PRIMARY_KEY_COLUMNS-Function.html) |
| GET_TABLE_INFO Function Signature 1 | function | [local](APEX_DB_DICTIONARY/GET_TABLE_INFO_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO-Function-Signature-1.html) |
| GET_TABLE_INFO Function Signature 2 | function | [local](APEX_DB_DICTIONARY/GET_TABLE_INFO_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO-Function-Signature-2.html) |
| GET_TABLE_INFO_REGEX Function | function | [local](APEX_DB_DICTIONARY/GET_TABLE_INFO_REGEX_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO_REGEX-Function.html) |
| GET_TABLES_ARRAY Function | function | [local](APEX_DB_DICTIONARY/GET_TABLES_ARRAY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_ARRAY-Function.html) |
| GET_TABLES_JSON Function | function | [local](APEX_DB_DICTIONARY/GET_TABLES_JSON_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_JSON-Function.html) |
| GET_TABLES_SUMMARY Function | function | [local](APEX_DB_DICTIONARY/GET_TABLES_SUMMARY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_SUMMARY-Function.html) |
| FORMAT_METADATA Function Signature 1 | function | [local](APEX_DB_DICTIONARY/FORMAT_METADATA_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.FORMAT_METADATA-Function-Signature-1.html) |
| FORMAT_METADATA Function Signature 2 | function | [local](APEX_DB_DICTIONARY/FORMAT_METADATA_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.FORMAT_METADATA-Function-Signature-2.html) |
| IS_SUPPORTED Function | function | [local](APEX_DB_DICTIONARY/IS_SUPPORTED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.IS_SUPPORTED-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
