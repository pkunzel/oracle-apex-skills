# APEX_AUTHENTICATION.GET_CALLBACK_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CALLBACK_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This function is a plug-in helper function to return a URL that is used as a landing request for external login pages. When the browser sends the request, it triggers the authentication plug-in Ajax callback, which can be used to log the user in.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.GET_CALLBACK_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.GET_CALLBACK_URL ( 
    p_x01           IN VARCHAR2 DEFAULT NULL, 
    p_x02           IN VARCHAR2 DEFAULT NULL, 
    p_x03           IN VARCHAR2 DEFAULT NULL, 
    p_x04           IN VARCHAR2 DEFAULT NULL, 
    p_x05           IN VARCHAR2 DEFAULT NULL, 
    p_x06           IN VARCHAR2 DEFAULT NULL, 
    p_x07           IN VARCHAR2 DEFAULT NULL, 
    p_x08           IN VARCHAR2 DEFAULT NULL, 
    p_x09           IN VARCHAR2 DEFAULT NULL, 
    p_x10           IN VARCHAR2 DEFAULT NULL,
    p_callback_name IN VARCHAR2 DEFAULT NULL ) 
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_x01 through p_x10` | Optional parameters that the external login passes to the authentication plugin. |
| `p_callback_name` | Optional public name of the callback, defaults to apex_authentication.callback . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_authentication.GET_CALLBACK_URL(
        p_x01 => 'EXAMPLE',
        p_x02 => 'EXAMPLE',
        p_x03 => 'EXAMPLE',
        p_x04 => 'EXAMPLE',
        p_x05 => 'EXAMPLE',
        p_x06 => 'EXAMPLE',
        p_x07 => 'EXAMPLE',
        p_x08 => 'EXAMPLE',
        p_x09 => 'EXAMPLE',
        p_x10 => 'EXAMPLE',
        p_callback_name => 'EXAMPLE'
    );
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

    l_result := apex_authentication.GET_CALLBACK_URL(
            p_x01 => 'EXAMPLE',
            p_x02 => 'EXAMPLE',
            p_x03 => 'EXAMPLE',
            p_x04 => 'EXAMPLE',
            p_x05 => 'EXAMPLE',
            p_x06 => 'EXAMPLE',
            p_x07 => 'EXAMPLE',
            p_x08 => 'EXAMPLE',
            p_x09 => 'EXAMPLE',
            p_x10 => 'EXAMPLE',
            p_callback_name => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

