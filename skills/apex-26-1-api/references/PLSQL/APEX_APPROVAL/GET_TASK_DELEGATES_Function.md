# APEX_APPROVAL.GET_TASK_DELEGATES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_DELEGATES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.GET_TASK_DELEGATES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.GET_TASK_DELEGATES (
    p_task_id IN NUMBER )
RETURN apex_t_temp_lov_data pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The task ID. |

## Returns

A table of apex_t_temp_lov_data .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_delegates apex_t_temp_lov_data;
begin
    l_delegates := apex_approval.get_task_delegates(
        p_task_id => :P20_TASK_ID
    );

    sys.dbms_output.put_line('Delegate rows: ' || l_delegates.count);
end;
/
```
