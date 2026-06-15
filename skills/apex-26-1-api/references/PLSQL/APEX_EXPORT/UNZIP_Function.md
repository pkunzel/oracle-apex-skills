# APEX_EXPORT.UNZIP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNZIP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

This function extracts and decompresses all the files from a zip archive.

## When To Use

Use this page when code needs the `APEX_EXPORT.UNZIP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXPORT.UNZIP (
    p_source_zip    IN BLOB )
    RETURN apex_t_export_files;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source_zip` | A BLOB containing the zip archive. |

## Returns

This function returns a table of apex_t_export_file containing the name and contents (converted to text format) of each file from the ZIP archive.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Unzip a previously stored APEX export BLOB back into the `apex_t_export_files` collection.

```sql
declare
    l_zip   blob;
    l_files apex_t_export_files;
begin
    select file_blob
      into l_zip
      from app_export_archive
     where file_name = 'f100.zip';

    l_files := apex_export.unzip(p_source_zip => l_zip);

    for i in 1 .. l_files.count loop
        sys.dbms_output.put_line(l_files(i).name);
    end loop;
end;
/
```
