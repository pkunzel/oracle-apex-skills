# APEX_PLUGIN_UTIL.PROCESS_DML_RESPONSE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PROCESS_DML_RESPONSE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure parses the DML request response and load return values to the values context object.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PROCESS_DML_RESPONSE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PROCESS_DML_RESPONSE (
    p_web_source_operation IN apex_plugin.t_web_source_operation,
    p_web_source           IN apex_plugin.t_web_source,
    --
    p_response             IN CLOB,
    p_status_code          IN pls_integer,
    p_error_message        IN VARCHAR2,
    --
    p_values_context       IN apex_exec.t_context );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_web_source_operation` | REST Data Source operation (Plug-In) meta data. |
| `p_web_source` | REST Data Source (Plug-In) meta data. |
| `p_response` | REST response to parse. |
| `p_status_code` | HTTP status code to use. |
| `p_error_message` | Error message to use. |
| `p_values_context` | Values context to store the return values in. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.PROCESS_DML_RESPONSE(
        p_web_source_operation => null,
        p_web_source => null,
        p_response => to_clob('Example text'),
        p_status_code => 1,
        p_error_message => to_clob('Example text'),
        p_values_context => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.PROCESS_DML_RESPONSE(
            p_web_source_operation => null,
            p_web_source => null,
            p_response => to_clob('Example text'),
            p_status_code => 1,
            p_error_message => to_clob('Example text'),
            p_values_context => to_clob('Example text')
        );
end;
/
```

