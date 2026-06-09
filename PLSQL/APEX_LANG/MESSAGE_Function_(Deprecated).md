# APEX_LANG.MESSAGE Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_LANG.MESSAGE` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_LANG.MESSAGE (
    p_name            IN VARCHAR2 DEFAULT NULL,
    p0                IN VARCHAR2 DEFAULT NULL,
    p1                IN VARCHAR2 DEFAULT NULL,
    p2                IN VARCHAR2 DEFAULT NULL,
    ...
    p9                IN VARCHAR2 DEFAULT NULL,
    p_lang            IN VARCHAR2 DEFAULT NULL,
    p_application_id  IN NUMBER   DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the message as defined in Text Messages under Shared Components of your application in Oracle APEX . |
| `p0 through p9` | Dynamic substitution value: p0 corresponds to %0 in the translation string; p1 corresponds to %1 in the translation string; p2 corresponds to %2 in the translation string, and so on. |
| `p_lang` | Language code for the message to be retrieved. If not specified, APEX uses the current language for the user as defined in the Application Language Derived From attribute. See also Specifying the Primary Language for an Application in Oracle APEX App Builder User’s Guide . |
| `p_application_id` | Used to specify the application ID within the current workspace that owns the translated message you wish to return. Useful when coding packages that might be called outside of the scope of APEX such as packages called from a database job. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_lang.MESSAGE(
        p_name => 'EXAMPLE',
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

    l_result := apex_lang.MESSAGE(
            p_name => 'EXAMPLE',
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

