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

Read a named text message and pass named substitution values.

```sql
declare
    l_message varchar2(32767);
begin
    l_message := apex_lang.get_message(
        p_name           => 'ORDER_STATUS',
        p_params         => apex_t_varchar2('ORDER_ID', :P10_ORDER_ID, 'STATUS', :P10_STATUS),
        p_lang           => 'de',
        p_application_id => 100
    );

    apex_util.set_session_state('P10_STATUS_TEXT', l_message);
end;
/
```
