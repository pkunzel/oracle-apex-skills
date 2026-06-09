# APEX_EXPORT.ZIP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ZIP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

This function compresses a list of files (usually obtained from one of the APEX_EXPORT routines) into a single BLOB containing a .zip archive. All text content in the resultant .zip file is encoded as UTF-8.

## When To Use

Use this page when code needs the `APEX_EXPORT.ZIP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXPORT.ZIP (
    p_source_files  apex_t_export_files,
    p_extra_files   apex_t_export_files DEFAULT apex_t_export_files() )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source_files` | A table of files. For example, from apex_export.get_application . |
| `p_extra_files` | Optional additional files to add to the resultant .zip archive. |

## Returns

This function returns a BLOB containing the compressed application files and any extra files, in ZIP format.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BLOB;
begin
    l_result := apex_export.ZIP(
        p_source_files => null,
        p_extra_files => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

