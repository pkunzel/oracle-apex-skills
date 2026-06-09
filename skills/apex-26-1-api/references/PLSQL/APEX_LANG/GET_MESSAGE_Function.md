# APEX_LANG.GET_MESSAGE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.GET_MESSAGE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Translates text strings (or messages) generated from PL/SQL-stored procedures, functions, triggers, packaged procedures, and functions.

## When To Use

Use this page when code needs the `APEX_LANG.GET_MESSAGE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.GET_MESSAGE (
    p_name              IN VARCHAR2,
    p_params            IN apex_t_varchar2  DEFAULT apex_t_varchar2(),
    p_lang              IN VARCHAR2         DEFAULT NULL,
    p_application_id    IN NUMBER           DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the message as defined in Text Messages under Shared Components of your application in Oracle APEX . |
| `p_params` | List of parameter name value pairs to correspond to %my_name %my_age placeholders in the text message. They are replaced by the value of the named parameter processed left to right. |
| `p_lang` | Language code for the message to be retrieved. If not specified, APEX uses the current language for the user as defined in the "Application Language Derived From" attribute. |
| `p_application_id` | Specifies the application ID within the current workspace that owns the translated message you wish to return. Useful when coding packages that could be called outside of the scope of APEX such as packages called from a database job. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_lang.GET_MESSAGE(
        p_name => 'EXAMPLE',
        p_params => 'EXAMPLE',
        p_lang => 'EXAMPLE',
        p_application_id => 1
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

    l_result := apex_lang.GET_MESSAGE(
            p_name => 'EXAMPLE',
            p_params => 'EXAMPLE',
            p_lang => 'EXAMPLE',
            p_application_id => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

