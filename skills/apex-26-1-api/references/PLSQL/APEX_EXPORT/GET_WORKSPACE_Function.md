# APEX_EXPORT.GET_WORKSPACE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

This function exports the given workspace's definition and users. The optional p_with_% parameters (which all default to FALSE ) can be used to include additional information in the export.

## When To Use

Use this page when code needs the `APEX_EXPORT.GET_WORKSPACE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXPORT.GET_WORKSPACE (
    p_workspace_id          IN NUMBER,
    p_with_date             IN BOOLEAN  DEFAULT FALSE,
    p_with_team_development IN BOOLEAN  DEFAULT FALSE,
    p_with_misc             IN BOOLEAN  DEFAULT FALSE )
    RETURN apex_t_export_files;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace_id` | The workspace ID. |
| `p_with_date` | If TRUE , include export date and time in the result. |
| `p_with_team_development` | If TRUE , include team development data. |
| `p_with_misc` | If TRUE , include data from SQL Workshop, mail logs, and so on, in the export. |

## Returns

A table of apex_t_export_file .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

This exports a workspace definition, including Team Development and miscellaneous workspace metadata.

```sql
declare
    l_files apex_t_export_files;
begin
    l_files := apex_export.get_workspace(
        p_workspace_id          => 123456789,
        p_with_date             => true,
        p_with_team_development => true,
        p_with_misc             => true
    );

    for i in 1 .. l_files.count loop
        sys.dbms_output.put_line(l_files(i).name);
    end loop;
end;
/
```
