# APEX_PLUGIN_UTIL.MAKE_REST_REQUEST Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure performs the actual REST request (HTTP). It uses apex_web_service . All parameters for apex_web_service.make_rest_request are derived from the REST Data Source meta data passed in as p_web_source_operation .

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.MAKE_REST_REQUEST` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.MAKE_REST_REQUEST (
    p_web_source_operation IN            apex_plugin.t_web_source_operation,
    -- 
    p_request_body         IN            CLOB DEFAULT NULL,
    --
    p_response             IN OUT NOCOPY CLOB,
    p_response_parameters  IN OUT NOCOPY apex_plugin.t_web_source_parameters );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_web_source_operation` | Plug-in meta data for the REST Data Source operation. |
| `p_bypass_cache` | If TRUE , then the cache is not used. |
| `p_request_body` | Override request body to use. |

## Returns

Parameter Description p_response Received response of the HTTP invocation. p_response_parameters Received response headers and cookies, based on REST Data Source meta data.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the simpler overload when the plug-in does not manage an explicit time budget.

```sql
declare
    l_operation           apex_plugin.t_web_source_operation;
    l_response            clob;
    l_response_parameters apex_plugin.t_web_source_parameters;
begin
    l_operation := apex_plugin_util.get_web_source_operation(
        p_web_source => p_web_source);

    apex_plugin_util.make_rest_request(
        p_web_source_operation => l_operation,
        p_request_body         => l_request_body,
        p_response             => l_response,
        p_response_parameters  => l_response_parameters);
end;
/
```
