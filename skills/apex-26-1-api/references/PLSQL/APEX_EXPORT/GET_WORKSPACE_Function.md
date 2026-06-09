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

```sql
declare
    l_result APEX_T_EXPORT_FILES;
begin
    l_result := apex_export.GET_WORKSPACE(
        p_workspace_id => 1,
        p_with_date => true,
        p_with_team_development => true,
        p_with_misc => true
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

    l_result := apex_export.GET_WORKSPACE(
            p_workspace_id => 1,
            p_with_date => true,
            p_with_team_development => true,
            p_with_misc => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

