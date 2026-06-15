# APEX_HUMAN_TASK.Constants and Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.Constants-and-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

The APEX_HUMAN_TASK package uses the following constants and data types.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.Constants and Data Types` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

The constants are the safest way to pass task states, operations, outcomes, priorities, list contexts, and participant types. Task parameters are an associative array of records whose `static_id` values must match the task definition.

```sql
declare
    l_params apex_human_task.t_task_parameters;
begin
    l_params(1).static_id    := 'ORDER_ID';
    l_params(1).string_value := :P10_ORDER_ID;

    apex_human_task.complete_task(
        p_task_id   => :P10_TASK_ID,
        p_outcome   => apex_human_task.c_task_outcome_approved,
        p_autoclaim => true
    );
end;
/
```
