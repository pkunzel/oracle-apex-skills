# APEX_APPROVAL.GET_TASK_PARAMETER_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PARAMETER_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.GET_TASK_PARAMETER_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.GET_TASK_PARAMETER_VALUE (
    p_task_id                IN NUMBER,
    p_param_static_id        IN VARCHAR2,
    p_ignore_not_found       IN BOOLEAN DEFAULT FALSE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static id of the parameter. |
| `p_ignore_not_found` | If set to false (default) and no data is found, a no_data_found exception will be raised. If set to true and no data is found, null will be returned. |

## Returns

The task parameter value for the given static ID or null.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_approval.GET_TASK_PARAMETER_VALUE(
        p_task_id => 1,
        p_param_static_id => 'EXAMPLE_STATIC_ID',
        p_ignore_not_found => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

