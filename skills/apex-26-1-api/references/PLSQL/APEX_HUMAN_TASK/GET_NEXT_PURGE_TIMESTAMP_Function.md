# APEX_HUMAN_TASK.GET_NEXT_PURGE_TIMESTAMP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.GET_NEXT_PURGE_TIMESTAMP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HUMAN_TASK](../APEX_HUMAN_TASK.md)

## Purpose

This function retrieves the timestamp of the next purge.

## When To Use

Use this page when code needs the `APEX_HUMAN_TASK.GET_NEXT_PURGE_TIMESTAMP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HUMAN_TASK.GET_NEXT_PURGE_TIMESTAMP
RETURN timestamp with time zone;
```

## Returns

Returns the timestamp of the next purge.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result TIMESTAMP;
begin
    l_result := apex_human_task.GET_NEXT_PURGE_TIMESTAMP;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

