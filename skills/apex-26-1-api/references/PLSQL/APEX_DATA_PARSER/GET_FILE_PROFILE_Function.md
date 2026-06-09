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
    l_result CLOB;
begin
    l_result := apex_data_parser.GET_FILE_PROFILE;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

