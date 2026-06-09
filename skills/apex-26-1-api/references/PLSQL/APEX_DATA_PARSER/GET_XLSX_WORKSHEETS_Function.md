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
    l_result APEX_T_PARSER_WORKSHEETS;
begin
    l_result := apex_data_parser.GET_XLSX_WORKSHEETS(
        p_content => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_PARSER_WORKSHEETS;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_data_parser.GET_XLSX_WORKSHEETS(
            p_content => to_clob('Example text')
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

