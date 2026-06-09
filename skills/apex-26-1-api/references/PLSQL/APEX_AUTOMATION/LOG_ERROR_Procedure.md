# APEX_AUTOMATION.LOG_ERROR Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LOG_ERROR-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This procedure writes a log entry with severity ERROR and is to be used within automation code.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.LOG_ERROR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.LOG_ERROR (
    p_message   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Message to write to the automation log. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_automation.LOG_ERROR(
        p_message => to_clob('Example text')
    );
end;
/
```

