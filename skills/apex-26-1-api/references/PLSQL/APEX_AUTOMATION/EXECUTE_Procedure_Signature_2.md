# APEX_AUTOMATION.EXECUTE Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This procedure executes an automation.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.EXECUTE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.EXECUTE (
    p_application_id    IN NUMBER DEFAULT {current application id},
    p_static_id         IN VARCHAR2,
    p_run_in_background IN BOOLEAN )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation to execute. |
| `p_run_in_background` | If TRUE , synchronization runs in the background as a one-time DBMS_SCHEDULER job. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_automation.EXECUTE(
        p_application_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_run_in_background => true
    );
end;
/
```

