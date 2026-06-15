# APEX_EXPORT.GET_WORKSPACE _FILES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

This function exports the given workspace's static files.

## When To Use

Use this page when code needs the `APEX_EXPORT.GET_WORKSPACE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION GET_WORKSPACE_FILES (
    p_workspace_id     IN NUMBER,
    p_with_date        IN BOOLEAN  DEFAULT FALSE )
    RETURN apex_t_export_files;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace_id` | The workspace ID. |
| `p_with_date` | If TRUE , include export date and time in the result. |

## Returns

A table of apex_t_export_file . The result is a single file, splitting into multiple files will be implemented in a future release.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

This exports static workspace files for archival or source-control storage.

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_workspace_files(
        p_workspace_id => 123456789,
        p_with_date    => true
    );

    for i in 1 .. l_files.count loop
        sys.dbms_output.put_line(l_files(i).name);
    end loop;
end;
/
```
