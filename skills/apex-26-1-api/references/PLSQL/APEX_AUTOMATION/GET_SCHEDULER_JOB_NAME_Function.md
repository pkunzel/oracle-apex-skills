# APEX_AUTOMATION.GET_SCHEDULER_JOB_NAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_SCHEDULER_JOB_NAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This procedure returns the name which is used for the scheduler job when the automation executes.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.GET_SCHEDULER_JOB_NAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.GET_SCHEDULER_JOB_NAME (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation. |

## Returns

The name of the the scheduler job which is generated to execute this automation.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_automation.GET_SCHEDULER_JOB_NAME(
        p_application_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

