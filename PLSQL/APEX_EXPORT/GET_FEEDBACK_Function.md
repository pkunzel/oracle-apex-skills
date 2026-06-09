# APEX_EXPORT.GET_FEEDBACK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FEEDBACK_Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

This function exports user feedback to the development environment or developer feedback to the deployment environment.

## When To Use

Use this page when code needs the `APEX_EXPORT.GET_FEEDBACK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXPORT.GET_FEEDBACK (
    p_workspace_id      IN NUMBER,
    p_with_date         IN BOOLEAN  DEFAULT FALSE,
    p_since             IN DATE     DEFAULT NULL,
    p_deployment_system IN VARCHAR2 DEFAULT NULL )
    RETURN apex_t_export_files;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace_id` | The workspace id. |
| `p_with_date` | If TRUE , include export date and time in the result. |
| `p_since` | If set, only export feedback that has been gathered since the given date. |
| `p_deployment_system` | If NULL, export user feedback. If not NULL, export developer feedback for the given deployment system. |

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
    l_result := apex_export.GET_FEEDBACK(
        p_workspace_id => 1,
        p_with_date => true,
        p_since => sysdate,
        p_deployment_system => 'EXAMPLE'
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

    l_result := apex_export.GET_FEEDBACK(
            p_workspace_id => 1,
            p_with_date => true,
            p_since => sysdate,
            p_deployment_system => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

