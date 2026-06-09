# APEX_EXPORT

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html)

Status: curated first-pass reference.

## Purpose

`APEX_EXPORT` exports APEX application, workspace, feedback, and workspace file definitions into `apex_t_export_files`. Each returned file has a `name` and CLOB `contents`. Exports can be SQL, APEXlang, embedded-code, checksum, split files, or zipped/unzipped collections depending on options.

Use this package for deployment automation, source control snapshots, app diffing, APEXlang extraction, and migration tooling.

## When To Use

Use `APEX_EXPORT` when code needs a programmatic export instead of clicking export in Builder.

Common tasks:

- Export an application as SQL for deployment.
- Export an application as APEXlang for readable metadata.
- Export split files for source control.
- Export embedded code for scanning.
- Export workspace files or workspace definitions.
- Zip or unzip `apex_t_export_files` for transfer.

## API Surface

| Need | Members |
| --- | --- |
| Export app | `GET_APPLICATION` |
| Export feedback | `GET_FEEDBACK` |
| Export workspace | `GET_WORKSPACE` |
| Export workspace files | `GET_WORKSPACE_FILES` |
| Archive helpers | `ZIP`, `UNZIP` |
| Constants/types | `c_type_sql`, `c_type_apexlang`, checksum types, `t_export_type`, `t_audit_type` |

## Export Application As SQL

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_application(
        p_application_id          => 100,
        p_type                    => apex_export.c_type_sql,
        p_split                   => false,
        p_with_supporting_objects => 'Y');

    for i in 1 .. l_files.count loop
        insert into deploy_exports(file_name, file_clob)
        values (l_files(i).name, l_files(i).contents);
    end loop;
end;
/
```

Assuming `deploy_exports(file_name, file_clob)` is a deployment table used to store generated export files.

## Export Split APEXlang

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_application(
        p_application_id => 100,
        p_type           => apex_export.c_type_apexlang,
        p_split          => true,
        p_with_comments  => true);

    for i in 1 .. l_files.count loop
        dbms_output.put_line(l_files(i).name);
    end loop;
end;
/
```

Use split APEXlang when LLMs or reviewers need readable application metadata by component.

## Export Selected Components

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_application(
        p_application_id => 100,
        p_type           => apex_export.c_type_sql,
        p_split          => true,
        p_components     => apex_t_varchar2('PAGE:10', 'LOV:%'));
end;
/
```

Use `APEX_APPL_EXPORT_COMPS` to discover valid component type/name values before generating a targeted export.

## Export Embedded Code For Review

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_application(
        p_application_id => 100,
        p_type           => apex_export.c_type_embedded_code);

    for i in 1 .. l_files.count loop
        insert into code_review_queue(file_name, source_code)
        values (l_files(i).name, l_files(i).contents);
    end loop;
end;
/
```

Assuming `code_review_queue` stores source snippets for security review or static analysis.

## Zip Export Files

```sql
declare
    l_files apex_t_export_files;
    l_zip   blob;
begin
    l_files := apex_export.get_application(
        p_application_id => 100,
        p_type           => apex_export.c_type_sql,
        p_split          => true);

    l_zip := apex_export.zip(l_files);

    insert into deploy_archives(file_name, zip_blob)
    values ('f100.zip', l_zip);
end;
/
```

Use `UNZIP` to convert a BLOB archive back into `apex_t_export_files` before passing it to `APEX_APPLICATION_INSTALL.INSTALL`.

## Safety Notes

- Exported SQL may contain executable PL/SQL, SQL, JavaScript, credentials references, URLs, and application metadata.
- Decide intentionally whether to include public/private Interactive Report saved reports, ACL assignments, runtime instances, translations, comments, and audit info.
- Use `p_with_audit_info` carefully if export files go to source control.
- Use checksums for comparison workflows, not as a substitute for signed release artifacts.
- Split exports are easier for diffing and LLM retrieval; single-file exports are easier for direct install.

## Related APIs

- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) for installing exported applications.
- [APEX_ZIP](APEX_ZIP.md) for generic zip operations.
- [APEX_UTIL](APEX_UTIL.md) or [APEX_SESSION](APEX_SESSION.md) for session/workspace context in automation.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_EXPORT/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.Constants_Data_Types.html) |
| GET_APPLICATION Function | function | [local](APEX_EXPORT/GET_APPLICATION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_Function.html) |
| GET_FEEDBACK Function | function | [local](APEX_EXPORT/GET_FEEDBACK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FEEDBACK_Function.html) |
| GET_WORKSPACE Function | function | [local](APEX_EXPORT/GET_WORKSPACE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_Function.html) |
| GET_WORKSPACE _FILES Function | function | [local](APEX_EXPORT/GET_WORKSPACE_FILES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE.html) |
| UNZIP Function | function | [local](APEX_EXPORT/UNZIP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNZIP-Function.html) |
| ZIP Function | function | [local](APEX_EXPORT/ZIP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ZIP-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
