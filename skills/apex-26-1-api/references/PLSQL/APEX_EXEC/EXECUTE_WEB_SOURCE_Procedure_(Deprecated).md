# APEX_EXEC.EXECUTE_WEB_SOURCE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_WEB_SOURCE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_WEB_SOURCE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_EXEC.EXECUTE_WEB_SOURCE (
    p_module_static_id IN VARCHAR2,
    p_operation        IN VARCHAR2,
    p_url_pattern      IN VARCHAR2         DEFAULT NULL,
    p_parameters       IN OUT t_parameters )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID of the web source module. |
| `p_operation` | Name of the operation (for example, POST, GET, DELETE). |
| `p_url_pattern` | If multiple operations with the same name exist, specify the URL pattern, as defined in Shared Components, to identify the web source operation. |
| `p_parameters` | Parameter values to pass to the external web source. Note that HTTP Headers, URL Patterns and other parameters being passed to a Web Source Module are typically strings. Oracle recommends to explicitly pass all values to VARCHAR2 before adding to the T_PARAMETERS array. |

## Returns

Return Description p_parameters Array with OUT parameter values, received from the web source module.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_parameters apex_exec.t_parameters;
begin
    apex_exec.add_parameter(l_parameters, 'order_id', :P10_ORDER_ID);

    apex_exec.execute_web_source(
        p_module_static_id => 'LEGACY_ORDERS_WS',
        p_operation        => 'GET',
        p_url_pattern      => 'orders/:order_id',
        p_parameters       => l_parameters
    );
end;
/
```
