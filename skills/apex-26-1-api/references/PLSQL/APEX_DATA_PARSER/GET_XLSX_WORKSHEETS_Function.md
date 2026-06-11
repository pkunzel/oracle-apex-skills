# APEX_DATA_PARSER.GET_XLSX_WORKSHEETS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_XLSX_WORKSHEETS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function returns information on worksheets within an XLSX workbook as a list of apex_t_parser_worksheet instances.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.GET_XLSX_WORKSHEETS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.GET_XLSX_WORKSHEETS (
    p_content   IN BLOB )
RETURN apex_t_parser_worksheets;
```

## Returns

Returns table with worksheet information.

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

    for ws in (
        select sheet_sequence, sheet_display_name, sheet_file_name
          from table(apex_data_parser.get_xlsx_worksheets(
              p_content => l_content))
         order by sheet_sequence
    ) loop
        apex_debug.info('Worksheet %s: %s (%s)',
                        ws.sheet_sequence,
                        ws.sheet_display_name,
                        ws.sheet_file_name);
    end loop;
end;
/
```

