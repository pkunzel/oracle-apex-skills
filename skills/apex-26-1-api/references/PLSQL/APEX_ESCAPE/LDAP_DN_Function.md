# APEX_ESCAPE.LDAP_DN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_DN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

The LDAP_DN function escapes reserved characters in an LDAP distinguished name, according to RFC 4514. The RFC describes "+,; \ as reserved characters (see p_reserved_chars ). These are escaped by a backslash, for example, " becomes \". Non-printable characters, ASCII 0 - 31, and ones with a code > 127 (see p_escape_non_ascii ) are escaped as \xx , where xx is the hexadecimal character code. The space character at the beginning or end of the string and a # at the beginning is also escaped with a backslash.

## When To Use

Use this page when code needs the `APEX_ESCAPE.LDAP_DN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.LDAP_DN (
    p_string            IN VARCHAR2,
    p_reserved_chars    IN VARCHAR2 DEFAULT c_ldap_dn_reserved_chars,
    p_escaped_non_ascii IN BOOLEAN  DEFAULT TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The text string that is escaped. |
| `p_reserved_chars` | A list of characters that when found in p_string is escaped with a backslash. |
| `p_escaped_non_ascii` | If TRUE , characters above ASCII 127 in p_string are escaped with a backslash. This is supported by RFCs 4514 and 2253, but may cause errors with older LDAP servers and Microsoft AD. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.LDAP_DN(
        p_string => 'EXAMPLE',
        p_reserved_chars => 'EXAMPLE',
        p_escaped_non_ascii => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

