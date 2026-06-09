# APEX_PLUGIN.GET_AJAX_IDENTIFIER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AJAX_IDENTIFIER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This function returns the Ajax identifier used to call the Ajax callback function defined for the plug-in.

## When To Use

Use this page when code needs the `APEX_PLUGIN.GET_AJAX_IDENTIFIER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN.GET_AJAX_IDENTIFIER
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_plugin.GET_AJAX_IDENTIFIER;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin.GET_AJAX_IDENTIFIER;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

