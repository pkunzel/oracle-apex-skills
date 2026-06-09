# APEX_BACKGROUND_PROCESS.SET_STATUS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.SET_STATUS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BACKGROUND_PROCESS](../APEX_BACKGROUND_PROCESS.md)

## Purpose

This procedure sets status for an execution chain. This procedure must be called from within PL/SQL code.

## When To Use

Use this page when code needs the `APEX_BACKGROUND_PROCESS.SET_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BACKGROUND_PROCESS.SET_STATUS (
    p_message   IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Current status message for the page chain. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_background_process.SET_STATUS(
        p_message => to_clob('Example text')
    );
end;
/
```

