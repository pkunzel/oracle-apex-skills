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

```sql
declare
    l_result APEX_T_EXPORT_FILES;
begin
    l_result := apex_export.UNZIP(
        p_source_zip => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_EXPORT_FILES;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_export.UNZIP(
            p_source_zip => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

