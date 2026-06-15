# APEX_HUMAN_TASK.GET_TASK_PRIORITIES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_TASK_PRIORITIES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function gets the potential new priorities of a task. The actual priority is excluded from the list.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_TASK_PRIORITIES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_TASK_PRIORITIES (
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
begin
    for r in (
        select display_value, return_value
          from table(apex_human_task.get_task_priorities(
                   p_task_id => :P30_TASK_ID
               ))
         order by return_value
    ) loop
        sys.dbms_output.put_line(r.return_value || ': ' || r.display_value);
    end loop;
end;
/
```
