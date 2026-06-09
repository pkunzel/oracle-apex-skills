# APEX_PLUGIN_UTIL.GET_PLSQL_FUNCTION_RESULT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_FUNCTION_RESULT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function executes a PL/SQL function block and returns the result. This function also performs binding of bind variables in the provided PL/SQL function body. This function is usually used for plug-in attributes of type PL/SQL function body.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_PLSQL_FUNCTION_RESULT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_PLSQL_FUNCTION_RESULT (
    p_plsql_function    IN VARCHAR2,
    p_auto_bind_items   IN BOOLEAN     DEFAULT TRUE,
    p_bind_list         IN t_bind_list DEFAULT c_empty_bind_list )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plsql_function` | A PL/SQL function block that returns a result of type string. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_bind_list` | Additional bind variables to be used for the SQL query. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_plugin_util.GET_PLSQL_FUNCTION_RESULT(
        p_plsql_function => to_clob('Example text'),
        p_auto_bind_items => true,
        p_bind_list => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

