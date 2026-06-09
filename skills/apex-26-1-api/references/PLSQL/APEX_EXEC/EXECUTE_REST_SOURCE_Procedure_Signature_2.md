# APEX_EXEC.EXECUTE_REST_SOURCE Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure executes a REST Source operation. The REST Source module and operation are identified by its static IDs. Use the t_parameters array to pass in values for declared REST Data Source parameters. REST Source invocation is based on metadata defined in Shared Components.

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_REST_SOURCE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.EXECUTE_REST_SOURCE (
    p_static_id             IN            VARCHAR2,
    p_operation_static_id   IN            VARCHAR2,
    p_parameters            IN OUT NOCOPY t_parameters );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID of the REST Data Source. |
| `p_operation_static_id` | Static ID of the operation within the REST Data Source. |
| `p_parameters` | Parameter values to pass to the external REST Data Source. Note that HTTP Headers, URL Patterns and other parameters being passed to a REST Data Source are typically strings. Oracle recommends that you explicitly pass all values to VARCHAR2 before adding to the t_parameters array. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.EXECUTE_REST_SOURCE(
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_operation_static_id => 'EXAMPLE_STATIC_ID',
        p_parameters => null
    );
end;
/
```

