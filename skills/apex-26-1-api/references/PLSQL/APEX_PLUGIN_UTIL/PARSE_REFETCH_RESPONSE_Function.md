# APEX_PLUGIN_UTIL.PARSE_REFETCH_RESPONSE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_REFETCH_RESPONSE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function parses the response from a "DML row refetch." A "row refetch" is used for lost update detection in order to verify that nobody else changed the row.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PARSE_REFETCH_RESPONSE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PARSE_REFETCH_RESPONSE (
    p_web_source_operation IN apex_plugin.t_web_source_operation,
    p_web_source           IN apex_plugin.t_web_source,
    p_values_context       IN apex_exec.t_context,
    --
    p_response             IN CLOB )
RETURN apex_exec.t_context;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_web_source_operation` | REST Data Source operation (Plug-In) meta data. |
| `p_web_source` | REST Data Source (Plug-In) meta data. |
| `p_response` | REST response to parse. |
| `p_values_context` | Values context, needed for DML column definitions. |

## Returns

Parameter Description * APEX_EXEC "Values" context object for the plug-in developer to retrieve the checksum or column values.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_EXEC.T_CONTEXT;
begin
    l_result := apex_plugin_util.PARSE_REFETCH_RESPONSE(
        p_web_source_operation => null,
        p_web_source => null,
        p_values_context => to_clob('Example text'),
        p_response => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

