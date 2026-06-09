# APEX_HUMAN_TASK.GET_LOV_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_LOV_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

Gets the list of value data for the task attribute type.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_LOV_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_LOV_TYPE
RETURN apex_t_temp_lov_data;
```

## Returns

apex_t_temp_lov_data

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_TEMP_LOV_DATA;
begin
    l_result := apex_human_task.GET_LOV_TYPE;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

