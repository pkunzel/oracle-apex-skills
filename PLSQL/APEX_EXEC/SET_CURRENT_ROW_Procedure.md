# APEX_EXEC.SET_CURRENT_ROW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_CURRENT_ROW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure sets the current row pointer of a DML context to the given row number. Subsequent SET_VALUE invocations affect the row with this row number.

## When To Use

Use this page when code needs the `APEX_EXEC.SET_CURRENT_ROW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.SET_CURRENT_ROW (
    p_context   IN t_context,
    p_row_idx   IN PLS_INTEGER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_row_idx` | Row number to set the "current row" pointer to. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.SET_CURRENT_ROW(
        p_context => to_clob('Example text'),
        p_row_idx => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.SET_CURRENT_ROW(
            p_context => to_clob('Example text'),
            p_row_idx => 1
        );
end;
/
```

