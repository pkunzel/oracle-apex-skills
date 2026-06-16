# APEX_PLUGIN_UTIL.PRINT_LOV_AS_JSON Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_LOV_AS_JSON-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs a JSON response based on the result of a two column LOV in the format:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_LOV_AS_JSON` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_LOV_AS_JSON (
    p_sql_statement         IN VARCHAR2,
    p_component_name        IN VARCHAR2,
    p_escape                IN BOOLEAN,
    p_replace_substitutions IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_sql_statement` | A SQL statement which returns two columns from the SELECT. |
| `p_component_name` | The name of the page item or report column that is used in case an error is displayed. |
| `p_escape` | If set to TRUE the value of the display column is escaped, otherwise it is output as is. |
| `p_replace_substitutions` | If set to TRUE, apex_plugin_util.replace_substitutions is called for the value of the display column, otherwise, it is output as is. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Return LOV rows as JSON from an item plug-in Ajax callback.

```sql
begin
    apex_plugin_util.print_json_http_header;

    apex_plugin_util.print_lov_as_json(
        p_sql_statement => q'[
            select display_name, user_id
              from app_users
             where active_yn = 'Y'
             order by display_name
        ]',
        p_component_name        => p_item.name,
        p_escape                => true,
        p_replace_substitutions => false);
end;
/
```
