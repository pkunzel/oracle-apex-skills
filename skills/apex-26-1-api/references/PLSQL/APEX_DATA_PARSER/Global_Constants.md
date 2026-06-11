# APEX_DATA_PARSER.Global Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.Global-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

The APEX_DATA_PARSER package uses the following constants.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.Global Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use file-type constants when the file name is not enough or when you want to assert a type explicitly.

```sql
apex_data_parser.c_file_type_xlsx
apex_data_parser.c_file_type_csv
apex_data_parser.c_file_type_xml
apex_data_parser.c_file_type_json
apex_data_parser.c_file_type_ics
```

```sql
if apex_data_parser.assert_file_type(
       p_file_name => 'orders.csv',
       p_file_type => apex_data_parser.c_file_type_csv )
then
    apex_debug.info('CSV upload accepted.');
end if;
```
