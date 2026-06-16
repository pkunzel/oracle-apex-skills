# APEX_PLUGIN_UTIL.GET_PLSQL_EXPR_RESULT_BOOLEAN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PLSQL_EXPR_RESULT_BOOLEAN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function executes a PL/SQL expression and returns a Boolean result. This function also performs the binding of any bind variables in the provided PL/SQL expression. This function is usually used for plug-in attributes of type PL/SQL expression.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_PLSQL_EXPR_RESULT_BOOLEAN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_PLSQL_EXPR_RESULT_BOOLEAN (
    p_plsql_expression  IN VARCHAR2,
    p_auto_bind_items   IN BOOLEAN     DEFAULT TRUE,
    p_bind_list         IN t_bind_list DEFAULT c_empty_bind_list )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plsql_expression_result` | A PL/SQL expression that returns a Boolean. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_bind_list` | Additional bind variables to be used for the SQL query. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the Boolean expression helper when a plug-in attribute stores a PL/SQL expression expected to return TRUE or FALSE.

```sql
declare
    l_show_badge boolean;
begin
    l_show_badge := apex_plugin_util.get_plsql_expr_result_boolean(
        p_plsql_expression => p_region.attributes.get_varchar2('SHOW_BADGE'),
        p_auto_bind_items  => true);
end;
/
```
