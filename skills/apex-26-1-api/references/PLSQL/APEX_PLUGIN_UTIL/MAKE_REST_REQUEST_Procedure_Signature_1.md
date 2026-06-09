# APEX_PLUGIN_UTIL.MAKE_REST_REQUEST Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure performs the actual REST request (HTTP). Unlike a direct invocation of APEX_WEB_SERVICE.MAKE_REST_REQUEST , this procedure respects all REST Data Source parameters.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.MAKE_REST_REQUEST` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.MAKE_REST_REQUEST (
    p_web_source_operation IN            apex_plugin.t_web_source_operation,
    p_request_body         IN            CLOB    DEFAULT NULL,
    p_bypass_cache         IN            BOOLEAN DEFAULT FALSE,
    --
    p_time_budget          IN OUT NOCOPY NUMBER,
    --
    p_response             IN OUT NOCOPY CLOB,
    p_response_parameters  IN OUT NOCOPY apex_plugin.t_web_source_parameters );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_web_source_operation` | Plug-In meta data for the REST Data Source operation. |
| `p_request_body` | Override request body to use. |
| `p_bypass_cache` | If "true" then the cache is not used. |
| `p_time_budget` | If "all rows" are fetched (multiple HTTP requests), then the process stops when the time budget is exhausted and an error raises. |

## Returns

Parameter Description p_time_budget Time budget left after request has been made. p_response Received response of the HTTP invocation. p_response_parameters Received response headers and cookies, based on REST Data Source meta data.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.MAKE_REST_REQUEST(
        p_web_source_operation => null,
        p_request_body => to_clob('Example text'),
        p_bypass_cache => true,
        p_time_budget => sysdate,
        p_response => null,
        p_response_parameters => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.MAKE_REST_REQUEST(
            p_web_source_operation => null,
            p_request_body => to_clob('Example text'),
            p_bypass_cache => true,
            p_time_budget => sysdate,
            p_response => null,
            p_response_parameters => null
        );
end;
/
```

