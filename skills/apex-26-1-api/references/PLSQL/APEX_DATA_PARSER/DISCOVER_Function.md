# APEX_DATA_PARSER.DISCOVER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.DISCOVER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This is a function to discover the column profile of a file. This function calls parse() and then returns the generated file profile. This function is a shortcut which can be used instead of first calling parse() and then get_file_profile() .

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.DISCOVER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.DISCOVER (
    p_content                   IN BLOB,
    p_file_name                 IN VARCHAR2,
    --
    p_decimal_char              IN VARCHAR2     DEFAULT NULL,
    --
    p_xlsx_sheet_name           IN VARCHAR2     DEFAULT NULL,
    --
    p_row_selector              IN VARCHAR2     DEFAULT NULL,
    --
    p_csv_row_delimiter         IN VARCHAR2     DEFAULT LF,
    p_csv_col_delimiter         IN VARCHAR2     DEFAULT NULL,
    p_csv_enclosed              IN VARCHAR2     DEFAULT '"',
    --
    p_skip_rows                 IN PLS_INTEGER  DEFAULT NULL,
    --
    p_nullif                    IN VARCHAR2     DEFAULT NULL,
    p_force_trim_whitespace     IN VARCHAR2     DEFAULT 'Y',
    --
    p_file_charset              IN VARCHAR2     DEFAULT 'AL32UTF8',
    p_max_rows                  IN NUMBER       DEFAULT 200,
    --
    p_xml_namespaces            IN VARCHAR2     DEFAULT NULL )
    RETURN CLOB;
```

## Returns

CLOB containing the file profile in JSON format.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_content      blob;
    l_file_name    varchar2(255);
    l_profile_json clob;
begin
    select blob_content, filename
      into l_content, l_file_name
      from apex_application_temp_files
     where name = :P10_UPLOAD;

    l_profile_json := apex_data_parser.discover(
        p_content           => l_content,
        p_file_name         => l_file_name,
        p_csv_col_delimiter => ',',
        p_file_charset      => 'AL32UTF8',
        p_max_rows          => 100
    );

    :P10_PROFILE_JSON := l_profile_json;
end;
/
```

