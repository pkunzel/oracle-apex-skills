# APEX_EXEC.GET_DML_STATUS_CODE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DML_STATUS_CODE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns the SQL status code of the last context execution, for the current row. For local or remote SQL contexts, the ORA error code will be returned in case of an error, NULL in case of success.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_DML_STATUS_CODE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_DML_STATUS_CODE (
    p_context               IN t_context )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |

## Returns

The DML status code of the current row. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_exec.GET_DML_STATUS_CODE(
        p_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

