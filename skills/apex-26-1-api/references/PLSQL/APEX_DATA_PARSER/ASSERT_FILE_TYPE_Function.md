# APEX_DATA_PARSER.ASSERT_FILE_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.ASSERT_FILE_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This function checks whether the extension of the file name matches the specified file type.

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.ASSERT_FILE_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.ASSERT_FILE_TYPE (
    p_file_name IN VARCHAR2,
    p_file_type IN t_file_type )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_file_name` | File name to get the file type. |
| `p_file_type` | File type as t_file_type . |

## Returns

TRUE , if the file name matches the specified extension. FALSE otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_data_parser.assert_file_type(
        p_file_name => 'orders.csv',
        p_file_type => apex_data_parser.c_file_type_csv
    ) then
        apex_debug.info('Upload has a CSV file extension.');
    end if;
end;
/
```

