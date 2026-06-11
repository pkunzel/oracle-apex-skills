# APEX_DATA_PARSER.GET_COLUMNS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_COLUMNS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function returns the columns of a parser profile as a table in order to be consumed by Oracle APEX components.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.GET_COLUMNS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.GET_COLUMNS (
    p_profile             IN CLOB )
    RETURN apex_t_parser_columns PIPELINED;
```

## Returns

Returns profile column information as rows of apex_t_parser_columns .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_profile_json clob := :P10_PROFILE_JSON;
begin
    for c in (
        select column_position, column_name, data_type, format_mask
          from table(apex_data_parser.get_columns(p_profile => l_profile_json))
         order by column_position
    ) loop
        apex_debug.info('Column %s: %s (%s)',
                        c.column_position,
                        c.column_name,
                        c.data_type);
    end loop;
end;
/
```

