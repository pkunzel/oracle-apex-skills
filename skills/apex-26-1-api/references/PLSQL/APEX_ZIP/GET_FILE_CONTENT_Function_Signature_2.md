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

Extract a file using the current t_dir_entry overload.

```sql
declare
    l_zip     blob;
    l_entries apex_zip.t_dir_entries;
    l_file    blob;
begin
    select content_blob
      into l_zip
      from uploaded_files
     where file_id = :P10_ZIP_FILE_ID;

    l_entries := apex_zip.get_dir_entries(l_zip);

    if l_entries.exists('manifest.json') then
        l_file := apex_zip.get_file_content(
            p_zipped_blob => l_zip,
            p_dir_entry   => l_entries('manifest.json'));
    end if;
end;
/
```

