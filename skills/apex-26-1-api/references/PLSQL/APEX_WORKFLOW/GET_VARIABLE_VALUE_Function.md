# APEX_WORKFLOW.GET_VARIABLE_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_VARIABLE_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function gets the string value of a workflow variable.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.GET_VARIABLE_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.GET_VARIABLE_VALUE (
    p_instance_id            IN NUMBER,
    p_variable_static_id     IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |
| `p_variable_static_id` | Static ID of the variable. |

## Returns

VARCHAR2.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_workflow.GET_VARIABLE_VALUE(
        p_instance_id => 1,
        p_variable_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

