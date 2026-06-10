# APEX_APPROVAL.SET_TASK_PARAMETER_VALUES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_PARAMETER_VALUES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.SET_TASK_PARAMETER_VALUES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.SET_TASK_PARAMETER_VALUES (
    p_task_id                IN NUMBER,
    p_parameters             IN t_task_parameters,
    p_raise_error            IN BOOLEAN DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_parameters` | The list of changed parameters. |
| `p_raise_error` | Default TRUE . When TRUE , the API raises an exception and cancels updates to the parameters. If FALSE , the API ignores raised exceptions if the list contains one or more incorrect parameter static IDs or parameters that are not marked as updatable in the Task Definition. The API updates the rest of the parameters. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_params apex_approval.t_task_parameters;
begin
    l_params := apex_approval.c_empty_task_parameters;

    apex_approval.set_task_parameter_values(
        p_task_id     => :P20_TASK_ID,
        p_parameters  => l_params,
        p_raise_error => true
    );
end;
/
```
