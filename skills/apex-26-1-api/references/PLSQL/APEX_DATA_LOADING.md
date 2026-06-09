# APEX_DATA_LOADING

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.html)

Status: curated first-pass reference.

## Purpose

`APEX_DATA_LOADING` executes declarative Data Loading definitions from PL/SQL. The definition owns the target table or process, column mapping, transformation behavior, and error handling; the package supplies the file content and receives a load result.

Use `APEX_DATA_LOADING` when an APEX app already has a Data Loading definition with a Static ID. Use `APEX_DATA_PARSER` when you need custom preview, validation, transformation, or staging logic.

## When To Use

Use `APEX_DATA_LOADING` when:

- A page process should run a configured data load after a user uploads a file.
- A shared process or background job should reuse a Data Loading definition.
- You want APEX builder metadata to control mappings and validation instead of hand-written parsing code.
- You need the Data Loading definition's file profile.

Avoid hard-coding business imports directly in this package call. Keep authorization, file validation, and post-load business checks explicit.

## API Surface

| Need | Members |
| --- | --- |
| Execute a BLOB file load | `LOAD_DATA` Signature 1 |
| Execute a CLOB data load | `LOAD_DATA` Signature 2 |
| Inspect definition profile | `GET_FILE_PROFILE` |
| Understand result record | `Data Types` |

## Load An Uploaded File

Assuming a File Browse item `P10_FILE` and a Data Loading definition with Static ID `orders_load`:

```sql
declare
    l_blob   blob;
    l_result apex_data_loading.t_data_load_result;
begin
    select blob_content
      into l_blob
      from apex_application_temp_files
     where name = :P10_FILE;

    l_result := apex_data_loading.load_data(
        p_static_id    => 'orders_load',
        p_data_to_load => l_blob);

    apex_debug.info('Data loading definition orders_load completed.');
end;
/
```

Open the local `Data Types` member page and the Oracle source if code needs exact fields from `T_DATA_LOAD_RESULT`.

## Load CLOB Content

Assuming a Data Loading definition with Static ID `order_adjustments_csv` accepts CSV text:

```sql
declare
    l_csv    clob;
    l_result apex_data_loading.t_data_load_result;
begin
    l_csv := 'ORDER_ID,STATUS' || chr(10) ||
             '1001,REVIEW'    || chr(10) ||
             '1002,APPROVED';

    l_result := apex_data_loading.load_data(
        p_static_id    => 'order_adjustments_csv',
        p_data_to_load => l_csv);

    apex_debug.info('CLOB data load completed.');
end;
/
```

Use the CLOB signature for generated content or text payloads. Use the BLOB signature for uploaded files and binary workbook content.

## Inspect The File Profile

```sql
declare
    l_profile clob;
begin
    l_profile := apex_data_loading.get_file_profile(
        p_static_id => 'orders_load');

    apex_debug.info('Data loading profile length: %s', dbms_lob.getlength(l_profile));
end;
/
```

The profile is useful when diagnosing mismatches between an uploaded file and the declarative load definition.

## Notes

- `P_STATIC_ID` is the Data Loading definition Static ID, not a page item or region Static ID.
- `P_APPLICATION_ID` defaults to the current application.
- Validate upload size, extension, and authorization before calling `LOAD_DATA`.
- Keep commit strategy consistent with the surrounding page process. Do not hide partial-load behavior from users.
- For custom row-by-row validation, use `APEX_DATA_PARSER` first and call business APIs explicitly.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Data Types | data types | [local](APEX_DATA_LOADING/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING-Data-Types.html) |
| GET_FILE_PROFILE Function | function | [local](APEX_DATA_LOADING/GET_FILE_PROFILE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.GET_FILE_PROFILE-Function.html) |
| LOAD_DATA Function Signature 1 | function | [local](APEX_DATA_LOADING/LOAD_DATA_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_DATA-Function-Signature-1.html) |
| LOAD_DATA Function Signature 2 | function | [local](APEX_DATA_LOADING/LOAD_DATA_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_DATA-Function-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
