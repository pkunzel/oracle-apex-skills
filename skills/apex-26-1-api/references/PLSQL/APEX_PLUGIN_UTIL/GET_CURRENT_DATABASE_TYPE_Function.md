# APEX_PLUGIN_UTIL.GET_CURRENT_DATABASE_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CURRENT_DATABASE_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function retrieves the database type for the currently active region. If Plug-In developers generate SQL in their code, this information helps to generate correct SQL for the corresponding database type.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_CURRENT_DATABASE_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_CURRENT_DATABASE_TYPE (
    p_remote_server_id  IN NUMBER   DEFAULT NULL )
RETURN apex_exec.t_database_type;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_remote_server_id` | The internal ID of the REST Enabled SQL reference. |

## Returns

This function returns the database vendor for the data source of the currently executed region.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_EXEC.T_DATABASE_TYPE;
begin
    l_result := apex_plugin_util.GET_CURRENT_DATABASE_TYPE(
        p_remote_server_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_EXEC.T_DATABASE_TYPE;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin_util.GET_CURRENT_DATABASE_TYPE(
            p_remote_server_id => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

