# APEX_WORKFLOW.GET_LOV_ACTIVITY_STATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_LOV_ACTIVITY_STATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function gets the list of value data for the activity instance attribute state.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.GET_LOV_ACTIVITY_STATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.GET_LOV_ACTIVITY_STATE
RETURN apex_t_temp_lov_data;
```

## Returns

A table of apex_t_temp_lov_data .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Use the activity-state LOV function as a report or LOV source.

```sql
select display_value,
       return_value
  from table(apex_workflow.get_lov_activity_state);
```

