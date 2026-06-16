# APEX_ZIP.GET_DIR_ENTRIES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_DIR_ENTRIES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

This function returns a table of directory entries containing information about each file in the provided ZIP file. The returned table of records is indexed by the file names (including the path).

## When To Use

Use this page when code needs the `APEX_ZIP.GET_DIR_ENTRIES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ZIP.GET_DIR_ENTRIES (
    p_zipped_blob IN BLOB,
    p_only_files  IN BOOLEAN  DEFAULT TRUE,
    p_encoding    IN VARCHAR2 DEFAULT NULL ) 
    RETURN t_dir_entries;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | The BLOB containing the ZIP file. |
| `p_only_files` | Only return files, not directories, in the directory listing. |
| `p_encoding` | The encoding used to compress the file. |

## Returns

A table of directory entries.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Inspect ZIP contents using the current t_dir_entries return type.

```sql
declare
    l_zip     blob;
    l_entries apex_zip.t_dir_entries;
    l_name    varchar2(32767);
begin
    select content_blob
      into l_zip
      from uploaded_files
     where file_id = :P10_ZIP_FILE_ID;

    l_entries := apex_zip.get_dir_entries(
        p_zipped_blob => l_zip,
        p_only_files  => true);

    l_name := l_entries.first;
    while l_name is not null loop
        insert into zip_manifest(file_id, entry_name, uncompressed_bytes)
        values (:P10_ZIP_FILE_ID, l_name, l_entries(l_name).uncompressed_length);

        l_name := l_entries.next(l_name);
    end loop;
end;
/
```

