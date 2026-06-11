# APEX_DATA_PARSER.GET_FILE_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_FILE_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function returns a file type, based on a file name extension.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.GET_FILE_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.GET_FILE_TYPE (
    p_file_name IN VARCHAR2 )
RETURN t_file_type;
```

## Returns

Returns the file type as t_file_type .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_file_type apex_data_parser.t_file_type;
begin
    l_file_type := apex_data_parser.get_file_type(
        p_file_name => 'orders.xlsx'
    );

    if l_file_type = apex_data_parser.c_file_type_xlsx then
        apex_debug.info('Workbook upload detected.');
    end if;
end;
/
```

