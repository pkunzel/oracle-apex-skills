# APEX_APPROVAL.GET_TASK_PARAMETER_OLD_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PARAMETER_OLD_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.GET_TASK_PARAMETER_OLD_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.GET_TASK_PARAMETER_OLD_VALUE (
    p_task_id           IN NUMBER,
    p_param_static_id   IN VARCHAR2,
    p_raise_error       IN BOOLEAN DEFAULT TRUE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static ID of the parameter. |
| `p_raise_error` | If TRUE , raises an error if the parameter is not found. |

## Returns

VARCHAR2 - The old value of this parameter in VARCHAR2 format.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_approval.GET_TASK_PARAMETER_OLD_VALUE(
        p_task_id => 1,
        p_param_static_id => 'EXAMPLE_STATIC_ID',
        p_raise_error => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

