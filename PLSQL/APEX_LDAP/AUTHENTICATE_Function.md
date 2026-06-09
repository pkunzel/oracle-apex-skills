# APEX_LDAP.AUTHENTICATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/AUTHENTICATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

This function returns a boolean TRUE if the user name and password can be used to perform a SIMPLE_BIND_S call using the provided search base, host, and port.

## When To Use

Use this page when code needs the `APEX_LDAP.AUTHENTICATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.AUTHENTICATE (
    p_username     IN VARCHAR2 DEFAULT NULL,
    p_password     IN VARCHAR2 DEFAULT NULL,
    p_search_base  IN VARCHAR2,
    p_host         IN VARCHAR2,
    p_port         IN VARCHAR2 DEFAULT 389,
    p_use_ssl      IN VARCHAR2 DEFAULT 'N' )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Login name of the user. |
| `p_password` | Password for p_username . |
| `p_search_base` | LDAP search base, for example, dc=users,dc=my,dc=org . |
| `p_host` | LDAP server host name. |
| `p_port` | LDAP server port number. |
| `p_use_ssl` | (Default) Set to N to not use SSL. Set to Y to use SSL in bind to LDAP server. Set to A to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_ldap.AUTHENTICATE(
        p_username => 'USER',
        p_password => 'EXAMPLE',
        p_search_base => 'EXAMPLE',
        p_host => 'EXAMPLE',
        p_port => 'EXAMPLE',
        p_use_ssl => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ldap.AUTHENTICATE(
            p_username => 'USER',
            p_password => 'EXAMPLE',
            p_search_base => 'EXAMPLE',
            p_host => 'EXAMPLE',
            p_port => 'EXAMPLE',
            p_use_ssl => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

