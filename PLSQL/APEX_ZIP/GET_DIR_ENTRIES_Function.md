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

```sql
declare
    l_result T_DIR_ENTRIES;
begin
    l_result := apex_zip.GET_DIR_ENTRIES(
        p_zipped_blob => null,
        p_only_files => true,
        p_encoding => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result T_DIR_ENTRIES;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_zip.GET_DIR_ENTRIES(
            p_zipped_blob => null,
            p_only_files => true,
            p_encoding => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

