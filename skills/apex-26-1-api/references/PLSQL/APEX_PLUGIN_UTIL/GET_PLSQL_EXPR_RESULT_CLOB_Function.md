# APEX_PLUGIN_UTIL.GET_PLSQL_EXPR_RESULT_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_EXPR_RESULT_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function executes a PL/SQL expression and returns a CLOB result. This function also performs the binding of any bind variables in the provided PL/SQL expression. This function is usually used for plug-in attributes of type PL/SQL expression.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_PLSQL_EXPR_RESULT_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_PLSQL_EXPR_RESULT_CLOB (
    p_plsql_expression IN VARCHAR2,
    p_auto_bind_items  IN BOOLEAN     DEFAULT TRUE,
    p_bind_list        IN t_bind_list DEFAULT c_empty_bind_list )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plsql_expression` | A PL/SQL expression that returns a CLOB. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_bind_list` | Additional bind variables to be used for the SQL query. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the CLOB expression helper for controlled PL/SQL expressions that return large text.

```sql
declare
    l_content clob;
begin
    l_content := apex_plugin_util.get_plsql_expr_result_clob(
        p_plsql_expression => p_region.attributes.get_varchar2('CONTENT_EXPR'),
        p_auto_bind_items  => true);

    sys.htp.p(apex_escape.html(l_content));
end;
/
```
