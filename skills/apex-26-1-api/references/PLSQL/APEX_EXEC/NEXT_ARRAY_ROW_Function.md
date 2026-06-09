# APEX_EXEC.NEXT_ARRAY_ROW Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function advances the array cursor by one row. Can only be called within an array column; otherwise an error is raised.

## When To Use

Use this page when code needs the `APEX_EXEC.NEXT_ARRAY_ROW` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.NEXT_ARRAY_ROW (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions |

## Returns

TRUE if successful. FALSE if the end of the result set has been reached. See Also: OPEN_ARRAY Procedure Signature 1 CLOSE_ARRAY Procedure HAS_MORE_ARRAY_ROWS Function Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_exec.NEXT_ARRAY_ROW(
        p_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

