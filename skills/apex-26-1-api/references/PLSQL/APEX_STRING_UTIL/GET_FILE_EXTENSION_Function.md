# APEX_STRING_UTIL.GET_FILE_EXTENSION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE_EXTENSION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function returns a file name's extension.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.GET_FILE_EXTENSION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION GET_FILE_EXTENSION ( 
    p_filename      IN VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_filename` | The filename. |

## Returns

This function returns the file name's extension in lower case.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Capture a file extension for validation or display.

```sql
begin
    :P10_EXTENSION := apex_string_util.get_file_extension(
        p_string => :P10_FILE_NAME);
end;
/
```

