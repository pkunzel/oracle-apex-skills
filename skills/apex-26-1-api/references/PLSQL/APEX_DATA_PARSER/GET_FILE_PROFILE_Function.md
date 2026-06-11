# APEX_DATA_PARSER.GET_FILE_PROFILE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_FILE_PROFILE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function returns the current file profile in JSON format. A file profile is generated when the parse() table function runs and no file profile is passed in. The file profile contains metadata about the parsed files such as the CSV delimiter, the XLSX worksheet name, and the columns found during parsing and their data types.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.GET_FILE_PROFILE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.GET_FILE_PROFILE RETURN CLOB;
```

## Returns

Returns file profile of the last PARSE() invocation in JSON format.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_content      blob;
    l_profile_json clob;
begin
    select blob_content
      into l_content
      from apex_application_temp_files
     where name = :P10_UPLOAD;

    for r in (
        select line_number, col001 order_id, col002 customer_name
          from table(apex_data_parser.parse(
              p_content       => l_content,
              p_file_name     => 'orders.csv',
              p_max_rows      => 20,
              p_return_rows   => 5,
              p_add_headers_row => 'N'))
    ) loop
        apex_debug.info('Preview row %s: %s', r.line_number, r.customer_name);
    end loop;

    l_profile_json := apex_data_parser.get_file_profile;
    :P10_PROFILE_JSON := l_profile_json;
end;
/
```

