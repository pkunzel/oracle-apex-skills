# APEX_PLUGIN_UTIL.GET_WEB_SOURCE_OPERATION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WEB_SOURCE_OPERATION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function gets a REST Data Source operation. The REST Data Source operation object contains all meta data for the HTTP request which needs to be done to implement the given database operation (such as INSERT, UPDATE, DELETE).

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_WEB_SOURCE_OPERATION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_WEB_SOURCE_OPERATION (
    p_web_source       in apex_plugin.t_web_source,
    p_db_operation     in apex_plugin.t_db_operation   DEFAULT NULL,
    p_perform_init     in BOOLEAN                      DEFAULT FALSE,
    p_preserve_headers in BOOLEAN                      DEFAULT FALSE )
RETURN apex_plugin.t_web_source_operation;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_web_source` | REST Data Source plug-in meta data. |
| `p_db_operation` | Database operation to look up the Web Source operation (such as UPDATE -> PUT , INSERT -> POST ). |
| `p_perform_init` | Whether to initialize the HTTP request environment (HTTP request headers, cookies, request body placeholder replacements). If FALSE , the Plug-In developer is responsible for setting up the environment themselves. |
| `p_preserve_headers` | Whether to preserve HTTP request headers in apex_web_service.g_request_headers . |

## Returns

Parameter Description * Plug-In meta data for the web source operation.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the operation metadata configured for the REST Data Source plug-in instead of constructing endpoint details manually.

```sql
declare
    l_operation apex_plugin.t_web_source_operation;
begin
    l_operation := apex_plugin_util.get_web_source_operation(
        p_web_source   => p_web_source,
        p_db_operation => p_db_operation,
        p_perform_init => true);
end;
/
```
