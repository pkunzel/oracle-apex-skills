# APEX_MAIL.GET_INSTANCE_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INSTANCE_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This function gets the instance URL if an email includes a link to an Oracle APEX instance.

## When To Use

Use this page when code needs the `APEX_MAIL.GET_INSTANCE_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.GET_INSTANCE_URL return VARCHAR2;
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
    l_result := apex_mail.GET_INSTANCE_URL;
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

    l_result := apex_mail.GET_INSTANCE_URL;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

