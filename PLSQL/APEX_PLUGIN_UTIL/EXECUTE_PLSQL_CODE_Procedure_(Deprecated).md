# APEX_PLUGIN_UTIL.EXECUTE_PLSQL_CODE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXECUTE_PLSQL_CODE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.EXECUTE_PLSQL_CODE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN_UTIL.EXECUTE_PLSQL_CODE (
    p_plsql_code      IN VARCHAR2,
    p_auto_bind_items IN BOOLEAN     DEFAULT TRUE,
    p_bind_list       IN t_bind_list DEFAULT c_empty_bind_list );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plsql_code` | PL/SQL code to be executed. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_bind_list` | Additional bind variables to be used for the SQL query. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.EXECUTE_PLSQL_CODE(
        p_plsql_code => to_clob('Example text'),
        p_auto_bind_items => true,
        p_bind_list => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.EXECUTE_PLSQL_CODE(
            p_plsql_code => to_clob('Example text'),
            p_auto_bind_items => true,
            p_bind_list => null
        );
end;
/
```

