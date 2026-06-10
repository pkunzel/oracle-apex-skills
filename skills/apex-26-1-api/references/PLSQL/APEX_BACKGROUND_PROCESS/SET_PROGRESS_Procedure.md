# APEX_BACKGROUND_PROCESS.SET_PROGRESS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.SET_PROGRESS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BACKGROUND_PROCESS](../APEX_BACKGROUND_PROCESS.md)

## Purpose

This procedure sets progress of an execution. This procedure must be called from within PL/SQL code.

## When To Use

Use this page when code needs the `APEX_BACKGROUND_PROCESS.SET_PROGRESS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BACKGROUND_PROCESS.SET_PROGRESS (
    p_totalwork IN NUMBER DEFAULT NULL,
    p_sofar     IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_totalwork` | Total units of work to be processed by the background process. |
| `p_sofar` | Units of work being processed so far. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_background_process.set_progress(
        p_totalwork => 100,
        p_sofar     => :P50_ROWS_PROCESSED
    );
end;
/
```

