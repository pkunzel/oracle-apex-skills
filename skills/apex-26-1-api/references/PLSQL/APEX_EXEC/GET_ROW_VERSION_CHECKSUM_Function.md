# APEX_EXEC.GET_ROW_VERSION_CHECKSUM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ROW_VERSION_CHECKSUM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns the row version checksum for the current row. This is either a specific column (when designated as "checksum column") or a calculated checksum from all column values.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_ROW_VERSION_CHECKSUM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_ROW_VERSION_CHECKSUM (
    p_context     IN t_context )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |

## Returns

The row version checksum. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_exec.GET_ROW_VERSION_CHECKSUM(
        p_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

