# APEX_STRING_UTIL.FIND_LINKS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_LINKS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function finds https and http hypertext links within text. The URL is preserved and the protocol is returned in lower case.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_LINKS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FIND_LINKS (
    p_string     IN VARCHAR2,
    p_https_only IN BOOLEAN  DEFAULT FALSE )
RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_https_only` | Default FALSE . If TRUE , only returns https:// links. |

## Returns

This function returns an array of links.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string_util.FIND_LINKS(
        p_string => 'EXAMPLE',
        p_https_only => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_string_util.FIND_LINKS(
            p_string => 'EXAMPLE',
            p_https_only => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

