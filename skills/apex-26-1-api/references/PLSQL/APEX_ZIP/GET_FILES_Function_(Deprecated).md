# APEX_ZIP.GET_FILES Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_ZIP.GET_FILES` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_ZIP.GET_FILES (
    p_zipped_blob IN BLOB,
    p_only_files  IN BOOLEAN DEFAULT TRUE,
    p_encoding    IN VARCHAR2 DEFAULT NULL )
RETURN t_files;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | This is the zip file containing the BLOB. |
| `p_only_files` | If set to TRUE , empty directory entries are not included in the returned array. Otherwise, set to FALSE to include empty directory entries. |
| `p_encoding` | This is the encoding used to zip the file. |

## Returns

Return Description t_files A table of file names and path. See " Data Types " for more details.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy file-list API. Prefer GET_DIR_ENTRIES in new code because it includes metadata.

```sql
declare
    l_zip   blob;
    l_files apex_zip.t_files;
    l_idx   binary_integer;
begin
    select content_blob
      into l_zip
      from uploaded_files
     where file_id = :P10_ZIP_FILE_ID;

    l_files := apex_zip.get_files(
        p_zipped_blob => l_zip,
        p_only_files  => true);

    l_idx := l_files.first;
    while l_idx is not null loop
        apex_debug.info('ZIP entry: %s', l_files(l_idx));
        l_idx := l_files.next(l_idx);
    end loop;
end;
/
```

