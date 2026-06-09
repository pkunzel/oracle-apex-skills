# APEX_DG_DATA_GEN

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DG_DATA_GEN.html)

Status: curated first-pass reference.

## Purpose

`APEX_DG_DATA_GEN` programmatically manages Data Generator blueprints and generates synthetic data from them. A blueprint contains target tables, columns, data sources, formulas, row counts, and output settings.

## When To Use

Use it to create reproducible demo/test data, export/import blueprints, generate SQL/CSV/JSON output, or load generated rows into an APEX collection or target table.

Avoid using it to create production data. Generated data may look plausible, but it should still be treated as synthetic test/demo data.

## API Surface

| Area | Members |
| --- | --- |
| Blueprint lifecycle | `ADD_BLUEPRINT`, `ADD_BLUEPRINT_FROM_FILE`, `ADD_BLUEPRINT_FROM_TABLES`, `UPDATE_BLUEPRINT`, `REMOVE_BLUEPRINT`, `IMPORT_BLUEPRINT`, `EXPORT_BLUEPRINT`, `VALIDATE_BLUEPRINT`, `RESEQUENCE_BLUEPRINT` |
| Table lifecycle | `ADD_TABLE`, `UPDATE_TABLE`, `REMOVE_TABLE`, `GET_BP_TABLE_ID` |
| Column lifecycle | `ADD_COLUMN`, `UPDATE_COLUMN`, `REMOVE_COLUMN` |
| Data sources | `ADD_DATA_SOURCE`, `UPDATE_DATA_SOURCE`, `REMOVE_DATA_SOURCE`, `GET_EXAMPLE`, `GET_WEIGHTED_INLINE_DATA` |
| Generation | `GENERATE_DATA`, `GENERATE_DATA_INTO_COLLECTION`, `PREVIEW_BLUEPRINT`, `STOP_DATA_GENERATION` |
| Settings | `VALIDATE_INSTANCE_SETTING`, `GET_BLUEPRINT_ID` |

## Blueprint Example

Assuming you want a small `ORDERS_DEMO` blueprint with one table and two columns:

```sql
declare
    l_blueprint_id number;
    l_table_id     number;
    l_column_id    number;
begin
    apex_dg_data_gen.add_blueprint(
        p_name           => 'ORDERS_DEMO',
        p_display_name   => 'Orders Demo',
        p_description    => 'Small synthetic order data set.',
        p_lang           => 'en',
        p_default_schema => sys_context('USERENV', 'CURRENT_SCHEMA'),
        p_blueprint_id   => l_blueprint_id);

    apex_dg_data_gen.add_table(
        p_blueprint  => 'ORDERS_DEMO',
        p_sequence   => 1,
        p_table_name => 'DEMO_ORDERS',
        p_rows       => 50,
        p_table_id   => l_table_id);

    apex_dg_data_gen.add_column(
        p_blueprint        => 'ORDERS_DEMO',
        p_sequence         => 1,
        p_table_name       => 'DEMO_ORDERS',
        p_column_name      => 'ORDER_ID',
        p_data_source_type => 'SEQUENCE',
        p_column_id        => l_column_id);
end;
/
```

## Generate File Output Example

```sql
declare
    l_output    blob;
    l_file_ext  varchar2(30);
    l_mime_type varchar2(255);
    l_errors    clob;
begin
    apex_dg_data_gen.generate_data(
        p_blueprint  => 'ORDERS_DEMO',
        p_format     => 'JSON',
        p_output     => l_output,
        p_file_ext   => l_file_ext,
        p_mime_type  => l_mime_type,
        p_errors     => l_errors);

    if l_errors is not null then
        raise_application_error(-20000, l_errors);
    end if;

    apex_http.download(
        p_blob         => l_output,
        p_filename     => 'orders-demo.' || l_file_ext,
        p_content_type => l_mime_type);

    apex_application.stop_apex_engine;
end;
/
```

## Collection Example

Assuming an APEX page needs a preview collection named by the package convention `APEX$DG$ORDERS_DEMO`:

```sql
declare
    l_errors clob;
begin
    apex_dg_data_gen.generate_data_into_collection(
        p_blueprint   => 'ORDERS_DEMO',
        p_format      => 'JSON',
        p_row_scaling => 25,
        p_errors      => l_errors);

    if l_errors is not null then
        apex_error.add_error(
            p_message          => l_errors,
            p_display_location => apex_error.c_inline_in_notification);
    end if;
end;
/
```

## Notes

- Names and blueprint references are often case-sensitive after preserve-case choices; keep naming consistent.
- `GENERATE_DATA` can produce SQL INSERT, CSV, JSON, INSERT INTO, or FAST INSERT INTO output.
- Validate blueprints before long-running data generation.
- Generated file output can be downloaded with [APEX_HTTP](APEX_HTTP.md) or staged in a table.

## Related APIs

