# APEX_INSTANCE_DEBUG.IS_ENABLED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.IS_ENABLED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_DEBUG](../APEX_INSTANCE_DEBUG.md)

## Purpose

This procedure returns whether instance debug is enabled.

## When To Use

Use this page when code needs the `APEX_INSTANCE_DEBUG.IS_ENABLED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_DEBUG.IS_ENABLED
    RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_instance_debug.IS_ENABLED;
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

    l_result := apex_instance_debug.IS_ENABLED;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

