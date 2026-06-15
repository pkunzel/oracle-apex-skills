# APEX_EXPORT.Constants and Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.Constants_Data_Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

The APEX_EXPORT package uses the following constants.

## When To Use

Use this page when code needs the `APEX_EXPORT.Constants and Data Types` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the package constants instead of spelling export and audit modes by hand. The result of export calls is an `apex_t_export_files` collection where each entry has a file name and either CLOB or BLOB contents.

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_application(
        p_application_id  => 100,
        p_type            => apex_export.c_type_sql,
        p_split           => true,
        p_with_audit_info => apex_export.c_audit_dates_only
    );

    for i in 1 .. l_files.count loop
        sys.dbms_output.put_line(l_files(i).name);
    end loop;
end;
/
```
