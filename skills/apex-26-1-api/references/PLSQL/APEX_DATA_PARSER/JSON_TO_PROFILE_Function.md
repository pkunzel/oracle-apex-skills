# APEX_DATA_PARSER.JSON_TO_PROFILE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.JSON_TO_PROFILE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function converts a file profile in JSON format to an instance of the t_file_profile record type.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.JSON_TO_PROFILE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.JSON_TO_PROFILE (
    p_json  IN CLOB )
    RETURN t_file_profile;
```

## Returns

Returns the file profile as an instance of the t_file_profile record type.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_FILE_PROFILE;
begin
    l_result := apex_data_parser.JSON_TO_PROFILE(
        p_json => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

