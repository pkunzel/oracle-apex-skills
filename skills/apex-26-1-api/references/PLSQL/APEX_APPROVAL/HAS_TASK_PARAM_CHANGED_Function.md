# APEX_APPROVAL.HAS_TASK_PARAM_CHANGED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_TASK_PARAM_CHANGED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.HAS_TASK_PARAM_CHANGED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.HAS_TASK_PARAM_CHANGED (
             p_task_id                IN NUMBER,
             p_param_static_id        IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static ID of the parameter. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_amount_changed boolean;
begin
    l_amount_changed := apex_approval.has_task_param_changed(
        p_task_id         => :P20_TASK_ID,
        p_param_static_id => 'AMOUNT'
    );

    if l_amount_changed then
        sys.dbms_output.put_line('Amount was updated.');
    end if;
end;
/
```
