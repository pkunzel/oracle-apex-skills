# APEX_EXEC.ADD_PARAMETER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_ORDER_BY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure adds a SQL parameter to the parameter collection. To use SQL parameters, prepare the array first, then use it in the execution call.

## When To Use

Use this page when code needs the `APEX_EXEC.ADD_PARAMETER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_parameters` | SQL parameter array. |
| `p_name` | Parameter name. |
| `p_value` | Parameter value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.ADD_PARAMETER(
        p_parameters => null,
        p_name => null,
        p_value => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.ADD_PARAMETER(
            p_parameters => null,
            p_name => null,
            p_value => 'EXAMPLE'
        );
end;
/
```

