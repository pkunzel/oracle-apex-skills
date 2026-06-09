# APEX_AUTOMATION.SKIP_CURRENT_ROW Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_SKIP_CURRENT_ROW-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This procedure skips processing of the current row and continues with the next one. Use this procedure in automation action code.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.SKIP_CURRENT_ROW` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.SKIP_CURRENT_ROW (
    p_log_message   IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_log_message` | Message to write to the automation log. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_automation.SKIP_CURRENT_ROW(
        p_log_message => to_clob('Example text')
    );
end;
/
```

