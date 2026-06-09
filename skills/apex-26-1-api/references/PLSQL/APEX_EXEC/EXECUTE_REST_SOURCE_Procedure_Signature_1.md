# APEX_EXEC.EXECUTE_REST_SOURCE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure executes a REST Source operation based on module static ID, operation, and URL pattern (if required). Use the t_parameters array to pass in values for declared REST Data Source parameters. REST Source invocation is based on metadata defined in Shared Components.

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_REST_SOURCE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.EXECUTE_REST_SOURCE (
    p_static_id     IN      VARCHAR2,
    p_operation     IN      VARCHAR2,
    p_url_pattern   IN      VARCHAR2 DEFAULT NULL,
    p_parameters    IN OUT  t_parameters );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID of the REST Data Source. |
| `p_operation` | Name of the operation (for example, POST, GET, DELETE). |
| `p_url_pattern` | If multiple operations with the same name exist, specify the URL pattern, as defined in Shared Components, to identify the REST Source operation. |
| `p_parameters` | Parameter values to pass to the external REST Data Source. Note that HTTP Headers, URL Patterns and other parameters being passed to a REST Data Source are typically strings. Oracle recommends that you explicitly pass all values to VARCHAR2 before adding to the t_parameters array. |
| `t_parameters` | Array with OUT parameter values, received from the REST Data Source. |

## Returns

Return Description p_parameters Array with OUT parameter values, received from the REST Data Source.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.EXECUTE_REST_SOURCE(
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_operation => 'EXAMPLE',
        p_url_pattern => 'EXAMPLE',
        p_parameters => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.EXECUTE_REST_SOURCE(
            p_static_id => 'EXAMPLE_STATIC_ID',
            p_operation => 'EXAMPLE',
            p_url_pattern => 'EXAMPLE',
            p_parameters => null
        );
end;
/
```

