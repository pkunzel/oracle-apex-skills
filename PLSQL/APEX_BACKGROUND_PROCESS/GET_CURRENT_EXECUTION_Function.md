# APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BACKGROUND_PROCESS](../APEX_BACKGROUND_PROCESS.md)

## Purpose

This function returns the status of the current execution. This function is called from within the background process to get its own execution ID.

## When To Use

Use this page when code needs the `APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION
    RETURN t_execution;
```

## Returns

T_EXECUTION record with status information for the current execution.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_EXECUTION;
begin
    l_result := apex_background_process.GET_CURRENT_EXECUTION;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result T_EXECUTION;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_background_process.GET_CURRENT_EXECUTION;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

