# APEX_UTIL.GET_FILE_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function obtains the primary key of a file in the Oracle APEX file repository.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_FILE_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_FILE_ID (
    p_name    IN VARCHAR2 )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The NAME in APEX_APPLICATION_FILES of the file to be downloaded. APEX_APPLICATION_FILES is a view on all files uploaded to your workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Resolve a workspace file name to the id required by GET_FILE.

```sql
declare
    l_file_id number;
begin
    l_file_id := apex_util.get_file_id(
        p_name => 'terms-of-service.pdf');
end;
/
```

