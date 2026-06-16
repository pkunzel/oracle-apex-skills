# APEX_ZIP.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

The APEX_ZIP package uses the following data types.

## When To Use

Use this page when code needs the `APEX_ZIP.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use t_dir_entries when inspecting ZIP contents; t_files is deprecated.

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
        p_zipped_blob => l_zip);

    l_name := l_entries.first;
    while l_name is not null loop
        apex_debug.info(
            'Entry %s has %s bytes',
            l_entries(l_name).file_name,
            l_entries(l_name).uncompressed_length);
        l_name := l_entries.next(l_name);
    end loop;
end;
/
```

