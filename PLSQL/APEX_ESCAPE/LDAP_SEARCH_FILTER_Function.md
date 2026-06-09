# APEX_ESCAPE.LDAP_SEARCH_FILTER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_SEARCH_FILTER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

The LDAP_SEARCH_FILTER function escapes reserved characters in an LDAP search filter, according to RFC 4515. The RFC describes *()\/ as reserved characters (see p_reserved_chars ). These, non-printable characters (ASCII 0 - 31) and ones with a code > 127 (see p_escape_non_ascii ) are escaped as \xx , where xx is the hexadecimal character code.

## When To Use

Use this page when code needs the `APEX_ESCAPE.LDAP_SEARCH_FILTER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.LDAP_SEARCH_FILTER (
    p_string              IN VARCHAR2,
    p_reserved_chars      IN VARCHAR2 DEFAULT c_ldap_search_reserved_chars,
    p_escape_non_ascii    IN BOOLEAN  DEFAULT TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string that is escaped. |
| `p_reserved_chars` | A list of characters that when found in p_string is escaped with \xx where xx is the character's ASCII hexadecimal code. |
| `p_escape_non_ascii` | If TRUE, characters above ascii 127 in p_string are escaped with \xx where xx is the character's ASCII hexadecimal code. This is supported by RFCs 4514, but may cause errors with older LDAP servers and Microsoft AD. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.LDAP_SEARCH_FILTER(
        p_string => 'EXAMPLE',
        p_reserved_chars => 'EXAMPLE',
        p_escape_non_ascii => true
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

    l_result := apex_escape.LDAP_SEARCH_FILTER(
            p_string => 'EXAMPLE',
            p_reserved_chars => 'EXAMPLE',
            p_escape_non_ascii => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

