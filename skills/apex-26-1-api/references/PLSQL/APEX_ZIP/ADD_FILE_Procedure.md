# APEX_ZIP.ADD_FILE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.ADD_FILE-Procedure-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

This procedure adds a single file to a zip file. You can call this procedure multiple times to add multiple files to the same zip file.

## When To Use

Use this page when code needs the `APEX_ZIP.ADD_FILE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ZIP.ADD_FILE (
    p_zipped_blob IN OUT NOCOPY BLOB,
    p_file_name   IN VARCHAR2,
    p_content     IN BLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | BLOB containing the zip file. |
| `p_file_name` | File name, including path, of the file to be added to the zip file. |
| `p_content` | BLOB containing the file. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Add one BLOB file to a ZIP archive being built in memory.

```sql
declare
    l_zip  blob;
    l_file blob;
begin
    dbms_lob.createtemporary(l_zip, true);

    select content_blob
      into l_file
      from app_files
     where file_id = :P10_FILE_ID;

    apex_zip.add_file(
        p_zipped_blob => l_zip,
        p_file_name   => 'documents/' || :P10_FILE_NAME,
        p_content     => l_file);
end;
/
```

