# APEX_PLUGIN_UTIL.BUILD_REQUEST_BODY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BUILD_REQUEST_BODY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure builds a request body for a REST Data Source DML request. If a request body template is set, then #COLUMN# placeholders will be replaced by the DML context column values. In this case, the request body can be any data format.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.BUILD_REQUEST_BODY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.BUILD_REQUEST_BODY (
    p_request_format    IN            apex_plugin.t_data_format,
    p_profile_columns   IN            apex_plugin.t_web_source_columns,
    p_values_context    IN            apex_exec.t_context,
    p_build_when_empty  IN            BOOLEAN,
    --
    p_request_body      IN OUT NOCOPY CLOB );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_request_format` | Request format (JSON or XML). |
| `p_profile_columns` | Column meta data (names, data types). |
| `p_values_context` | apex_exec context object containing DML values. |
| `p_build_when_empty` | If p_request_body is empty, whether to build a new request body. |
| `p_request_body` | Request body template to perform replacements on. |

## Returns

Parameter Description p_request_body Request body (substitutions replaced or built from scratch).

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

In REST Data Source DML plug-ins, let APEX substitute column placeholders into the configured request-body template.

```sql
declare
    l_request_body clob := p_request_body_template;
begin
    apex_plugin_util.build_request_body(
        p_request_format   => p_web_source.request_format,
        p_profile_columns  => p_web_source.profile_columns,
        p_values_context   => p_values_context,
        p_build_when_empty => true,
        p_request_body     => l_request_body);
end;
/
```
