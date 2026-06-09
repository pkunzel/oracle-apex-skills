# APEX_ZIP.GET_FILE_CONTENT Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

This function returns the BLOB of a file contained in a provided zip file.

## When To Use

Use this page when code needs the `APEX_ZIP.GET_FILE_CONTENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ZIP.GET_FILE_CONTENT (
    p_zipped_blob   IN BLOB,
    p_dir_entry     IN t_dir_entry )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | The BLOB containing the zip file. |
| `p_dir_entry` | The directory entry describing the required file. |

## Returns

Return Description BLOB BLOB of the file specified in the p_dir_entry record.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BLOB;
begin
    l_result := apex_zip.GET_FILE_CONTENT(
        p_zipped_blob => null,
        p_dir_entry => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

