# APEX_PLUGIN_UTIL.GET_ORDERBY_NULLS_SUPPORT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ORDERBY_NULLS_SUPPORT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function checks whether the current data source is enabled to specify a NULLS clause for sorting. While this is always true for local and REST-enabled SQL, some REST APIs may not support it.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_ORDERBY_NULLS_SUPPORT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_ORDERBY_NULLS_SUPPORT
    RETURN apex_exec.t_supports_orderby_nulls_as;
```

## Returns

This function returns an instance of APEX_EXEC.T_SUPPORTS_ORDERBY_NULLS_AS which indicates whether ORDER BY NULLS clauses are supported or how the REST API treats NULLS when ordering. Return Description wwv_flow_exec_api.c_orderby_nulls_flexible The data source supports ORDER BY NULLs clauses. wwv_flow_exec_api.c_orderby_nulls_are_lowest The data source treats NULLs as the lowest values when sorting. wwv_flow_exec_api.c_orderby_nulls_are_highest The data source treats NULLs as the highest values when sorting. wwv_flow_exec_api.c_orderby_nulls_always_last The data source always orders NULLs last. wwv_flow_exec_api.c_orderby_nulls_always_first The data source always orders NULLs first.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_EXEC.T_SUPPORTS_ORDERBY_NULLS_AS;
begin
    l_result := apex_plugin_util.GET_ORDERBY_NULLS_SUPPORT;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_EXEC.T_SUPPORTS_ORDERBY_NULLS_AS;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin_util.GET_ORDERBY_NULLS_SUPPORT;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

