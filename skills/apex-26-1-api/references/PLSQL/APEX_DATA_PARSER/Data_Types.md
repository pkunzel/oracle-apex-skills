# APEX_DATA_PARSER.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

The APEX_DATA_PARSER package uses the following data types.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

The central profile record describes how `PARSE` should interpret a file.

```sql
type t_file_profile is record(
    file_type             t_file_type,
    file_charset          varchar2(128),
    row_selector          varchar2(32767),
    is_single_row         boolean,
    first_row_headings    boolean,
    xlsx_worksheet        varchar2(128),
    xml_namespaces        varchar2(4000),
    csv_delimiter         varchar2(4),
    csv_enclosed          varchar2(4),
    null_if               varchar2(20),
    force_trim_whitespace boolean,
    skip_rows             pls_integer,
    file_columns          t_file_columns
);
```

Use `DISCOVER` or `GET_FILE_PROFILE` to obtain JSON profile text, and `JSON_TO_PROFILE` when PL/SQL code needs the structured record.
