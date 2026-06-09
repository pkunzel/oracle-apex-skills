# APEX_UTIL.STRING_TO_TABLE Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRING_TO_TABLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.STRING_TO_TABLE` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.STRING_TO_TABLE (
    p_string       IN VARCHAR2,
    p_separator    IN VARCHAR2 DEFAULT ':' ) 
    RETURN APEX_APPLICATION_GLOBAL.VC_ARR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | String to be converted into a PL/SQL table of type APEX_APPLICATION_GLOBAL.VC_ARR2 . |
| `p_separator` | String separator. The default is a colon. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_APPLICATION_GLOBAL.VC_ARR2;
begin
    l_result := apex_util.STRING_TO_TABLE(
        p_string => 'EXAMPLE',
        p_separator => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_APPLICATION_GLOBAL.VC_ARR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.STRING_TO_TABLE(
            p_string => 'EXAMPLE',
            p_separator => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