- [APEX_COLLECTION](APEX_COLLECTION.md) for generated preview rows.
- [APEX_HTTP](APEX_HTTP.md) for downloads.
- [APEX_DATA_EXPORT](APEX_DATA_EXPORT.md) for exporting app data in report formats.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ADD_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/ADD_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_BLUEPRINT-Procedure.html) |
| ADD_BLUEPRINT_FROM_FILE Procedure | procedure | [local](APEX_DG_DATA_GEN/ADD_BLUEPRINT_FROM_FILE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_BLUEPRINT_FROM_FILE-Procedure.html) |
| ADD_BLUEPRINT_FROM_TABLES Procedure | procedure | [local](APEX_DG_DATA_GEN/ADD_BLUEPRINT_FROM_TABLES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_BLUEPRINT_FROM_TABLES-Procedure.html) |
| ADD_COLUMN Procedure | procedure | [local](APEX_DG_DATA_GEN/ADD_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DG_DATA_GEN.ADD_COLUMN-Procedure.html) |
| ADD_DATA_SOURCE Procedure | procedure | [local](APEX_DG_DATA_GEN/ADD_DATA_SOURCE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_DATA_SOURCE-Procedure.html) |
| ADD_TABLE Procedure | procedure | [local](APEX_DG_DATA_GEN/ADD_TABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TABLE-Procedure.html) |
| EXPORT_BLUEPRINT Function | function | [local](APEX_DG_DATA_GEN/EXPORT_BLUEPRINT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_BLUEPRINT-Function.html) |
| GENERATE_DATA Procedure Signature 1 | procedure | [local](APEX_DG_DATA_GEN/GENERATE_DATA_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_DATA-Procedure-Signature-1.html) |
| GENERATE_DATA Procedure Signature 2 | procedure | [local](APEX_DG_DATA_GEN/GENERATE_DATA_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_DATA-Procedure-Signature-2.html) |
| GENERATE_DATA_INTO_COLLECTION Procedure | procedure | [local](APEX_DG_DATA_GEN/GENERATE_DATA_INTO_COLLECTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_DATA_INTO_COLLECTION-Procedure.html) |
| GET_BLUEPRINT_ID Function | function | [local](APEX_DG_DATA_GEN/GET_BLUEPRINT_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BLUEPRINT_ID-Function.html) |
| GET_BP_TABLE_ID Function | function | [local](APEX_DG_DATA_GEN/GET_BP_TABLE_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BP_TABLE_ID-Function.html) |
| GET_EXAMPLE Function | function | [local](APEX_DG_DATA_GEN/GET_EXAMPLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EXAMPLE-Function.html) |
| GET_WEIGHTED_INLINE_DATA Function | function | [local](APEX_DG_DATA_GEN/GET_WEIGHTED_INLINE_DATA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WEIGHTED_INLINE_DATA-Function.html) |
| IMPORT_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/IMPORT_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IMPORT_BLUEPRINT-Procedure.html) |
| PREVIEW_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/PREVIEW_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREVIEW_BLUEPRINT-Procedure.html) |
| REMOVE_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/REMOVE_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_BLUEPRINT-Procedure.html) |
| REMOVE_COLUMN Procedure | procedure | [local](APEX_DG_DATA_GEN/REMOVE_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_COLUMN-Procedure.html) |
| REMOVE_DATA_SOURCE Procedure | procedure | [local](APEX_DG_DATA_GEN/REMOVE_DATA_SOURCE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DATA_SOURCE-Procedure.html) |
| REMOVE_TABLE Procedure | procedure | [local](APEX_DG_DATA_GEN/REMOVE_TABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_TABLE-Procedure.html) |
| RESEQUENCE_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/RESEQUENCE_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESEQUENCE_BLUEPRINT-Procedure.html) |
| STOP_DATA_GENERATION Procedure | procedure | [local](APEX_DG_DATA_GEN/STOP_DATA_GENERATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STOP_DATA_GENERATION-Procedure.html) |
| UPDATE_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/UPDATE_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_BLUEPRINT-Procedure.html) |
| UPDATE_COLUMN Procedure | procedure | [local](APEX_DG_DATA_GEN/UPDATE_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_COLUMN-Procedure.html) |
| UPDATE_DATA_SOURCE Procedure | procedure | [local](APEX_DG_DATA_GEN/UPDATE_DATA_SOURCE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_DATA_SOURCE-Procedure.html) |
| UPDATE_TABLE Procedure | procedure | [local](APEX_DG_DATA_GEN/UPDATE_TABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_TABLE-Procedure.html) |
| VALIDATE_BLUEPRINT Procedure | procedure | [local](APEX_DG_DATA_GEN/VALIDATE_BLUEPRINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE_BLUEPRINT-Procedure.html) |
| VALIDATE_INSTANCE_SETTING Procedure | procedure | [local](APEX_DG_DATA_GEN/VALIDATE_INSTANCE_SETTING_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE_INSTANCE_SETTING-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
