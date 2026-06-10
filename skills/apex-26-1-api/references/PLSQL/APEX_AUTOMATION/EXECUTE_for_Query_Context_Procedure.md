# APEX_AUTOMATION.EXECUTE for Query Context Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-for-Query-Context.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This procedure executes automation actions for a given query context. The columns returned by the query context match those defined in the automation query, especially when columns are referenced as bind variables in the actions code.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.EXECUTE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.EXECUTE (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2,
    p_query_context     IN apex_exec.t_context )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation to execute. |
| `p_query_context` | The context to run the actions for the query. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_context apex_exec.t_context;
begin
    l_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => q'[select order_id, status from orders where status = 'READY']'
    );

    apex_automation.execute(
        p_application_id => apex_application.g_flow_id,
        p_static_id      => 'SYNC_ORDERS',
        p_query_context  => l_context
    );

    apex_exec.close(l_context);
exception
    when others then
        if l_context is not null then
            apex_exec.close(l_context);
        end if;
        raise;
end;
/
```

