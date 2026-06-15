# APEX_HUMAN_TASK.GET_LOV_PRIORITY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_LOV_PRIORITY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function retrieves the list of value data for the task priority.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_LOV_PRIORITY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_LOV_PRIORITY
RETURN wwv_flow_t_temp_lov_data pipelined;
```

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
          from table(apex_human_task.get_lov_priority())
         order by return_value
    ) loop
        sys.dbms_output.put_line(r.return_value || ': ' || r.display_value);
    end loop;
end;
/
```
