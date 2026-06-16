# APEX_ZIP

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html)

Status: curated first-pass reference.

## Purpose

`APEX_ZIP` creates and reads ZIP archives from PL/SQL BLOBs. Use it to bundle generated reports, export multiple files, unpack uploaded ZIP files, or attach a ZIP archive to an email.

## Common Members

| Need | Members |
| --- | --- |
| Create ZIP | `ADD_FILE`, `FINISH` |
| Inspect ZIP | `GET_DIR_ENTRIES` |
| Extract file | `GET_FILE_CONTENT` current signature |
| Deprecated | old `GET_FILE_CONTENT` signature, `GET_FILES` |

## Create A ZIP

Assuming `project_files(file_name, content_blob)` contains files to export:

```sql
declare
    l_zip blob;
begin
    dbms_lob.createtemporary(l_zip, true);

    for rec in (
        select file_name, content_blob
          from project_files
         where project_id = :P10_PROJECT_ID
    ) loop
        apex_zip.add_file(
            p_zipped_blob => l_zip,
            p_file_name   => rec.file_name,
            p_content     => rec.content_blob);
    end loop;

    apex_zip.finish(
        p_zipped_blob => l_zip);

    insert into generated_exports (
        file_name,
        mime_type,
        content_blob )
    values (
        'project-files.zip',
        'application/zip',
        l_zip );
end;
/
```

## Attach ZIP To Email

```sql
declare
    l_mail_id number;
    l_zip     blob;
begin
    -- Assuming l_zip was built with APEX_ZIP.ADD_FILE and APEX_ZIP.FINISH.
    l_mail_id := apex_mail.send(
        p_to   => :P10_EMAIL,
        p_from => 'exports@example.com',
        p_subj => 'Export ready',
        p_body => 'Your export is attached.');

    apex_mail.add_attachment(
        p_mail_id    => l_mail_id,
        p_attachment => l_zip,
        p_filename   => 'export.zip',
        p_mime_type  => 'application/zip');
end;
/
```

## Read ZIP Entries

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
        apex_debug.info(
            'ZIP entry %s has %s bytes',
            l_entries(l_name).file_name,
            l_entries(l_name).uncompressed_length);

        l_name := l_entries.next(l_name);
    end loop;
end;
/
```

## Extract One File

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

Prefer the `t_dir_entry` overload over the deprecated filename-based overload.

## Safety Guidance

- Validate uploaded ZIP file names before extracting or storing entries.
- Watch for path traversal patterns such as `../` in entry names.
- Enforce file size and entry count limits.
- Avoid processing untrusted ZIPs without validation.
- Call `FINISH` after adding files before storing, downloading, or attaching the ZIP.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Data Types | data types | [local](APEX_ZIP/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.Data-Types.html) |
| ADD_FILE Procedure | procedure | [local](APEX_ZIP/ADD_FILE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.ADD_FILE-Procedure-2.html) |
| FINISH Procedure | procedure | [local](APEX_ZIP/FINISH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.FINISH-Procedure.html) |
| GET_DIR_ENTRIES Function | function | [local](APEX_ZIP/GET_DIR_ENTRIES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_DIR_ENTRIES-Function.html) |
| GET_FILE_CONTENT Function Signature 1 (Deprecated) | function | [local](APEX_ZIP/GET_FILE_CONTENT_Function_Signature_1_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-1.html) |
| GET_FILE_CONTENT Function Signature 2 | function | [local](APEX_ZIP/GET_FILE_CONTENT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-2.html) |
| GET_FILES Function (Deprecated) | function | [local](APEX_ZIP/GET_FILES_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILES-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
