# APEX_AUTOMATION.RESCHEDULE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_RESCHEDULE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This procedure sets the next scheduled execution date of a "polling" automation to now so that the main automation execution job executes the automation as soon as possible. If the automation is currently running, it will not restart.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.RESCHEDULE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.RESCHEDULE (
  p_application_id  IN NUMBER                     DEFAULT {current application id},
  p_static_id       IN VARCHAR2,
  p_next_run_at     IN timestamp with time zone   DEFAULT systimestamp )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation to execute. |
| `p_next_run_at` | Timestamp of the next automation run. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_automation.RESCHEDULE(
        p_application_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_next_run_at => sysdate
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_automation.RESCHEDULE(
            p_application_id => 1,
            p_static_id => 'EXAMPLE_STATIC_ID',
            p_next_run_at => sysdate
        );
end;
/
```

