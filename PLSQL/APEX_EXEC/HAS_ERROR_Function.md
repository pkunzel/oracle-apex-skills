# APEX_EXEC.HAS_ERROR Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_ERROR-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns TRUE when DML execution led to an error and FALSE when not.

## When To Use

Use this page when code needs the `APEX_EXEC.HAS_ERROR` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.HAS_ERROR (
    p_context               IN t_context )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |

## Returns

TRUE if an error occurred, otherwise FALSE . Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_exec.HAS_ERROR(
        p_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_exec.HAS_ERROR(
            p_context => to_clob('Example text')
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

