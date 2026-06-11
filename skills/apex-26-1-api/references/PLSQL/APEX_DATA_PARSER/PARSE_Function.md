# APEX_DATA_PARSER.PARSE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.PARSE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function enables you to parse XML, XLSX, CSV, or JSON files and returns a generic table of the following structure:

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.PARSE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.PARSE (
    p_content                      IN BLOB,
    p_file_name                    IN VARCHAR2     DEFAULT NULL,
    p_file_type                    in t_file_type  DEFAULT NULL,
    p_file_profile                 IN CLOB         DEFAULT NULL,
    --
    p_detect_data_types            IN VARCHAR2     DEFAULT 'Y',
    p_decimal_char                 IN VARCHAR2     DEFAULT NULL,
    --
    p_xlsx_sheet_name              IN VARCHAR2     DEFAULT NULL,
    --
    p_row_selector                 IN VARCHAR2     DEFAULT NULL,
    --
    p_csv_row_delimiter            IN VARCHAR2     DEFAULT LF,
    p_csv_col_delimiter            IN VARCHAR2     DEFAULT NULL,
    p_csv_enclosed                 IN VARCHAR2     DEFAULT '"',
    --
    p_skip_rows                    IN PLS_INTEGER  DEFAULT NULL,
    p_add_headers_row              IN VARCHAR2     DEFAULT 'N',
    --
    p_nullif                       IN VARCHAR2     DEFAULT NULL,
    p_force_trim_whitespace        IN VARCHAR2     DEFAULT 'N',
    --
    p_file_charset                 IN VARCHAR2     DEFAULT 'AL32UTF8',
    p_max_rows                     IN NUMBER       DEFAULT NULL,
    p_return_rows                  IN NUMBER       DEFAULT NULL,
    --
    p_store_profile_to_collection  IN VARCHAR2     DEFAULT NULL,
    p_xml_namespaces               IN VARCHAR2     DEFAULT NULL,
    --
    p_fix_excel_precision          IN VARCHAR2     DEFAULT 'N' )
    RETURN apex_t_parser_table pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_content` | The file content to be parsed as a BLOB. |
| `p_file_name` | The name of the file; only used to derive the file type. Either p_file_name , p_file_type or p_file_profile must be passed in. |
| `p_file_type` | The type of the file to be parsed. Use this to explicitly pass the file type in. Either p_file_name , p_file_type or p_file_profile must be passed in. |
| `p_file_profile` | File profile to be used for parsing. The file profile might have been computed in a previous parse() or discover() invocation. If passed in again, the function skips some profile detection logic and use the passed in profile in order to improve performance. |
| `p_detect_data_types` | Whether to detect data types ( NUMBER, DATE, TIMESTAMP ) during parsing. If Y (default), the function computes the file profile and also add data type information to it. If N , all columns are VARCHAR2 . When no data types are detected, all columns are reported as VARCHAR2(4000) . |
| `p_decimal_char` | Use this decimal character when trying to detect NUMBER data types. If not specified,the procedure will auto-detect the decimal character. |
| `p_xlsx_sheet_name` | For XLSX workbooks. The name of the worksheet to parse. If omitted, the function uses the first worksheet found. |
| `p_row_selector` | For JSON and XML files. Pointer to the array / list of rows within the JSON or XML file. If omitted, the function will: For XML files: Use /*/* (first tag under the root tag) as the row selector. For JSON files: Look for a JSON array and use the first array found. |
| `p_csv_row_delimiter` | Override the default row delimiter for CSV parsing. Limited to one character and defaults to Linefeed (LF). Note that the Linefeed row delimiter also handles "Carriage Return/Linefeed" (CRLF). |
| `p_csv_col_delimiter` | Use a specific CSV column delimiter. If omitted, the function will detect the column delimiter based on the first row contents. |
| `p_csv_enclosed` | Override the default enclosure character for CSV parsing. |
| `p_skip_rows` | Skip the first N rows when parsing. |
| `p_add_headers_row` | For XML, JSON: Emit the column headers (tag, attr names) as the first row. |
| `p_nullif` | Similar to SQL NULLIF function. If the column has this value, return NULL . |
| `p_force_trim_whitespace` | Whether to force trim enquoted whitespace from parsed values. |
| `p_file_charset` | Encoding of the file to parse. Defaults to AL32UTF8 if omitted or NULL is explicitly passed in. |
| `p_max_rows` | Stop parsing after p_max_rows have been returned. |
| `p_return_rows` | Amount of rows to return. This is useful when the parser parses more rows (for data type detection) than it is supposed to return. When the specified amount of rows have been emitted, the function will continue parsing (and refining the detected data types) until p_max_rows has been reached, or until the rownum < x clause of the SQL query kicks in and stops execution. |
| `p_store_profile_to_collection` | Store the File profile which has been computed during parse into a collection. The collection will be cleared, if it exists. Only be used for computed profiles. |
| `p_xml_namespaces` | XML namespaces to use when parsing XML files. |
| `p_fix_excel_precision` | Whether to round numbers in XLSX files to 15 significant digits. This is useful for XLSX files generated by Microsoft Excel. Excel stores numeric values as floating point numbers with a maximum of 15 significant digits. For calculation results, this can lead to rounding issues, which are fixed using this parameter. See also: Floating-point arithmetic may give inaccurate results in Excel at Microsoft 365 . |

## Returns

Returns rows of the apex_t_parser_row type.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_content blob;
begin
    select blob_content
      into l_content
      from apex_application_temp_files
     where name = :P10_UPLOAD;

    for r in (
        select line_number, col001 order_id, col002 customer_name, col003 order_total
          from table(apex_data_parser.parse(
              p_content                => l_content,
              p_file_name              => 'orders.csv',
              p_csv_col_delimiter      => ',',
              p_skip_rows              => 1,
              p_detect_data_types      => 'Y',
              p_max_rows               => 100,
              p_store_profile_to_collection => 'ORDER_IMPORT_PROFILE'))
    ) loop
        insert into order_import_stage (order_id, customer_name, order_total)
        values (r.order_id, r.customer_name, to_number(r.order_total));
    end loop;
end;
/
```

