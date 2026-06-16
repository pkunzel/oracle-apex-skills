# APEX_WORKFLOW.Constants and Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.Constants-and-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

Covers the documented constants APEX_WORKFLOW.Constants and Data Types.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.Constants and Data Types` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Create workflow parameter values with the documented t_workflow_parameter and session-state value record.

```sql
declare
    l_params apex_workflow.t_workflow_parameters;
begin
    l_params(1).static_id := 'ORDER_ID';
    l_params(1).value.data_type := apex_session_state.c_data_type_varchar2;
    l_params(1).value.varchar2_value := :P10_ORDER_ID;

    l_params(2).static_id := 'NEEDS_REVIEW';
    l_params(2).value.data_type := apex_session_state.c_data_type_boolean;
    l_params(2).value.boolean_value := true;
end;
/
```

