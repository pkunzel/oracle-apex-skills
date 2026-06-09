# APEX_DATA_PARSER

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html)

Status: curated first-pass reference.

## Purpose

`APEX_DATA_PARSER` parses uploaded or stored files into rows. It supports CSV, XLSX, XML, and JSON input and returns the generic `APEX_T_PARSER_TABLE` row shape with columns such as `LINE_NUMBER`, `COL001`, `COL002`, and so on.

Use this package for preview, validation, staging, or custom import flows. Use `APEX_DATA_LOADING` when you want to execute a declarative APEX Data Loading definition.

## When To Use

Use `APEX_DATA_PARSER` when:

- A file upload page needs a preview grid before committing data.
- You need custom validation or transformation before insert/update.
- The file type, worksheet, delimiter, row selector, or profile must be controlled in PL/SQL.
- You want to discover a file profile once, then reuse it for faster parsing.
- JSON or XML needs to be flattened with a row selector.

Avoid parsing very large files synchronously in an interactive page request unless the UX accounts for elapsed time and memory use. Consider an automation or background process for heavier loads.

## API Surface

| Need | Members |
| --- | --- |
| Parse rows | `PARSE` |
| Discover/reuse profile | `DISCOVER`, `GET_FILE_PROFILE`, `JSON_TO_PROFILE`, `GET_COLUMNS` |
| File type checks | `ASSERT_FILE_TYPE`, `GET_FILE_TYPE` |
| XLSX sheet discovery | `GET_XLSX_WORKSHEETS` |
| Parser behavior flags | `SET_PARSER_FLAGS` |
| Constants and record types | `Global Constants`, `Data Types` |

## Parse An Uploaded File

Assuming a File Browse item `P10_FILE` stores its upload in `APEX_APPLICATION_TEMP_FILES`:

```sql
begin
    for r in (
        select p.line_number,
               p.col001 as sku,
               p.col002 as quantity,
               p.col003 as unit_price
          from apex_application_temp_files f,
               table(
                   apex_data_parser.parse(
                       p_content           => f.blob_content,
                       p_file_name         => f.filename,
                       p_skip_rows         => 1,
                       p_detect_data_types => 'Y')) p
         where f.name = :P10_FILE
    ) loop
        apex_debug.info(
            'Upload row %s: sku=%s quantity=%s',
            r.line_number,
            r.sku,
            r.quantity);
    end loop;
end;
/
```

`P_SKIP_ROWS` is commonly used to skip a header row. For preview-only UI, combine `P_RETURN_ROWS` or a SQL `FETCH FIRST` clause with a clear user message that only a sample is shown.

## Discover And Reuse A File Profile

Assuming table `upload_stage(sku, quantity, unit_price, source_line)` and file item `P10_FILE`:

```sql
declare
    l_blob     blob;
    l_filename varchar2(4000);
    l_profile  clob;
begin
    select blob_content, filename
      into l_blob, l_filename
      from apex_application_temp_files
     where name = :P10_FILE;

    l_profile := apex_data_parser.discover(
        p_content   => l_blob,
        p_file_name => l_filename,
        p_max_rows  => 500);

    insert into upload_stage(sku, quantity, unit_price, source_line)
    select p.col001,
           to_number(p.col002),
           to_number(p.col003),
           p.line_number
      from table(
               apex_data_parser.parse(
                   p_content      => l_blob,
                   p_file_name    => l_filename,
                   p_file_profile => l_profile,
                   p_skip_rows    => 1)) p
     where p.col001 is not null;
end;
/
```

The profile is JSON. Store it only when it is useful for repeat parsing or troubleshooting; it can reveal column names and data characteristics.

## Parse JSON With A Row Selector

Assuming `l_payload` contains JSON shaped like `{"items":[{"sku":"A10","qty":2}]}`:

```sql
declare
    l_payload blob;
begin
    for r in (
        select p.line_number,
               p.col001 as sku,
               p.col002 as qty
          from table(
                   apex_data_parser.parse(
                       p_content      => l_payload,
                       p_file_name    => 'items.json',
                       p_row_selector => 'items')) p
    ) loop
        apex_debug.info('JSON item %s: %s', r.sku, r.qty);
    end loop;
end;
/
```

Use the generated `PARSE` member page for exact JSON and XML row selector behavior.

## Notes

- `PARSE` and `DISCOVER` expect file content as `BLOB`.
- Pass either `P_FILE_NAME`, `P_FILE_TYPE`, or `P_FILE_PROFILE` so APEX can determine how to parse the content.
- `P_DETECT_DATA_TYPES => 'N'` keeps parsed columns as text, which is often better for validation-first flows.
- Validate file size, extension, MIME type, and user authorization before parsing.
- For a production import, stage parsed text first, validate all rows, then commit business tables in a separate step.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Global Constants | constants | [local](APEX_DATA_PARSER/Global_Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.Global-Constants.html) |
| Data Types | data types | [local](APEX_DATA_PARSER/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.Data-Types.html) |
| ASSERT_FILE_TYPE Function | function | [local](APEX_DATA_PARSER/ASSERT_FILE_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.ASSERT_FILE_TYPE-Function.html) |
| DISCOVER Function | function | [local](APEX_DATA_PARSER/DISCOVER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.DISCOVER-Function.html) |
| GET_COLUMNS Function | function | [local](APEX_DATA_PARSER/GET_COLUMNS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_COLUMNS-Function.html) |
| GET_FILE_PROFILE Function | function | [local](APEX_DATA_PARSER/GET_FILE_PROFILE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_FILE_PROFILE-Function.html) |
| GET_FILE_TYPE Function | function | [local](APEX_DATA_PARSER/GET_FILE_TYPE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_FILE_TYPE-Function.html) |
| GET_XLSX_WORKSHEETS Function | function | [local](APEX_DATA_PARSER/GET_XLSX_WORKSHEETS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_XLSX_WORKSHEETS-Function.html) |
| JSON_TO_PROFILE Function | function | [local](APEX_DATA_PARSER/JSON_TO_PROFILE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.JSON_TO_PROFILE-Function.html) |
| PARSE Function | function | [local](APEX_DATA_PARSER/PARSE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.PARSE-Function.html) |
| SET_PARSER_FLAGS Procedure | procedure | [local](APEX_DATA_PARSER/SET_PARSER_FLAGS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.SET_PARSER_FLAGS-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
