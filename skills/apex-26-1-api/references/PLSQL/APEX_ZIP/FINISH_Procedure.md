# APEX_ZIP.FINISH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.FINISH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

This procedure completes the creation of a zip file after adding files with APEX_ZIP.ADD_FILE .

## When To Use

Use this page when code needs the `APEX_ZIP.FINISH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ZIP.FINISH (
    p_zipped_blob IN OUT NOCOPY BLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | BLOB containing the zip file. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Finalize a ZIP archive after all files have been added.

```sql
declare
    l_zip blob;
begin
    dbms_lob.createtemporary(l_zip, true);

    for rec in (
        select file_name, content_blob
          from app_files
         where project_id = :P10_PROJECT_ID
    ) loop
        apex_zip.add_file(l_zip, rec.file_name, rec.content_blob);
    end loop;

    apex_zip.finish(
        p_zipped_blob => l_zip);
end;
/
```

