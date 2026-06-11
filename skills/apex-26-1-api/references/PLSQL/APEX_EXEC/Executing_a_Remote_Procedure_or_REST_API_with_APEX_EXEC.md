# APEX_EXEC.Executing a Remote Procedure or REST API with APEX_EXEC

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

All APEX_EXEC procedures require an existing APEX session to function. In a pure SQL or PL/SQL context, use the APEX_SESSION package to initialize a new session.

## When To Use

Use this page when code needs the `APEX_EXEC.Executing a Remote Procedure or REST API with APEX_EXEC` procedure. Confirm security, workspace, and session requirements for your calling context.

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

```sql
declare
    l_parameters apex_exec.t_parameters;
begin
    apex_exec.add_parameter(l_parameters, 'order_id', :P10_ORDER_ID);

    apex_exec.execute_rest_source(
        p_static_id           => 'ORDERS_API',
        p_operation_static_id => 'submit-order',
        p_parameters          => l_parameters
    );
end;
/
```
